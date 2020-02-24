import React, { FC } from 'react';
import { Box, colors } from '@myonlinestore/bricks';
import styled from 'styled-components';

type SquareProps = {
    background: string;
    border?: boolean;
};

const Square = styled.div<SquareProps>`
    width: 48px;
    height: 48px;
    display: inline-block;
    color: #ffffff;
    font-size: 15px;
    font-family: 'Source Sans Pro', Verdana;
    background: ${({ background }) => background};
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ border }) => (border ? `border: 1px solid ${colors.grey300}` : '')}
`;

type PropsType = {};

const VariantColorBoard: FC<PropsType> = () => {
    return (
        <Box direction="column" padding={[12, 0]}>
            <Box>
                <Square background={colors.red100}>100</Square>
                <Square background={colors.red200}>200</Square>
                <Square background={colors.red300}>300</Square>
                <Square background={colors.red400}>400</Square>
                <Square background={colors.red500}>500</Square>
                <Square background={colors.red600}>600</Square>
                <Square background={colors.red700}>700</Square>
                <Square background={colors.red800}>800</Square>
                <Square background={colors.red900}>900</Square>
            </Box>
            <Box>
                <Square background={colors.yellow100}>100</Square>
                <Square background={colors.yellow200}>200</Square>
                <Square background={colors.yellow300}>300</Square>
                <Square background={colors.yellow400}>400</Square>
                <Square background={colors.yellow500}>500</Square>
                <Square background={colors.yellow600}>600</Square>
                <Square background={colors.yellow700}>700</Square>
                <Square background={colors.yellow800}>800</Square>
                <Square background={colors.yellow900}>900</Square>
            </Box>
            <Box>
                <Square background={colors.green100}>100</Square>
                <Square background={colors.green200}>200</Square>
                <Square background={colors.green300}>300</Square>
                <Square background={colors.green400}>400</Square>
                <Square background={colors.green500}>500</Square>
                <Square background={colors.green600}>600</Square>
                <Square background={colors.green700}>700</Square>
                <Square background={colors.green800}>800</Square>
                <Square background={colors.green900}>900</Square>
            </Box>
            <Box>
                <Square background={colors.blue100}>100</Square>
                <Square background={colors.blue200}>200</Square>
                <Square background={colors.blue300}>300</Square>
                <Square background={colors.blue400}>400</Square>
                <Square background={colors.blue500}>500</Square>
                <Square background={colors.blue600}>600</Square>
                <Square background={colors.blue700}>700</Square>
                <Square background={colors.blue800}>800</Square>
                <Square background={colors.blue900}>900</Square>
            </Box>
            <Box>
                <Square background={colors.grey100}>100</Square>
                <Square background={colors.grey200}>200</Square>
                <Square background={colors.grey300}>300</Square>
                <Square background={colors.grey400}>400</Square>
                <Square background={colors.grey500}>500</Square>
                <Square background={colors.grey600}>600</Square>
                <Square background={colors.grey700}>700</Square>
                <Square background={colors.grey800}>800</Square>
                <Square background={colors.grey900}>900</Square>
            </Box>
        </Box>
    );
};

const MainBrandColorBoard: FC<{}> = () => (
    <Box>
        <Square background={colors.green300} />
        <Square background={colors.grey800} />
        <Square border background={colors.white} />
    </Box>
);

const SecondaryBrandColorBoard: FC<{}> = () => (
    <Box>
        <Square border background={colors.grey100} />
        <Square background={colors.yellow400} />
        <Square background={colors.red500} />
        <Square background={colors.blue500} />
    </Box>
);

export { VariantColorBoard, MainBrandColorBoard, SecondaryBrandColorBoard };
