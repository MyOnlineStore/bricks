import React, { Component, RefObject, createRef } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import trbl from '../../utility/trbl';
import Option from './Option';
import { StyledMultiButton, StyledWindow, StyledWrapper, StyledChevronButton } from './style';
import { createPortal } from 'react-dom';
import { PropsType as ButtonPropsType } from '../Button';

type OmittedKeys = 'action' | 'href' | 'flat' | 'compact' | 'title';

type PlacementType = PopperChildrenProps['placement'];

type OptionsType = {
    label: string;
    description: string;
    default?: boolean;
    action(): void;
};

type PropsType = Pick<ButtonPropsType, Exclude<keyof ButtonPropsType, OmittedKeys>> & {
    placement?: PlacementType;
    options: Array<OptionsType>;
    offset?: number;
    distance?: number;
};

type StateType = {
    isOpen: boolean;
    selectedOption: OptionsType;
    selectedIndex: number;
};

class MultiButton extends Component<PropsType, StateType> {
    private windowRef: RefObject<HTMLDivElement>;
    private buttonRef: RefObject<HTMLDivElement>;
    private defaultIndex: number;

    private defaultOption: OptionsType = this.props.options.filter((option, index) => {
        if (option.default === true) {
            this.defaultIndex = index;

            return option.default === true;
        }
    })[0];

    public constructor(props: PropsType) {
        super(props);
        this.windowRef = createRef();
        this.buttonRef = createRef();
        if (!this.defaultOption) this.defaultOption = this.props.options[0];

        this.state = {
            isOpen: false,
            selectedOption: this.defaultOption,
            selectedIndex: this.defaultIndex,
        };
    }

    private open = (): void => {
        this.setState({
            isOpen: true,
            selectedOption: this.defaultOption,
            selectedIndex: this.defaultIndex,
        });
    };

    private close = (): void => {
        this.setState({ isOpen: false });
    };

    private mapOffset = (offset: number | undefined, distance: number | undefined): string => {
        switch (true) {
            case offset === undefined && distance === undefined:
                return '0, 0px';
            case offset !== undefined && distance === undefined:
                return `${offset}px, 0px`;
            case offset === undefined && distance !== undefined:
                return `0, ${distance}px`;
            default:
                return `${offset}px, ${distance}px`;
        }
    };

    private renderButtons = (): JSX.Element => {
        // filter irrelevant buttonprops for JS users
        // @ts-ignore
        const { href, action, flat, compact, title, ...filteredProps } = this.props;

        return (
            <>
                <StyledMultiButton
                    {...filteredProps}
                    title={this.defaultOption.label}
                    action={(): void => this.defaultOption.action()}
                >
                    <Box inline>{this.defaultOption.label}</Box>
                </StyledMultiButton>
                <StyledChevronButton
                    compact
                    title={this.defaultOption.label}
                    variant={this.props.variant}
                    action={this.state.isOpen ? this.close : this.open}
                >
                    <Icon size="small" icon={this.state.isOpen ? 'chevronUp' : 'chevronDown'} />
                </StyledChevronButton>
            </>
        );
    };

    public componentDidMount(): void {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    public handleClickOutside = (event: MouseEvent): void => {
        if (
            this.windowRef.current &&
            this.buttonRef.current &&
            !this.windowRef.current.contains(event.target as Node) &&
            !this.buttonRef.current.contains(event.target as Node)
        ) {
            this.close();
        }
    };

    public handleSelect = (option: OptionsType, index: number): void => {
        this.setState(
            {
                selectedOption: option,
                selectedIndex: index,
            },
            () => {
                this.state.selectedOption.action();
                this.close();
            },
        );
    };

    public render(): JSX.Element {
        return (
            <Manager>
                <Reference>
                    {({ ref }: ReferenceChildrenProps): JSX.Element => (
                        <div ref={this.buttonRef}>
                            <StyledWrapper innerRef={ref} isOpen={this.state.isOpen}>
                                {this.renderButtons()}
                            </StyledWrapper>
                        </div>
                    )}
                </Reference>
                {createPortal(
                    <div ref={this.windowRef}>
                        {this.state.isOpen && (
                            <Popper
                                placement={this.props.placement !== undefined ? this.props.placement : 'bottom'}
                                modifiers={{
                                    offset: {
                                        offset: this.mapOffset(this.props.offset, this.props.distance),
                                    },
                                }}
                            >
                                {({ ref, style }: PopperChildrenProps): JSX.Element => (
                                    <StyledWindow isOpen={this.state.isOpen} innerRef={ref} style={style}>
                                        {this.props.options.length > 0 &&
                                            this.props.options.map((option, index) => (
                                                <Option
                                                    isSelected={index === this.state.selectedIndex}
                                                    key={`${index}-${option.label}`}
                                                    onClick={(): void => {
                                                        this.handleSelect(option, index);
                                                    }}
                                                >
                                                    <Box alignItems={'center'}>
                                                        <Box margin={trbl(0, 12, 0, 0)}>
                                                            {index === this.state.selectedIndex && (
                                                                <Icon size="medium" icon="checkmark" />
                                                            )}
                                                            {index !== this.state.selectedIndex && (
                                                                <Box width={'18px'} />
                                                            )}
                                                        </Box>
                                                        <div>
                                                            <Text
                                                                inline
                                                                descriptive
                                                                strong={index === this.state.selectedIndex}
                                                            >
                                                                <Text
                                                                    descriptive={false}
                                                                    strong={index === this.state.selectedIndex}
                                                                >
                                                                    {option.label}
                                                                </Text>
                                                                <span>{option.description}</span>
                                                            </Text>
                                                        </div>
                                                    </Box>
                                                </Option>
                                            ))}
                                    </StyledWindow>
                                )}
                            </Popper>
                        )}
                    </div>,
                    document.body,
                )}
            </Manager>
        );
    }
}

export default MultiButton;
export { PropsType, PlacementType };
