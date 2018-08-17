import React, { ChangeEvent, Component } from 'react';
import SeverityType from '../../types/SeverityType';
import trbl from '../../utility/trbl';
import InlineNotification from '../InlineNotification';
import Box from '../Box';
import { StyledInput, StyledWrapper, StyledAffix, StyledAffixWrapper } from './style';

type PropsType = {
    value: string;
    name: string;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
    prefix?: string;
    suffix?: string;
    extractRef?(ref: HTMLInputElement): void;
    onChange(value: string): void;
};

type StateType = {
    focus: boolean;
    active: boolean;
};

class TextField extends Component<PropsType, StateType> {
    private inputRef: HTMLInputElement;

    public constructor(props: PropsType) {
        super(props);

        this.state = {
            focus: false,
            active: false,
        };
    }

    public static getDerivedStateFromProps(nextProps: PropsType, currentState: StateType): Partial<StateType> {
        return {
            active: nextProps.value !== '' || currentState.active,
        };
    }

    public handleFocus = (): void => {
        this.setState({
            focus: true,
            active: true,
        });
        this.inputRef.focus();
    };

    public handleBlur = (): void => {
        this.setState({
            focus: false,
            active: this.props.value !== '',
        });
    };

    public onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.props.onChange(event.target.value);
    };

    public render(): JSX.Element {
        return (
            <>
                <StyledWrapper
                    focus={this.state.focus}
                    active={this.state.active}
                    feedback={this.props.feedback}
                    onFocusCapture={this.handleFocus}
                    onBlurCapture={this.handleBlur}
                    onClick={this.handleFocus}
                >
                    {this.props.prefix && (
                        <StyledAffixWrapper>
                            <StyledAffix>{this.props.prefix}</StyledAffix>
                        </StyledAffixWrapper>
                    )}
                    <StyledInput
                        type="text"
                        active={this.state.active}
                        value={this.props.value}
                        focus={this.state.focus}
                        onChange={this.onChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        innerRef={(ref): void => {
                            this.inputRef = ref;
                            if (this.props.extractRef !== undefined) {
                                this.props.extractRef(ref);
                            }
                        }}
                    />
                    {this.props.suffix && (
                        <StyledAffixWrapper>
                            <StyledAffix>{this.props.suffix}</StyledAffix>
                        </StyledAffixWrapper>
                    )}
                </StyledWrapper>
                {this.props.feedback && (
                    <Box margin={trbl(6, 0, 0, 12)}>
                        <InlineNotification
                            icon={this.props.feedback.severity === 'info' ? 'questionCircle' : 'dangerCircle'}
                            message={this.props.feedback.message}
                            severity={this.props.feedback.severity}
                        />
                    </Box>
                )}
            </>
        );
    }
}

export default TextField;
export { PropsType, StateType };
