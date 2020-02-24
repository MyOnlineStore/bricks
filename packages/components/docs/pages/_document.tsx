import Document from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import { ComponentType } from 'react';

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
export default class AppDocument extends Document {
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: ComponentType<Object>) => (props: Object) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        <GlobalStyle />
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}
