import React, { FC, useContext } from 'react';
import ScrollBox from '../ScrollBox';
import Box from '../Box';
import Text from '../Text';
import styled from 'styled-components';
import { SelectContext } from '.';

const StyledList = styled.div`
    max-height: 240px;
    background: ${({ theme }) => theme.Select.common.background};
`;

const SelectList: FC<{
    isOpen: boolean;
    emptyText: string;
    'data-testid'?: string;
}> = props => {
    const { options } = useContext(SelectContext);

    return (
        <StyledList data-testid={props['data-testid'] ? `${props['data-testid']}-list}` : undefined}>
            <ScrollBox autoHideScrollBar={false} showInsetShadow={false}>
                <div style={{ overflow: 'hidden', display: props.isOpen ? 'block' : 'none' }}>
                    {options.length === 0 && (
                        <Box padding={[12, 18]}>
                            <Text data-testid={props['data-testid'] ? `${props['data-testid']}-list-empty` : undefined}>
                                {props.emptyText}
                            </Text>
                        </Box>
                    )}
                    {/*
                      * Make sure the children are always rendered, since their lifecycle will update
                      * the option refs from the context. The children themselves will decide whether
                      * to return `null` or not based on the filter.
                      */}
                    {props.children}
                </div>
            </ScrollBox>
        </StyledList>
    );
};

export default SelectList;
