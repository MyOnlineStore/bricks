import React, { SFC, ReactNode } from 'react';
import StyledHeader from './style';
import Text from '../../Text';
import Box from '../../Box';

type PropsType = {
    alignments: Array<'flex-start' | 'center' | 'flex-end'>;
    headers: Array<ReactNode>;
    draggable?: boolean;
};

const HeaderRow: SFC<PropsType> = ({ alignments, draggable, headers }): JSX.Element => {
    return (
        <thead>
            <tr>
                {draggable && <StyledHeader />}
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

export default HeaderRow;
export { PropsType };
