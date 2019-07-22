import React from 'react';
import App, { Container } from 'next/app';
import { Box, MosTheme } from '@myonlinestore/bricks';
import Head from '../components/Head';

declare module 'react' {
    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: boolean;
        global?: boolean;
    }
}

class MyApp extends App {
    public render() {
        const { Component, pageProps } = this.props;

        return (
            <MosTheme>
                <Container>
                    <Head />
                    <Box direction="column" wrap={false} minHeight="100vh">
                        <Component {...pageProps} />
                    </Box>
                </Container>
            </MosTheme>
        );
    }
}

export default MyApp;
