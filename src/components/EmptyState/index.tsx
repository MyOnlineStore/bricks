import React, { FunctionComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Heading from '../Heading';
import Illustration from '../Illustration';

import Text from '../Text';

type PropsType = {
    title: string;
    message: string;
    stacked?: boolean;
};

const EmptyState: FunctionComponent<PropsType> = (props): JSX.Element => {
    if (props.stacked) {
        return (
            <Box direction="row" alignItems="center" justifyContent="space-around">
                <Illustration illustration={'cactus'} />
                <Box direction="column" width="100%" margin={trbl(0, 0, 0, 24)}>
                    <Heading hierarchy={3}>{props.title}</Heading>
                    <Box margin={trbl(9, 0, 24, 0)}>
                        <Text descriptive>{props.message}</Text>
                    </Box>
                    <Box>{props.children}</Box>
                </Box>
            </Box>
        );
    }

    return (
        <Box direction="column" alignItems="center" justifyContent="space-around">
            <Illustration illustration={'cactus'} />
            <Box padding={trbl(18, 0, 0, 0)}>
                <Heading hierarchy={1} textAlign="center">
                    {props.title}
                </Heading>
            </Box>
            <Box margin={trbl(12, 0, 24, 0)}>
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
