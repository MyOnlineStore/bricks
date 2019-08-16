import React, { Children, FunctionComponent } from 'react';
import Box from '../Box';

type PropsType = {
    stacked?: boolean;
    'data-testid'?: string;
};

const ButtonGroup: FunctionComponent<PropsType> = props => {
    const direction = props.stacked ? 'column' : 'row';
    const children = props.stacked ? Children.toArray(props.children) : Children.toArray(props.children).reverse();

    return (
        <Box
            direction={direction}
            justifyContent={props.stacked ? 'flex-start' : 'flex-end'}
            alignItems="stretch"
            wrap
            margin={[-6]}
            data-testid={props['data-testid']}
        >
            {children.map((child, index) => (
                <Box key={index} direction={direction} alignSelf="stretch" margin={[6]}>
                    {child}
                </Box>
            ))}
        </Box>
    );
};

export default ButtonGroup;
