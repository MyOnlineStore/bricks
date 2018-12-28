import React, { Children, FunctionComponent } from 'react';
import StyledButton, { StyledAnchor } from './style';
import Icon, { MediumPropsType } from '../../Icon';
import Box from '../../Box';
import trbl from '../../../utility/trbl';
import Spinner from '../../Spinner';

type PropsType = {
    className?: string;
    compact?: boolean;
    title: string;
    variant?: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    icon?: MediumPropsType['icon'];
    iconAlign?: 'right' | 'left';
    id?: string;
    loading?: boolean;
    onClick?(): void;
};

const ButtonContents: FunctionComponent<PropsType> = (props): JSX.Element => (
    <>
        {props.loading && (
            <Box
                justifyContent="center"
                alignItems="center"
                position="absolute"
                left="0"
                top="0"
                right="0"
                bottom="0"
                padding={trbl(6)}
            >
                <Spinner color={'#fff'} />
            </Box>
        )}
        {props.icon && props.iconAlign !== 'right' && (
            <Box inline padding={trbl(0, 6, 0, 0)}>
                <Icon icon={props.icon} size={'medium'} />
            </Box>
        )}
        {Children.count(props.children) > 0 ? props.children : props.title}
        {props.icon && props.iconAlign === 'right' && (
            <Box inline padding={trbl(0, 0, 0, 6)}>
                <Icon icon={props.icon} size={'medium'} />
            </Box>
        )}
    </>
);

const BareButton: FunctionComponent<PropsType> = (props): JSX.Element => {
    const isLink = props.href !== undefined;

    const clickAction = (): void => {
        if (props.onClick !== undefined && props.disabled !== true && props.loading !== true) props.onClick();
    };

    if (isLink) {
        return (
            <StyledAnchor
                // @ts-ignore
                href={props.href}
                target={props.target}
                title={props.title}
                className={props.className}
                disabled={props.disabled}
                id={props.id}
            >
                <ButtonContents {...props}>{props.children}</ButtonContents>
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
            <ButtonContents {...props}>{props.children}</ButtonContents>
        </StyledButton>
    );
};

export default BareButton;
export { PropsType };
