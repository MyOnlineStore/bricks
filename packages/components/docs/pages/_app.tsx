import React from 'react';
import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { MosTheme } from '@myonlinestore/bricks';
import Head from '../components/Head';
import Page from '../components/Page';

declare module 'react' {
    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: boolean;
        global?: boolean;
    }
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Melbourne;
    src: url('/static/fonts/melbourne-bold.ttf');
    font-weight: 700;
  }
  @font-face {
      font-family: Melbourne;
      src: url('/static/fonts/melbourne.ttf');
      font-weight: 400;
  }
  @font-face {
      font-family: Melbourne;
      src: url('/static/fonts/melbourne-light.ttf');
      font-weight: 300;
  }
`;

class MyApp extends App {
    public render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <GlobalStyle />
                <MosTheme>
                    <Head />
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </MosTheme>
            </>
        );
    }
}

export default MyApp;
