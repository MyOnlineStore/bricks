import React from 'react';
import { Box, Text, Heading, colors } from '@myonlinestore/bricks';
import { StyledContentPane } from '../components/ContentPane';
import headerBackground from '../assets/homepage-header-background.svg';
import homepageIllustration from '../assets/undraw_fitting_piece_iilo.svg';

const Index = () => {
    return (
        <Box>
            <StyledContentPane grow={1} maxWidth="1240px" minWidth="1240px" direction="column">
                <Box
                    width="100%"
                    height="241px"
                    style={{
                        backgroundImage: `url(${headerBackground})`,
                        borderRadius: '9px 9px 0 0',
                        zIndex: 5,
                    }}
                >
                    <Box
                        direction="column"
                        style={{ color: colors.white, marginLeft: '84px', marginTop: 'auto', marginBottom: 'auto' }}
                    >
                        <Heading as="h1" hierarchy={1} style={{ color: colors.white }}>
                            Bricks
                        </Heading>
                        <Heading as="h6" hierarchy={6} style={{ color: colors.white }}>
                            A Design system by My Online Store
                        </Heading>
                    </Box>
                </Box>
                <Box
                    width="100%"
                    height="244px"
                    style={{
                        background: colors.grey100,
                        marginTop: '-24px',
                    }}
                >
                    <Box width="50%">
                        <Box
                            direction="column"
                            width="450px"
                            style={{ color: colors.white, marginLeft: '84px', marginTop: 'auto', marginBottom: 'auto' }}
                        >
                            <Heading as="h3" hierarchy={3}>
                                What is Bricks?
                            </Heading>
                            <Text>
                                Bricks is a modular design system built primarily in React. It uses the same principles
                                as building blocks to create an easy-to-use and fun e-commerce platform.
                            </Text>
                        </Box>
                    </Box>
                    <Box width="50%">
                        <img style={{ margin: '-32px', zIndex: 10 }} src={homepageIllustration} />
                    </Box>
                </Box>
                <Box width="100%" height="600px">
                    <Box width="100%" direction="column" alignItems="center" style={{ marginTop: '120px' }}>
                        <Heading as="h3" hierarchy={3}>
                            The foundations of our platform
                        </Heading>
                        <Text>
                            Postcards have been consistently one of the more popular collectibles and used as
                            promotional materials. More and more business owners.
                        </Text>
                    </Box>
                </Box>
            </StyledContentPane>
        </Box>
    );
};

export default Index;
