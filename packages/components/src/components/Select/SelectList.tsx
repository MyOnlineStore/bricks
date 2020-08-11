import React, { FC, useContext, useState, useLayoutEffect } from 'react';
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
    const { options, filter } = useContext(SelectContext);
    const [isEmpty, setEmpty] = useState(options.length === 0);

    useLayoutEffect(() => {
        setEmpty(options.length === 0);
    }, [options, filter]);

    return (
        <StyledList data-testid={props['data-testid'] ? `${props['data-testid']}-list}` : undefined}>
            <ScrollBox autoHideScrollBar={false} showInsetShadow={false}>
                <div style={{ overflow: 'hidden', display: props.isOpen ? 'block' : 'none' }}>
                    {isEmpty && (
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
