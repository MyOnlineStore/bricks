import React, { FC } from 'react';
import { Box, colors, rgba } from '@myonlinestore/bricks';
import styled from 'styled-components';

const StyledContentPane = styled(Box)`
    background: ${colors.white};
    border-radius: 9px;
    box-shadow: 0 1px 4px 0 ${rgba(colors.grey900, 0.25)};
    margin-bottom: 24px;
`;

const ContentPane: FC = props => (
    <StyledContentPane grow={1} padding={[48, 120 as 0]} maxWidth="960px" minWidth="960px">
        {props.children}
    </StyledContentPane>
);

export default ContentPane;
export { StyledContentPane };
