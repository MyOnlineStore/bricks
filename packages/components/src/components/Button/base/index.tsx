import React, { FunctionComponent, MouseEvent, HTMLProps } from 'react';
import { box, boxProps } from '../../../utility/box';
import StyledButton, { StyledAnchor } from './style';

type PropsType = typeof box.props & {
    className?: string;
    title: string;
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    id?: string;
    loading?: boolean;
    'data-testid'?: string;
} & Partial<
        Pick<
            HTMLProps<HTMLButtonElement | HTMLAnchorElement>,
            'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onFocus' | 'onBlur'
        >
    >;

const ButtonBase: FunctionComponent<PropsType> = (props): JSX.Element => {
    console.log('bb', props);
    const isLink = props.href !== undefined;

    const clickAction = (event: MouseEvent<HTMLButtonElement>): void => {
        if (props.onClick !== undefined && props.disabled !== true && props.loading !== true) {
            props.onClick(event);
            event.stopPropagation();
        }
    };

    const focusAction = (event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
        if (props.onFocus !== undefined && props.disabled !== true && props.loading !== true) {
            props.onFocus(event);
        }
    };

    const blurAction = (event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
        if (props.onBlur !== undefined && props.disabled !== true && props.loading !== true) {
            props.onBlur(event);
        }
    };

    if (isLink) {
        return (
            <StyledAnchor
                href={props.href}
                target={props.target}
                title={props.title}
                className={props.className}
                id={props.id}
                isLoading={props.loading}
                data-testid={props['data-testid']}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                onFocus={focusAction}
                onBlur={blurAction}
                {...boxProps(props)}
            >
                {props.children}
            </StyledAnchor>
        );
    }
    console.log(props);
    return (
        <StyledButton
            title={props.title}
            className={props.className}
            onClick={clickAction}
            type="button"
            disabled={props.disabled}
            id={props.id}
            isLoading={props.loading}
            data-testid={props['data-testid']}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onFocus={focusAction}
            onBlur={blurAction}
            {...boxProps(props)}
        >
            {props.children}
        </StyledButton>
    );
};

export default ButtonBase;
export { PropsType };
