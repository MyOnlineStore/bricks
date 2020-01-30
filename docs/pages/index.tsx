import React from 'react';
import { Box, Text, Heading, colors, rgba, Link, Illustration } from '@myonlinestore/bricks';
import { PropsType as BoxPropsType } from '../../src/components/Box';
import { StyledContentPane } from '../components/ContentPane';
import headerBackground from '../assets/homepage-header-background.svg';
import homepagePuzzleIllustration from '../assets/homepage-puzzle-illustration.svg';
import homepageDesignIllustration from '../assets/homepage-design-illustration.svg';
import homepageComponentsIllustration from '../assets/homepage-components-illustration.svg';
import howNotToBeADinosaurImg from '../assets/how-not-to-be-a-dinosaur.png';
import howToAutomateGithubImg from '../assets/how-to-automate-github.png';
import frontendBadgeImg from '../assets/frontend-badge.png';
import productBadgeImg from '../assets/product-badge.png';
import styled from 'styled-components';
import ReferralRow from '../components/ReferralRow';

const StyledCurvedHeader = styled(Box)`
    background-image: url(${headerBackground});
    z-index: 5;
`;

const StyledIllustrationRow = styled(Box)`
    background: ${colors.grey100};
    margin-top: -50px;
`;

type RowTextContainerPropsType = {
    alignment: 'center' | 'left';
    marginTop?: string;
};

const StyledRowTextContainer = styled(Box)<BoxPropsType & RowTextContainerPropsType>`
    margin-left: ${({ alignment }) => (alignment === 'left' ? '103px' : 'auto')};
    margin-right: ${({ alignment }) => (alignment === 'left' ? '120px' : 'auto')};
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : 'auto')};
    margin-bottom: auto;

    ${({ alignment }) => (alignment === 'center' ? 'text-align: center;' : '')}

    h1 {
        font-size: 60px;
        line-height: 78px;
        margin-bottom: 15px;
    }

    h2 {
        margin-bottom: 12px;
    }

    h3 {
        margin-bottom: 12px;
    }
`;

const IllustratedLinkPane = styled(Box)`
    height: 234px;
    width: 486px;
    border-radius: 9px;
    box-shadow: 0px 1px 4px ${rgba(colors.grey900, 0.15)};
    margin: 0 12px;
    padding: 36px;

    h3 {
        margin-bottom: 12px;
    }
`;

const StyledReferralPane = styled(Box)`
    width: 996px;
    margin: 48px auto;
    background-color: ${colors.grey100};
    border-radius: 6px;
    padding: 36px;

    h3 {
        margin-bottom: 9px;
    }
`;

const GreenLink = styled(Link)`
    color: ${colors.green400};
`;

const Index = () => {
    return (
        <Box>
            <StyledContentPane grow={1} maxWidth="1200px" minWidth="1200px" direction="column">
                <StyledCurvedHeader width="100%" height="241px">
                    <StyledRowTextContainer direction="column" alignment="left" marginTop="48px">
                        <Heading as="h1" hierarchy={1} style={{ color: colors.white }}>
                            Bricks
                        </Heading>
                        <Heading as="h6" hierarchy={6} style={{ color: colors.white }}>
                            A design system by MyOnlineStore
                        </Heading>
                    </StyledRowTextContainer>
                </StyledCurvedHeader>
                <StyledIllustrationRow width="100%" height="244px">
                    <Box width="50%">
                        <StyledRowTextContainer direction="column" width="450px" alignment="left" marginTop="87px">
                            <Heading as="h2" hierarchy={2}>
                                What is Bricks?
                            </Heading>
                            <Text>
                                Bricks is a modular design system built primarily in React. It uses the same principles
                                as building blocks to create an easy-to-use and fun e-commerce platform.
                            </Text>
                        </StyledRowTextContainer>
                    </Box>
                    <Box width="50%">
                        <img
                            style={{ margin: '-33px -69px -81px -69px', zIndex: 10 }}
                            src={homepagePuzzleIllustration}
                        />
                    </Box>
                </StyledIllustrationRow>
                <Box width="100%" height="315px">
                    <StyledRowTextContainer
                        width="30%"
                        direction="column"
                        alignItems="center"
                        marginTop="114px"
                        alignment="center"
                    >
                        <Heading as="h3" hierarchy={3}>
                            The foundations of our platform
                        </Heading>
                        <Text>
                            The core of Bricks is built on a shared view of design rules and reasons reflected in
                            functional and modular components. Together they create consistency across all applications
                            of MyOnlineStore.
                        </Text>
                    </StyledRowTextContainer>
                </Box>
                <Box width="100%" direction="column" alignItems="center">
                    <Box>
                        <IllustratedLinkPane>
                            <Box width="50%" direction="column" margin={[6, 0, 0, 0]}>
                                <Heading as="h3" hierarchy={3}>
                                    Design
                                </Heading>
                                <Text>The rules and reasons behind our visual styling.</Text>
                                <Box margin={[48, 0]}>
                                    <Text>
                                        <GreenLink title="Read design principles >" href="/design" />
                                    </Text>
                                </Box>
                            </Box>
                            <Box width="50%">
                                <img src={homepageDesignIllustration} />
                            </Box>
                        </IllustratedLinkPane>
                        <IllustratedLinkPane>
                            <Box width="50%" direction="column" margin={[6, 0, 0, 0]}>
                                <Heading as="h3" hierarchy={3}>
                                    Components
                                </Heading>
                                <Text>How to use components (bricks) as functional building blocks.</Text>
                                <Box margin={[30, 0, 36, 0]}>
                                    <Text>
                                        <GreenLink title="Browse components >" href="/design" />
                                    </Text>
                                </Box>
                            </Box>
                            <Box width="50%" margin={[0, 36, 0, 0]}>
                                <img src={homepageComponentsIllustration} />
                            </Box>
                        </IllustratedLinkPane>
                    </Box>
                </Box>
                <Box width="100%">
                    <StyledReferralPane>
                        <Box width="50%" direction="column">
                            <Heading as="h3" hierarchy={3}>
                                Recent blogs
                            </Heading>
                            <Box direction="column" height="207px">
                                <ReferralRow
                                    title="How not to be a dinosaur"
                                    href="https://medium.com/myonlinestore/how-to-not-be-a-dinosaur-a0e341fd7575"
                                    firstSubtitle="Johan van Tongeren"
                                    secondSubtitle="Nov 13 '19"
                                    thirdSubtitle="9 min read"
                                    imgSrc={howNotToBeADinosaurImg}
                                />
                                <ReferralRow
                                    title="How to automate your GitHub workflow and go home early"
                                    href="https://medium.com/myonlinestore/how-to-automate-your-github-workflow-and-go-home-early-6e6f940e6651"
                                    firstSubtitle="Carlo Palinckx"
                                    secondSubtitle="Oct 31 '19"
                                    thirdSubtitle="3 min read"
                                    imgSrc={howToAutomateGithubImg}
                                />
                            </Box>
                            <Box>
                                <Text>
                                    <GreenLink
                                        title="View all blog articles >"
                                        href="https://medium.com/myonlinestore/"
                                    />
                                </Text>
                            </Box>
                        </Box>
                        <Box width="50%" direction="column" padding={[0, 0, 0, 48]}>
                            <Heading as="h3" hierarchy={3}>
                                Upcoming events
                            </Heading>
                            <Box direction="column" width="100%" height="207px">
                                <ReferralRow
                                    title="Frontend Oss: March Meetup"
                                    href="https://www.meetup.com/FrontendOss/"
                                    firstSubtitle="MyOnlineStore"
                                    secondSubtitle="Mar 20 '20"
                                    thirdSubtitle="FREE"
                                    imgSrc={frontendBadgeImg}
                                />
                                <ReferralRow
                                    title="Product Owner Meetup"
                                    href="https://www.meetup.com/FrontendOss/"
                                    firstSubtitle="MyOnlineStore"
                                    secondSubtitle="T.B.D."
                                    thirdSubtitle="FREE"
                                    imgSrc={productBadgeImg}
                                />
                            </Box>
                            <Box width="100%">
                                <Text>
                                    <GreenLink
                                        title="View all upcoming events >"
                                        href="https://www.meetup.com/FrontendOss/"
                                    />
                                </Text>
                            </Box>
                        </Box>
                    </StyledReferralPane>
                </Box>
            </StyledContentPane>
        </Box>
    );
};

export default Index;
