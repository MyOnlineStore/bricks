import React, { SFC, ReactNode } from 'react';
import StyledHeader from './style';
import Text from '../../Text';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import { SubscriptionConsumer } from '../../../utility/SubscriptionContext';
import { mapAlignment } from '..';

type PropsType = {
    alignments: Array<'left' | 'center' | 'right'>;
    headers: Array<ReactNode>;
    selectable?: boolean;
    draggable?: boolean;
    checked?: boolean | 'indeterminate';
    onCheck?(checked: boolean): void;
};

const Header: SFC<PropsType> = ({ alignments, checked, draggable, onCheck, selectable, headers }): JSX.Element => {
    return (
        <thead>
            <tr>
                {draggable && <StyledHeader align="left" />}
                {selectable && (
                    <StyledHeader align="left">
                        <Checkbox
                            checked={checked !== undefined ? checked : false}
                            name=""
                            value=""
                            onChange={({ checked }): void => {
                                if (onCheck !== undefined) onCheck(checked as boolean);
                            }}
                        />
                    </StyledHeader>
                )}
                {headers.map((header, headerIndex): JSX.Element => {
                    return (
                        <StyledHeader align={alignments[headerIndex]} key={headerIndex}>
                            <Box justifyContent={mapAlignment(alignments[headerIndex])}>
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
