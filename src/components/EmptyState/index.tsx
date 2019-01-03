import React, { FunctionComponent, Children, ReactNode } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import Box from '../Box';
import Heading from '../Heading';
import Illustration, { Illustrations } from '../Illustration';

import Text from '../Text';

type PropsType = {
    illustration?: keyof typeof Illustrations | ReactNode;
    title: string | ReactNode;
    message: string | ReactNode;
    horizontal?: boolean;
    button?: ReactNode;
};

const EmptyState: FunctionComponent<PropsType> = (props): JSX.Element => {
    const hasChildren = Children.count(props.children) > 0;
    const textAlign = props.horizontal ? 'left' : 'center';

    const title =
        typeof props.title === 'string' ? (
            <Heading textAlign={textAlign} hierarchy={1}>
                {props.title}
            </Heading>
        ) : (
            props.title
        );

    const illustration =
        typeof props.illustration === 'string' || props.illustration === undefined ? (
            <Illustration
                illustration={props.illustration ? (props.illustration as keyof typeof Illustrations) : 'cactus'}
            />
        ) : (
            props.illustration
        );

    const message =
        typeof props.message === 'string' ? (
            <Text descriptive textAlign={textAlign}>
                {props.message}
            </Text>
        ) : (
            props.message
        );

    if (props.horizontal) {
        return (
            <Box direction="row" alignItems="center" justifyContent="space-around">
                <Box basis="120px" shrink={0} grow={25}>
                    {illustration}
                </Box>
                <Box direction="column" grow={75} margin={[0, 0, 0, 24]}>
                    {title}
                    <Box margin={[9, 0, 0, 0]}>{message}</Box>
                    {hasChildren && (
                        <Box margin={[24, 0, 0, 0]}>
                            {props.children}
                            {props.button && props.button}
                        </Box>
                    )}
                </Box>
            </Box>
        );
    }

    return (
        <Box direction="column" alignItems="center" justifyContent="space-around">
            {illustration}
            <Box padding={[18, 0, 0, 0]}>{title}</Box>
            <Box margin={[12, 0, 0, 0]}>{message}</Box>
            {hasChildren && (
                <Box margin={[24, 0, 0, 0]}>
                    {props.children}
                    {props.button && props.button}
                </Box>
            )}
        </Box>
    );
};

export default EmptyState;
export { PropsType };
