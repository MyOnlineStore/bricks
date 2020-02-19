import React, { FC } from 'react';
import { Box, Text, Heading, colors } from '@myonlinestore/bricks';
import StyledLink from '../components/StyledLink';
import styled from 'styled-components';

type PropsType = {
    title: string;
    href: string;
    imgSrc: string;
    firstSubtitle: string;
    secondSubtitle: string;
    thirdSubtitle: string;
};

const StyledImgCircleContainer = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid ${colors.grey300};
    border-radius: 50%;
    background-color: ${colors.white};
    margin-right: 24px;
    display: flex;
    align-items: center;

    img {
        width: 70px;
        border-radius: 50%;
    }
`;

const StyledTextDivider = styled.span`
    width: 6px;
    height: 6px;
    background-color: ${colors.grey300};
    border-radius: 50%;
    margin: 6px;
`;

const ReferralRow: FC<PropsType> = props => {
    return (
        <Box alignItems="center" margin={[12, 0]}>
            <StyledImgCircleContainer>
                <img src={props.imgSrc} />
            </StyledImgCircleContainer>
            <Box direction="column">
                <Heading as="h5" hierarchy={5}>
                    <StyledLink title={props.title} href={props.href} />
                </Heading>
                <Box alignItems="center">
                    <Text as="span">{props.firstSubtitle}</Text>
                    <StyledTextDivider />
                    <Text as="span">{props.secondSubtitle}</Text>
                    <StyledTextDivider />
                    <Text as="span">{props.thirdSubtitle}</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default ReferralRow;
