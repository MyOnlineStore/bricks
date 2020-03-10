import React, { ChangeEvent, Component, ReactNode } from 'react';
import InlineNotification from '../InlineNotification';
import Box from '../Box';
import { StyledInput, StyledWrapper, StyledAffix, StyledAffixWrapper } from './style';
import { DangerCircleIcon, CloseSmallIcon } from '@myonlinestore/bricks-assets';
import IconButton from '../IconButton';
import SeverityType from '../../types/SeverityType';

export type InputSeverityType = 'error';

type PropsType = {
    value: string;
    name: string;
    type?: string;
    id?: string;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
    prefix?: string | ReactNode;
    suffix?: string | ReactNode;
    disabled?: boolean;
    placeholder?: string;
    'data-testid'?: string;
    extractRef?(ref: HTMLInputElement): void;
    onClear?(): void;
    onChange(value: string, event: ChangeEvent<HTMLInputElement>): void;
    onBlur?(): void;
    onFocus?(): void;
    onClick?(): void;
};

type StateType = { focus: boolean };

class TextField extends Component<PropsType, StateType> {
    private inputRef: HTMLInputElement | null;

    public constructor(props: PropsType) {
        super(props);

        this.state = { focus: false };
    }

    public forceFocus = (): void => {
        this.setState({ focus: true }, () => {
            if (this.inputRef !== null) this.inputRef.focus();
        });
    };

    public handleFocus = (): void => {
        this.setState({ focus: true }, () => {
            if (this.inputRef !== null) this.inputRef.focus();
        });

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
                    severity={this.props.feedback?.severity === 'error' ? this.props.feedback.severity : undefined}
                >
                    {this.props.prefix && (
                        <StyledAffixWrapper
                            onClick={typeof this.props.prefix === 'string' ? this.forceFocus : undefined}
                            disabled={this.props.disabled}
                            isString={typeof this.props.prefix === 'string' ? true : false}
                            severity={this.props.feedback?.severity === 'error' ? this.props.feedback.severity : undefined}
                            focus={this.state.focus}
                        >
                            <StyledAffix>{this.props.prefix}</StyledAffix>
                        </StyledAffixWrapper>
                    )}
                    <Box position="relative" width="100%">
                        <StyledInput
                            data-testid={this.props['data-testid']}
                            type={this.props.type ? this.props.type : 'text'}
                            placeholder={this.props.placeholder}
                            name={this.props.name}
                            disabled={this.props.disabled}
                            value={this.props.value}
                            id={this.props.id}
                            severity={this.props.feedback?.severity === 'error' ? this.props.feedback.severity : undefined}
                            focus={this.state.focus}
                            onChange={this.onChange}
                            onClick={this.props.onClick}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            ref={(ref): void => {
                                this.inputRef = ref;
                                if (ref !== null && this.props.extractRef !== undefined) this.props.extractRef(ref);
                            }}
                        />
                        {this.props.onClear && !this.props.disabled && this.props.value !== '' && (
                            <Box position="absolute" height="100%" right="0" top="0" alignItems="center">
                                <IconButton
                                    data-testid={`${this.props['data-testid']}-clear-button`}
                                    icon={<CloseSmallIcon />}
                                    iconSize="small"
                                    title="Clear field"
                                    onClick={() => {
                                        if (this.props.onClear) {
                                            this.props.onClear();
                                            this.forceFocus();
                                        }
                                    }}
                                />
                            </Box>
                        )}
                    </Box>
                    {this.props.suffix && (
                        <StyledAffixWrapper
                            onClick={typeof this.props.suffix === 'string' ? this.forceFocus : undefined}
                            disabled={this.props.disabled}
                            isString={typeof this.props.suffix === 'string' ? true : false}
                            severity={this.props.feedback?.severity === 'error' ? this.props.feedback.severity : undefined}
                            focus={this.state.focus}
                        >
                            <StyledAffix>{this.props.suffix}</StyledAffix>
                        </StyledAffixWrapper>
                    )}
                </StyledWrapper>
                {this.props.feedback && this.props.feedback.message !== '' && (
                    <Box margin={[6, 0, 0, 0]}>
                        <InlineNotification
                            icon={this.props.feedback.severity === 'error' ? <DangerCircleIcon /> : undefined}
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
