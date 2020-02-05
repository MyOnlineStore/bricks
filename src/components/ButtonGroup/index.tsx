import React, { Children, FunctionComponent } from 'react';
import Box from '../Box';

type PropsType = {
    direction?: 'rtl' | 'ltr' | 'stacked';
    'data-testid'?: string;
};

const ButtonGroup: FunctionComponent<PropsType> = props => {
    const isStacked = props.direction === 'stacked';
    const direction = isStacked ? 'column' : 'row';

    const children =
        isStacked || props.direction === 'ltr'
            ? Children.toArray(props.children)
            : Children.toArray(props.children).reverse();

    return (
        <Box
            direction={direction}
            justifyContent={isStacked || props.direction === 'ltr' ? 'flex-start' : 'flex-end'}
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
