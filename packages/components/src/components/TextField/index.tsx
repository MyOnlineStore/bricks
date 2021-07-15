import React, { ChangeEvent, FC, ReactNode, useRef, useState, useEffect } from 'react';
import InlineNotification from '../InlineNotification';
import Box from '../Box';
import { StyledInput, StyledWrapper, StyledAffix, StyledAffixWrapper } from './style';
import { CloseSmallIcon } from '@myonlinestore/bricks-assets';
import SeverityType from '../../types/SeverityType';
import IconButton from '../IconButton';
import styled from '../../utility/styled';

export type InputSeverityType = 'error';

export type PropsType = {
    value: string;
    name: string;
    type?: string;
    id?: string;
    feedback?: {
        'data-testid'?: string;
        severity: SeverityType;
        message: string;
    };
    prefix?: string | ReactNode;
    suffix?: string | ReactNode;
    disabled?: boolean;
    icon?: ReactNode;
    placeholder?: string;
    'data-testid'?: string;
    extractRef?(ref: HTMLInputElement): void;
    onClear?(): void;
    onChange(value: string, event: ChangeEvent<HTMLInputElement>): void;
    onBlur?(): void;
    onFocus?(): void;
    onClick?(): void;
};

const IconContainer = styled(Box)`
    svg {
        width: 12px;
        fill: ${({ theme }) => theme.TextField.icon.color};
    }
`;

const TextField: FC<PropsType> = props => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [focus, setFocus] = useState(false);

    const forceFocus = () => {
        setFocus(true);
    };

    useEffect(() => {
        if (focus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [focus]);

    const handleFocus = () => {
        setFocus(true);

        if (props.onFocus) {
            props.onFocus();
        }
    };

    const handleBlur = (): void => {
        setFocus(false);

        if (props.onBlur) {
            props.onBlur();
        }
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (!props.disabled) {
            props.onChange(event.target.value, event);
        }
    };

    return (
        <>
            <StyledWrapper
                focus={focus}
                disabled={props.disabled}
                severity={props.feedback?.severity === 'error' ? props.feedback.severity : undefined}
            >
                {props.icon && (
                    <IconContainer justifyContent="center" alignItems="center" padding={[6, 0, 6, 12]}>
                        {props.icon}
                    </IconContainer>
                )}
                {props.prefix && (
                    <StyledAffixWrapper
                        onClick={typeof props.prefix === 'string' ? forceFocus : undefined}
                        disabled={props.disabled}
                        isString={typeof props.prefix === 'string'}
                        severity={props.feedback?.severity === 'error' ? props.feedback.severity : undefined}
                        focus={focus}
                    >
                        <StyledAffix>{props.prefix}</StyledAffix>
                    </StyledAffixWrapper>
                )}
                <Box position={props.onClear && props.value !== '' ? 'relative' : undefined} width="100%">
                    <StyledInput
                        data-testid={props['data-testid']}
                        type={props.type ? props.type : 'text'}
                        placeholder={props.placeholder}
                        name={props.name}
                        disabled={props.disabled}
                        value={props.value}
                        id={props.id}
                        severity={props.feedback?.severity === 'error' ? props.feedback.severity : undefined}
                        focus={focus}
                        onChange={onChange}
                        onClick={props.onClick}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        ref={(ref): void => {
                            inputRef.current = ref;

                            if (ref !== null && props.extractRef !== undefined) {
                                props.extractRef(ref);
                            }
                        }}
                    />
                    {props.onClear && !props.disabled && props.value !== '' && (
                        <Box position="absolute" height="100%" right="0" top="0" alignItems="center">
                            <IconButton
                                variant="subdued"
                                data-testid={`${props['data-testid']}-clear-button`}
                                icon={<CloseSmallIcon />}
                                iconSize="small"
                                title="Clear field"
                                onClick={() => {
                                    if (props.onClear) {
                                        props.onClear();
                                        forceFocus();
                                    }
                                }}
                            />
                        </Box>
                    )}
                </Box>
                {props.suffix && (
                    <StyledAffixWrapper
                        onClick={typeof props.suffix === 'string' ? forceFocus : undefined}
                        disabled={props.disabled}
                        isString={typeof props.suffix === 'string'}
                        severity={props.feedback?.severity === 'error' ? props.feedback.severity : undefined}
                        focus={focus}
                    >
                        <StyledAffix>{props.suffix}</StyledAffix>
                    </StyledAffixWrapper>
                )}
            </StyledWrapper>
            {props.feedback && props.feedback.message !== '' && (
                <Box margin={[3, 0, 0, 0]}>
                    <InlineNotification
                        data-testid={props.feedback['data-testid']}
                        message={props.feedback.message}
                        severity={props.feedback.severity}
                    />
                </Box>
            )}
        </>
    );
};

export default TextField;
