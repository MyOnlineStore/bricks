import React, { Children, FunctionComponent } from 'react';
import Box from '../Box';
import deprecationWarning from '../../utility/deprecationWarning';

type PropsType = {
    /**
     * @deprecated The stacked prop has been deprecated and will be removed in
     * the next major version. please use direction="stacked" going forward.
     */
    stacked?: boolean;
    direction?: 'rtl' | 'ltr' | 'stacked';
    'data-testid'?: string;
};

const ButtonGroup: FunctionComponent<PropsType> = props => {
    // tslint:disable-next-line:deprecation
    if (props.stacked !== undefined) {
        deprecationWarning(
            'The stacked prop has been deprecated and will be removed in the next major version. please use direction="stacked" going forward.',
            'https://github.com/MyOnlineStore/bricks/issues/455',
        );
    }

    // tslint:disable-next-line:deprecation
    const isStacked = props.stacked || props.direction === 'stacked';
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
