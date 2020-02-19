import React, { FC } from 'react';
import { Box } from '@myonlinestore/bricks';
import ContentPane from './ContentPane';
import SideNav from '../containers/SideNav';

type PropsType = {
    dirName: string;
};

const GeneratedPage: FC<PropsType> = props => {
    return (
        <Box>
            <SideNav dirName={props.dirName} />
            <ContentPane>{props.children}</ContentPane>
        </Box>
    );
};

export default GeneratedPage;
