import React from 'react';
import App, { Container } from 'next/app';
import { Box, MosTheme } from '@myonlinestore/bricks';
import Head from '../components/Head';
import Page from '../components/Page';

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
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </Container>
            </MosTheme>
        );
    }
}

export default MyApp;
