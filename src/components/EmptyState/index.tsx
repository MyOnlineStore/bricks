import React, { FunctionComponent, Children, ReactNode } from 'react';
import Box from '../Box';
import Heading from '../Heading';
import Illustration from '../Illustration';
import cactus from '../../assets/illustrations/cactus.color.svg';
import Text from '../Text';

type PropsType = {
    illustration?: string;
    title: string | ReactNode;
    message: string | ReactNode;
    horizontal?: boolean;
    button?: ReactNode;
    'data-testid'?: string;
};

const branchString = (value: string | ReactNode, node: (value: string) => ReactNode): ReactNode => {
    return typeof value === 'string' ? node(value) : value;
};

const EmptyState: FunctionComponent<PropsType> = (props): JSX.Element => {
    const hasChildren = Children.count(props.children) > 0;
    const textAlign = props.horizontal ? 'left' : 'center';

    const title = branchString(props.title, value => (
        <Heading textAlign={textAlign} hierarchy={2}>
            {value}
        </Heading>
    ));

    const message = branchString(props.message, value => (
        <Text variant="info" textAlign={textAlign}>
            {value}
        </Text>
    ));

    const illustration =
        props.illustration !== undefined ? (
            <Illustration illustration={props.illustration} />
        ) : (
            <Illustration illustration={cactus} />
        );

    if (props.horizontal) {
        return (
            <Box direction="row" alignItems="center" justifyContent="space-around" data-testid={props['data-testid']}>
                <Box basis="120px" shrink={0} grow={25}>
                    {illustration}
                </Box>
                <Box direction="column" grow={75} margin={[0, 0, 0, 24]}>
                    {title}
                    <Box margin={[9, 0, 0, 0]}>{message}</Box>
                    {(hasChildren || props.button) && (
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
        <Box direction="column" alignItems="center" justifyContent="space-around" data-testid={props['data-testid']}>
            {illustration}
            <Box padding={[18, 0, 0, 0]}>{title}</Box>
            <Box margin={[12, 0, 0, 0]}>{message}</Box>
            {(hasChildren || props.button) && (
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
