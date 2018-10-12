import React, { Children, SFC } from 'react';
import StyledButton, { StyledAnchor } from './style';
import Icon, { MediumPropsType } from '../../Icon';
import Box from '../../Box';
import trbl from '../../../utility/trbl';

type PropsType = {
    className?: string;
    title: string;
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    icon?: MediumPropsType['icon'];
    iconAlign?: 'right' | 'left';
    id?: string;
    action?(): void;
};

const ButtonContents: SFC<PropsType> = (props): JSX.Element => (
    <>
        {props.icon &&
            props.iconAlign !== 'right' && (
                <Box inline padding={trbl(0, 6, 0, 0)}>
                    <Icon icon={props.icon} size={'medium'} />
                </Box>
            )}
        {Children.count(props.children) > 0 ? props.children : props.title}
        {props.icon &&
            props.iconAlign === 'right' && (
                <Box inline padding={trbl(0, 0, 0, 6)}>
                    <Icon icon={props.icon} size={'medium'} />
                </Box>
            )}
    </>
);

const BareButton: SFC<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (): void => {
        if (props.action !== undefined && props.disabled !== true) props.action();
    };

    if (isLink) {
        return (
            <StyledAnchor
                title={props.title}
                className={props.className}
                // TODO: FIX THIS
                // href={props.href}
                // target={props.target}
                disabled={props.disabled}
                id={props.id}
            >
                {Children.count(props.children) > 0 ? props.children : props.title}
            </StyledAnchor>
        );
    }

    return (
        <StyledButton
            title={props.title}
            className={props.className}
            onClick={clickAction}
            type="button"
            disabled={props.disabled}
            id={props.id}
        >
            <ButtonContents title={props.title} icon={props.icon} iconAlign={props.iconAlign}>
                {props.children}
            </ButtonContents>
        </StyledButton>
    );
};

export default BareButton;
export { PropsType };
