import React, { Component, RefObject, createRef } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import TransitionAnimation from '../TransitionAnimation';
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
    value: string;
};

class MultiButton<GenericOption extends OptionBase> extends Component<PropsType<GenericOption>, StateType> {
    private wrapperRef: RefObject<HTMLDivElement>;
    private buttonRef: RefObject<HTMLDivElement>;
    private title: string = this.props.options[0].label;
    private defaultOption: OptionBase = this.props.options.filter(option => {
        return option.default === true;
    })[0];

    public constructor(props: PropsType<GenericOption>) {
        super(props);
        this.wrapperRef = createRef();
        this.buttonRef = createRef();

        this.state = {
            isOpen: false,
            value: this.defaultOption.value,
        };
    }

    private open = (): void => {
        this.setState({ isOpen: true });
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
            this.wrapperRef.current &&
            this.buttonRef.current &&
            !this.wrapperRef.current.contains(event.target as Node) &&
            !this.buttonRef.current.contains(event.target as Node)
        ) {
            this.close();
        }
    };

    public handleSelect = (option: OptionBase): void => {
        this.setState({
            isOpen: false,
            value: option.value,
        });

        if (option.action) {
            option.action();
        }
    };

    public render(): JSX.Element {
        return (
            <Manager>
                <Reference>
                    {({ ref }: ReferenceChildrenProps): JSX.Element => (
                        <div ref={this.buttonRef}>
                            <StyledWrapper innerRef={ref} isOpen={this.state.isOpen}>
                                <StyledMultiButton
                                    title={this.title}
                                    variant={this.props.variant}
                                    action={this.defaultOption.action}
                                >
                                    <Box inline>{this.title}</Box>
                                </StyledMultiButton>
                                <StyledChevronButton
                                    compact
                                    title={this.title}
                                    variant={this.props.variant}
                                    action={this.state.isOpen ? this.close : this.open}
                                >
                                    <Icon size="small" icon={this.state.isOpen ? 'chevronUp' : 'chevronDown'} />
                                </StyledChevronButton>
                            </StyledWrapper>
                        </div>
                    )}
                </Reference>
                {createPortal(
                    <div ref={this.wrapperRef}>
                        <TransitionAnimation show={this.state.isOpen} animation="fade">
                            <Popper
                                placement={this.props.placement !== undefined ? this.props.placement : 'bottom'}
                                modifiers={{
                                    offset: {
                                        offset: this.mapOffset(this.props.offset, this.props.distance),
                                    },
                                    flip: {
                                        enabled: false,
                                    },
                                }}
                            >
                                {({ ref, style }: PopperChildrenProps): JSX.Element => (
                                    <StyledWindow isOpen={this.state.isOpen} innerRef={ref} style={style}>
                                        {this.props.options.length > 0 &&
                                            this.props.options.map(option => (
                                                <Option
                                                    isSelected={option.value === this.state.value}
                                                    key={`${option.value}-${option.label}`}
                                                    onClick={(): void => {
                                                        this.handleSelect(option);
                                                    }}
                                                >
                                                    <Box alignItems={'center'}>
                                                        <Box margin={trbl(0, 12, 0, 0)}>
                                                            {option.value === this.state.value && (
                                                                <Icon size="medium" icon="checkmark" />
                                                            )}
                                                            {option.value !== this.state.value && (
                                                                <Box width={'18px'} />
                                                            )}
                                                        </Box>
                                                        <div>
                                                            <Text
                                                                inline
                                                                descriptive
                                                                strong={option.value === this.state.value}
                                                            >
                                                                <Text
                                                                    descriptive={false}
                                                                    strong={option.value === this.state.value}
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
                        </TransitionAnimation>
                    </div>,
                    document.body,
                )}
            </Manager>
        );
    }
}

export default MultiButton;
export { PropsType, PlacementType };
