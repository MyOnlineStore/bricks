import React, { Component, RefObject, createRef } from 'react';
import FoldOut from '../FoldOut';
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';
import ScrollBox from '../ScrollBox';
import Icon from '../Icon';
import trbl from '../../utility/trbl';
import Option from './Option';
import { StyledMultiButton, StyledWindow, StyledChevron } from './style';

type OptionBase = {
    value: string;
    label: string;
    description: string;
};

type PropsType<GenericOption extends OptionBase> = {
    title: string;
    options: Array<GenericOption>;
    value: string;
    onChange(value: string): void;
};

type StateType = {
    isOpen: boolean;
    optionPointer: number;
};

class MultiButton<GenericOption extends OptionBase> extends Component<PropsType<GenericOption>, StateType> {
    private readonly buttonRef: RefObject<HTMLInputElement>;
    private wrapperRef: RefObject<HTMLDivElement>;

    public constructor(props: PropsType<GenericOption>) {
        super(props);
        this.buttonRef = createRef();
        this.wrapperRef = createRef();

        this.state = {
            isOpen: false,
            optionPointer: -1,
        };
    }

    private open = (): void => {
        this.setState({ isOpen: true });
    };

    private close = (): void => {
        this.setState({ isOpen: false });
    };

    public componentDidMount(): void {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    public handleClickOutside = (event: MouseEvent): void => {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target as Node)) {
            this.close();
        }
    };

    public handleChange = (value: string): void => {
        this.props.onChange(value);
        this.setState({ isOpen: false, optionPointer: -1 });
    };

    public render(): JSX.Element {
        return (
            <div ref={this.wrapperRef}>
                <StyledMultiButton
                    title={this.props.title}
                    variant="secondary"
                    action={this.state.isOpen ? this.close : this.open}
                >
                    <Box inline>
                        {this.props.title}

                        <StyledChevron>
                            <Icon size="small" icon={this.state.isOpen ? 'chevronUp' : 'chevronDown'} />
                        </StyledChevron>
                    </Box>
                </StyledMultiButton>
                <StyledWindow
                    isOpen={this.state.isOpen}
                    rect={
                        this.wrapperRef.current && this.wrapperRef.current !== undefined
                            ? this.wrapperRef.current.getBoundingClientRect()
                            : undefined
                    }
                >
                    <FoldOut isOpen={this.state.isOpen}>
                        {this.props.options.length > 0 &&
                            this.props.options.map((option, index) => (
                                <Option
                                    isSelected={option.value === this.props.value}
                                    key={`${option.value}-${option.label}`}
                                    onMouseEnter={(): void => {}}
                                    onClick={(): void => {
                                        this.handleChange(option.value);
                                    }}
                                >
                                    <Box alignItems={'center'}>
                                        <Box margin={trbl(0, 12, 0, 0)}>
                                            {option.value === this.props.value && (
                                                <Icon size="medium" icon="checkmark" />
                                            )}
                                            {option.value !== this.props.value && <Box width={'18px'} />}
                                        </Box>
                                        <Text descriptive strong={option.value === this.props.value}>
                                            <div>
                                                <Text descriptive={false} strong={option.value === this.props.value}>
                                                    {option.label}
                                                </Text>

                                                <div>{option.description}</div>
                                            </div>
                                        </Text>
                                    </Box>
                                </Option>
                            ))}
                    </FoldOut>
                </StyledWindow>
            </div>
        );
    }
}

export default MultiButton;
export { PropsType };
