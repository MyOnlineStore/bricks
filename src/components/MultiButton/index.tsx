import React, { Component, RefObject, createRef } from 'react';
import FoldOut from '../FoldOut';
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';
import Icon from '../Icon';
import trbl from '../../utility/trbl';
import Option from './Option';
import { StyledWindow } from './style';

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
                <Button
                    variant="secondary"
                    title="MultiButton"
                    compact
                    action={this.state.isOpen ? this.close : this.open}
                >
                    <Box>
                        <Text>MultiButton</Text>

                        <Box padding={trbl(6)}>
                            <Icon size="small" icon={this.state.isOpen ? 'chevronUp' : 'chevronDown'} />
                        </Box>
                    </Box>
                </Button>
                <StyledWindow isOpen={this.state.isOpen}>
                    <FoldOut isOpen={this.state.isOpen}>
                        {this.props.options.length > 0 &&
                            this.props.options.map((option, index) => (
                                <Option
                                    isTargeted={index === this.state.optionPointer}
                                    key={`${option.value}-${option.label}`}
                                    onMouseEnter={(): void => {}}
                                    onClick={(): void => {
                                        this.handleChange(option.value);
                                    }}
                                >
                                    <Text descriptive={option.value === this.props.value}>
                                        <Box margin={trbl(0, 6, 0, 0)} inline>
                                            {option.value === this.props.value && (
                                                <Icon size="small" icon="checkmark" />
                                            )}
                                        </Box>
                                        <Text strong>{option.label}</Text>
                                        <Text>{option.description}</Text>
                                    </Text>
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
