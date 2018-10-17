import React, { Component, ChangeEvent } from 'react';
import StyledTextarea, { StyledTextareaWrapper } from './style';
import Box from '../Box';
import trbl from '../../utility/trbl';
import InlineNotification from '../InlineNotification';
import SeverityType from '../../types/SeverityType';

type PropsType = {
    value: string;
    name: string;
    resizeable?: boolean;
    disabled?: boolean;
    id?: string;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
    placeholder?: string;
    rows?: number;
    onChange(value: string, event: ChangeEvent<HTMLTextAreaElement>): void;
};

class Textarea extends Component<PropsType> {
    public onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        if (!this.props.disabled) this.props.onChange(event.target.value, event);
    };

    public render(): JSX.Element {
        return (
            <>
                <StyledTextareaWrapper
                    disabled={this.props.disabled}
                    severity={this.props.feedback ? this.props.feedback.severity : 'success'}
                >
                    <StyledTextarea
                        value={this.props.value}
                        rows={this.props.rows ? this.props.rows : 3}
                        severity={this.props.feedback ? this.props.feedback.severity : 'success'}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled}
                        resizeable={this.props.resizeable}
                        onChange={this.onChange}
                    />
                </StyledTextareaWrapper>
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

export default Textarea;
export { PropsType, StyledTextarea };
