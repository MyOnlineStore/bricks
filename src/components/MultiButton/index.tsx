import React, { Component, RefObject, createRef } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import trbl from '../../utility/trbl';
import Option from './Option';
import { StyledMultiButton, StyledWindow, StyledWrapper, StyledChevronButton } from './style';
import { createPortal } from 'react-dom';

type PlacementType = PopperChildrenProps['placement'];

type OptionBase = {
    value: string;
    label: string;
    description: string;
    default?: boolean;
    action?(): void;
};

type PropsType<GenericOption extends OptionBase> = {
    placement?: PlacementType;
    options: Array<GenericOption>;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    offset?: number;
    distance?: number;
};

type StateType = {
    isOpen: boolean;
    selectedOption: OptionBase;
};

class MultiButton<GenericOption extends OptionBase> extends Component<PropsType<GenericOption>, StateType> {
    private windowRef: RefObject<HTMLDivElement>;
    private buttonRef: RefObject<HTMLDivElement>;
    private defaultOption: OptionBase = this.props.options.filter(option => {
        return option.default === true;
    })[0];

    public constructor(props: PropsType<GenericOption>) {
        super(props);
        this.windowRef = createRef();
        this.buttonRef = createRef();
        if (!this.defaultOption) this.defaultOption = this.props.options[0];

        this.state = {
            isOpen: false,
            selectedOption: this.defaultOption,
        };
    }

    private open = (): void => {
        this.setState({
            isOpen: true,
            selectedOption: this.defaultOption,
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

    public defaultAction = (): void => {
        if (this.defaultOption.action) {
            this.defaultOption.action();
        }
    };

    public handleSelect = (option: OptionBase): void => {
        this.setState(
            {
                selectedOption: option,
            },
            () => {
                if (this.state.selectedOption.action) {
                    this.state.selectedOption.action();
                }
                this.close();
            },
        );
    };

    public renderButtons = (): JSX.Element => {
        return (
            <>
                <StyledMultiButton
                    title={this.defaultOption.label}
                    variant={this.props.variant}
                    action={(): void => this.defaultAction()}
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
                                            this.props.options.map(option => (
                                                <Option
                                                    isSelected={option.value === this.state.selectedOption.value}
                                                    key={`${option.value}-${option.label}`}
                                                    onClick={(): void => {
                                                        this.handleSelect(option);
                                                    }}
                                                >
                                                    <Box alignItems={'center'}>
                                                        <Box margin={trbl(0, 12, 0, 0)}>
                                                            {option.value === this.state.selectedOption.value && (
                                                                <Icon size="medium" icon="checkmark" />
                                                            )}
                                                            {option.value !== this.state.selectedOption.value && (
                                                                <Box width={'18px'} />
                                                            )}
                                                        </Box>
                                                        <div>
                                                            <Text
                                                                inline
                                                                descriptive
                                                                strong={
                                                                    option.value === this.state.selectedOption.value
                                                                }
                                                            >
                                                                <Text
                                                                    descriptive={false}
                                                                    strong={
                                                                        option.value === this.state.selectedOption.value
                                                                    }
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
