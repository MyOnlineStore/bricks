import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import MosTheme from '../../themes/MosTheme';

/* tslint:disable */
const shallowWithTheme = (component:JSX.Element):ShallowWrapper => {
    const context = shallow(<MosTheme />)
        .dive()
        .instance()
        .getChildContext();

    return shallow(component, { context });
};
/* tslint:enable */

export default shallowWithTheme;
