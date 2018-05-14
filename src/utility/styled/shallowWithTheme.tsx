import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import MosTheme from '../../themes/MosTheme';

const shallowWithTheme = (component:JSX.Element):ShallowWrapper => {
    /* tslint:disable */
    const context = shallow(<MosTheme />)
        .dive()
        .instance()
        .getChildContext();
    /* tslint:enable */

    return shallow(component, { context });
};

export default shallowWithTheme;
