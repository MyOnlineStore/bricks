import React, { SFC, ReactNode } from 'react';
import StyledHeader from './style';
import Text from '../../Text';
import Box from '../../Box';
import Checkbox from '../../Checkbox';

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
                        <Checkbox checked={true} name="" value={'row'} onChange={(): void => undefined} />
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
