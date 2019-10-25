import React, { FC } from 'react';
import {
    Box,
    FoldOut,
    Link,
    Text,
    Heading,
    Separated,
    Illustration,
    TextField,
    Icon,
    SearchIcon,
} from '@myonlinestore/bricks';
import Header from './Header';
import HeadingLink from './HeadingLink';
import MostyLogo from '../assets/mosty.svg';

const Page: FC = props => {
    return (
        <main style={{ backgroundColor: '#F8F9FB' }}>
            <Box minHeight="100vh" direction="column" maxWidth="1200px" margin={['auto']}>
                <Header>
                    <Box alignItems="center">
                        <Box width="240px" padding={[0, 12, 0, 12]} alignItems="center" justifyContent="center">
                            <Link href="/" title="Home">
                                <img width="180px" src={MostyLogo} />
                            </Link>
                        </Box>

                        <Box style={{ marginLeft: '120px' }}>
                            <HeadingLink active={false}>
                                <Link href="/content" title="Content" />
                            </HeadingLink>
                            <HeadingLink active={false}>
                                <Link href="/logo" title="Design" />
                            </HeadingLink>
                            <HeadingLink active>
                                <Link href="/badges" title="Components" />
                            </HeadingLink>
                            <HeadingLink active={false}>
                                <Link href="/guides" title="Guides" />
                            </HeadingLink>
                        </Box>
                    </Box>

                    <Box width="200px">
                        <TextField
                            value={''}
                            prefix={
                                <Box padding={[12]}>
                                    <Icon icon={SearchIcon} size="small" />
                                </Box>
                            }
                            name="search"
                            placeholder="Zoeken"
                            onChange={() => {
                                /*noop*/
                            }}
                        />
                    </Box>
                </Header>
                <Box width="100%" minHeight="80vh" alignContent="stretch">
                    {props.children}
                </Box>
            </Box>
        </main>
    );
};

export default Page;

// zwart 25% x=0 y=1 blur=4 spread=0
