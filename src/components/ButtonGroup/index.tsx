import React, { Children, FunctionComponent } from 'react';
import Box from '../Box';

type PropsType = {
    stacked?: boolean;
    'data-testid'?: string;
};

const ButtonGroup: FunctionComponent<PropsType> = (props): JSX.Element => {
    const direction = props.stacked ? 'column' : 'row-reverse';

    return (
        <Box
            direction={direction}
            justifyContent="flex-start"
            alignItems="stretch"
            wrap
            margin={[-6]}
            data-testid={props['data-testid']}
        >
            {Children.map(
                props.children,
                (child): JSX.Element => (
                    <Box direction={direction === 'row-reverse' ? 'row' : 'column'} alignSelf="stretch" margin={[6]}>
                        {child}
                    </Box>
                ),
            )}
        </Box>
    );
};

export default ButtonGroup;
