import React, { ChangeEvent, Component } from 'react';
import SeverityType from '../../types/SeverityType';
import trbl from '../../utility/trbl';
import InlineNotification from '../InlineNotification';
import Spacer from '../Spacer';
import { StyledFloatingLabel, StyledInput, StyledWrapper } from './style';

type PropsType = {
    value: string;
    name: string;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
    label: string;
    floating?: boolean;
    extractRef?(ref: HTMLInputElement): void;
    handleChange(value: string): void;
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

    public handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.props.handleChange(event.target.value);
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
                    <StyledFloatingLabel active={this.state.active}>{this.props.label}</StyledFloatingLabel>
                    <StyledInput
                        type="text"
                        value={this.props.value}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        innerRef={(ref): void => {
                            this.inputRef = ref;
                            if (this.props.extractRef !== undefined) {
                                this.props.extractRef(ref);
                            }
                        }}
                    />
                </StyledWrapper>
                {this.props.feedback && (
                    <Spacer offset={trbl(6, 0, 0, 12)}>
                        <InlineNotification
                            icon={this.props.feedback.severity === 'info' ? 'questionCircle' : 'dangerCircle'}
                            message={this.props.feedback.message}
                            severity={this.props.feedback.severity}
                        />
                    </Spacer>
                )}
            </>
        );
    }
}

export default TextField;
export { PropsType, StateType };
