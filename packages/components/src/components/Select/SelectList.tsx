import React, { FC, Children } from 'react';
import ScrollBox from '../ScrollBox';
import Box from '../Box';
import Text from '../Text';
import styled from 'styled-components';

const StyledList = styled.div`
    max-height: 240px;
    background: ${({ theme }) => theme.Select.common.background};
`;

const SelectList: FC<{
    isOpen: boolean;
    emptyText: string;
    'data-testid'?: string;
}> = props => (
    <StyledList data-testid={props['data-testid'] ? `${props['data-testid']}-list}` : undefined}>
        <ScrollBox autoHideScrollBar={false} showInsetShadow={false}>
            <div style={{ overflow: 'hidden', display: props.isOpen ? 'block' : 'none' }}>
                {(Children.count(props.children) === 0 && (
                    <Box padding={[12, 18]}>
                        <Text data-testid={props['data-testid'] ? `${props['data-testid']}-list-empty` : undefined}>
                            {props.emptyText}
                        </Text>
                    </Box>
                )) ||
                    props.children}
            </div>
        </ScrollBox>
    </StyledList>
);

export default SelectList;
