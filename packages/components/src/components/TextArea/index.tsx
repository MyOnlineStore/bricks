import React, { ChangeEvent, FC, useRef, useState } from 'react';
import StyledTextArea, { StyledTextAreaWrapper } from './style';
import InlineNotification from '../InlineNotification';
import SeverityType from '../../types/SeverityType';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Text from '../Text';

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
    characterLimit?: number;
    placeholder?: string;
    'data-testid'?: string;
    onChange(value: string, event: ChangeEvent<HTMLTextAreaElement>): void;
};

const TextArea: FC<PropsType> = props => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [focus, setFocus] = useState(false);

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        if (!props.disabled)
            if (props.characterLimit) {
                props.onChange(event.target.value.substring(0, props.characterLimit), event);
            } else {
                props.onChange(event.target.value, event);
            }
    };

    const focusField = () => {
        if (textareaRef.current) textareaRef.current.focus();
    };

    return (
        <>
            <StyledTextAreaWrapper
                disabled={props.disabled}
                focus={focus}
                severity={props.feedback?.severity === 'error' ? props.feedback.severity : undefined}
            >
                <StyledTextArea
                    ref={textareaRef}
                    data-testid={props['data-testid']}
                    value={props.value}
                    name={props.name}
                    id={props.id}
                    rows={props.rows ? props.rows : 3}
                    disabled={props.disabled}
                    resizeable={props.resizeable}
                    focus={focus}
                    placeholder={props.placeholder}
                    onChange={onChange}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                {props.characterLimit && !props.disabled && (
                    <Box justifyContent="flex-end" padding={[0, 12, 6]} onClick={focusField} style={{ cursor: 'text' }}>
                        <Text variant="info">{`${props.value.length} / ${props.characterLimit}`}</Text>
                    </Box>
                )}
            </StyledTextAreaWrapper>
            {props.feedback && props.feedback.message !== '' && (
                <Box margin={trbl(3, 0, 0, 0)}>
                    <InlineNotification message={props.feedback.message} severity={props.feedback.severity} />
                </Box>
            )}
        </>
    );
};

export default TextArea;
export { PropsType, StyledTextArea };
