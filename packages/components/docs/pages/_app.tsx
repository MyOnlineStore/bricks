import React from 'react';
import App from 'next/app';
import { MosTheme } from '@myonlinestore/bricks';
import Head from '../components/Head';
import Page from '../components/Page';
import '../styles.css';

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
                <Head />
                <Page>
                    <Component {...pageProps} />
                </Page>
            </MosTheme>
        );
    }
}

export default MyApp;
