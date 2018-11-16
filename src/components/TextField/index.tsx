import React, { ChangeEvent, Component } from 'react';
import SeverityType from '../../types/SeverityType';
import trbl from '../../utility/trbl';
import InlineNotification from '../InlineNotification';
import Box from '../Box';
import { StyledInput, StyledWrapper, StyledAffix, StyledAffixWrapper } from './style';
import withCurrencyFormatting, { WithCurrencyFormattingType } from './formatters/withCurrencyFormatting';
import withNumberFormatting, { WithNumberFormattingType } from './formatters/withNumberFormatting';
import Icon from '../Icon';

type PropsType = {
    value: string;
    name: string;
    type?: string;
    id?: string;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
    prefix?: string;
    suffix?: string;
    disabled?: boolean;
    extractRef?(ref: HTMLInputElement): void;
    onChange(value: string, event: ChangeEvent<HTMLInputElement>): void;
    onBlur?(): void;
    onFocus?(): void;
};

type StateType = { focus: boolean };

class TextField extends Component<PropsType, StateType> {
    public static Currency: WithCurrencyFormattingType = withCurrencyFormatting(TextField);
    public static Number: WithNumberFormattingType = withNumberFormatting(TextField);

    private inputRef: HTMLInputElement;

    public constructor(props: PropsType) {
        super(props);

        this.state = { focus: false };
    }

    public forceFocus = (): void => this.setState({ focus: true }, () => this.inputRef.focus());

    public handleFocus = (): void => {
        this.setState({ focus: true }, () => this.inputRef.focus());
        if (this.props.onFocus !== undefined) this.props.onFocus();
    };

    public handleBlur = (): void => {
        this.setState({ focus: false });
        if (this.props.onBlur !== undefined) this.props.onBlur();
    };

    public onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (!this.props.disabled) this.props.onChange(event.target.value, event);
    };

    public render(): JSX.Element {
        return (
            <>
                <StyledWrapper
                    focus={this.state.focus}
                    disabled={this.props.disabled}
                    severity={this.props.feedback ? this.props.feedback.severity : 'success'}
                >
                    {this.props.prefix && (
                        <StyledAffixWrapper onClick={this.forceFocus} disabled={this.props.disabled}>
                            <StyledAffix>{this.props.prefix}</StyledAffix>
                        </StyledAffixWrapper>
                    )}
                    <Box position="relative" width="100%">
                        <StyledInput
                            type={this.props.type ? this.props.type : 'text'}
                            name={this.props.name}
                            disabled={this.props.disabled}
                            value={this.props.value}
                            id={this.props.id}
                            onChange={this.onChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            innerRef={(ref): void => {
                                this.inputRef = ref;
                                if (this.props.extractRef !== undefined) this.props.extractRef(ref);
                            }}
                        />
                        <Box position="absolute" right="8px" top="8px">
                            {this.props.disabled && <Icon icon="locked" color="#A6AAB3" size="medium" />}
                        </Box>
                    </Box>
                    {this.props.suffix && (
                        <StyledAffixWrapper onClick={this.forceFocus} disabled={this.props.disabled}>
                            <StyledAffix>{this.props.suffix}</StyledAffix>
                        </StyledAffixWrapper>
                    )}
                </StyledWrapper>
                {this.props.feedback &&
                    this.props.feedback.message !== '' && (
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
