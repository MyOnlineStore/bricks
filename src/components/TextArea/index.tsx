import React, { Component, ChangeEvent } from 'react';
import StyledTextArea, { StyledTextAreaWrapper } from './style';
import InlineNotification from '../InlineNotification';
import SeverityType from '../../types/SeverityType';
import trbl from '../../utility/trbl';
import Box from '../Box';
import questionCircle from '../../assets/icons/question-circle.svg';
import dangerCircle from '../../assets/icons/danger-circle.svg';

type PropsType = {
    rows?: number;
    value: string;
    name: string;
    id?: string;
    resizeable?: boolean;
    disabled?: boolean;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
    onChange(value: string, event: ChangeEvent<HTMLTextAreaElement>): void;
};

class TextArea extends Component<PropsType> {
    public onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        if (!this.props.disabled) this.props.onChange(event.target.value, event);
    };

    public render(): JSX.Element {
        return (
            <>
                <StyledTextAreaWrapper
                    disabled={this.props.disabled}
                    severity={this.props.feedback ? this.props.feedback.severity : undefined}
                >
                    <StyledTextArea
                        value={this.props.value}
                        name={this.props.name}
                        id={this.props.id}
                        rows={this.props.rows ? this.props.rows : 3}
                        disabled={this.props.disabled}
                        resizeable={this.props.resizeable}
                        onChange={this.onChange}
                    />
                </StyledTextAreaWrapper>
                {this.props.feedback && (
                    <Box margin={trbl(6, 0, 0, 12)}>
                        <InlineNotification
                            icon={this.props.feedback.severity === 'info' ? questionCircle : dangerCircle}
                            message={this.props.feedback.message}
                            severity={this.props.feedback.severity}
                        />
                    </Box>
                )}
            </>
        );
    }
}

export default TextArea;
export { PropsType, StyledTextArea };
