import React, { SFC, ReactNode } from 'react';
import StyledHeader from './style';
import Text from '../../Text';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import { SubscriptionConsumer } from '../../../utility/SubscriptionContext';

type PropsType = {
    alignments: Array<'flex-start' | 'center' | 'flex-end'>;
    headers: Array<ReactNode>;
    selectable?: boolean;
    draggable?: boolean;
};

const Header: SFC<PropsType> = ({ alignments, draggable, selectable, headers }): JSX.Element => {
    return (
        <thead>
            <tr>
                {draggable && <StyledHeader />}
                {selectable && (
                    <StyledHeader>
                        <SubscriptionConsumer>
                            {({ items, updateAll }): JSX.Element => {
                                const checkedState = ((): 'indeterminate' | boolean => {
                                    const checkedItems = items.filter(item => item.payload === true);

                                    switch (checkedItems.length) {
                                        case 0:
                                            return false;
                                        case items.length:
                                            return true;
                                        default:
                                            return 'indeterminate';
                                    }
                                })();

                                return (
                                    <Checkbox
                                        checked={checkedState}
                                        name=""
                                        value=""
                                        onChange={({ checked }): void => updateAll(checked)}
                                    />
                                );
                            }}
                        </SubscriptionConsumer>
                    </StyledHeader>
                )}
                {headers.map((header, headerIndex): JSX.Element => {
                    return (
                        <StyledHeader key={headerIndex}>
                            <Box justifyContent={alignments[headerIndex]}>
                                {(typeof header === 'string' && <Text strong>{header}</Text>) || header}
                            </Box>
                        </StyledHeader>
                    );
                })}
            </tr>
        </thead>
    );
};

export default Header;
export { PropsType };
