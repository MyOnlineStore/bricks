import React, { Children, FC } from 'react';
import Contrast from '../Contrast';
import Box from '../Box';

type PropsType = {
    /** Direction of the toolbar, defaults to horizontal */
    direction?: 'vertical' | 'horizontal';
};

const Toolbar: FC<PropsType> = props => {
    return (
        <Contrast>
            <Box
                padding={props.direction === 'vertical' ? [3, 0] : [0, 3]}
                grow={0}
                shrink={0}
                direction={props.direction === 'vertical' ? 'column' : 'row'}
            >
                {Children.map(props.children, child => {
                    return <Box margin={[3]}>{child}</Box>;
                })}
            </Box>
        </Contrast>
    );
};

export default Toolbar;
