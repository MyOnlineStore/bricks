import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';

type PropsType = StyledType & {
    hierarchy?:
        |1
        |2
        |3
        |4
        |5
        |6;
};

const Heading:StatelessComponent<PropsType> = (props):JSX.Element => {
    const Element = props.hierarchy !== undefined
        ? `h${props.hierarchy}`
        : 'div';

    return (
        <Element role="heading" className={props.className}>
            {props.children}
        </Element>
    );
};

export default Heading;
export {
    PropsType,
};
