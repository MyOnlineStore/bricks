import React, { FunctionComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import Box from '../Box';
import Heading, { HierarchyType } from '../Heading';
import Illustration, { Illustrations } from '../Illustration';

import Text from '../Text';

type PropsType = {
    title: string;
    message: string;
    horizontal?: boolean;
    hierarchy?: HierarchyType;
    illustration?: keyof typeof Illustrations;
};

const EmptyState: FunctionComponent<PropsType> = (props): JSX.Element => {
    const hierarchy = props.hierarchy ? props.hierarchy : 1;
    const illustration = props.illustration ? props.illustration : 'cactus';

    if (props.horizontal) {
        return (
            <Box direction="row" alignItems="center" justifyContent="space-around">
                <Box basis="120px" shrink={0} grow={25}>
                    <Illustration illustration={illustration} />
                </Box>
                <Box direction="column" grow={75} margin={[0, 0, 0, 24]}>
                    <Heading hierarchy={hierarchy}>{props.title}</Heading>
                    <Box margin={[9, 0, 24, 0]}>
                        <Text descriptive>{props.message}</Text>
                    </Box>
                    <Box>{props.children}</Box>
                </Box>
            </Box>
        );
    }

    return (
        <Box direction="column" alignItems="center" justifyContent="space-around">
            <Illustration illustration={illustration} />
            <Box padding={[18, 0, 0, 0]}>
                <Heading hierarchy={hierarchy} textAlign="center">
                    {props.title}
                </Heading>
            </Box>
            <Box margin={[12, 0, 24, 0]}>
                <Text textAlign="center" descriptive>
                    {props.message}
                </Text>
            </Box>
            {props.children}
        </Box>
    );
};

export default EmptyState;
export { PropsType };
