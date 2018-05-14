import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import MosTheme from '../../themes/MosTheme';

const shallowWithTheme = (component:JSX.Element):ShallowWrapper => {
    const context = shallow(<MosTheme />)
        .dive()
        .instance()
        .getChildContext();

    return shallow(component, { context });
};

export default shallowWithTheme;
