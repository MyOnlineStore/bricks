import React, { SFC } from 'react';
import StyledTextarea from './style';

type PropsType = {
    resizeable?: boolean;
};

const Textarea: SFC<PropsType> = (props): JSX.Element => {
    return <StyledTextarea resizeable={props.resizeable} />;
};

export default Textarea;
export { PropsType };
