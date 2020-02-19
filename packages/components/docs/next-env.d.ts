/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare module '*.mdx' {
    let MDXComponent: (props) => JSX.Element;
    export default MDXComponent;
}
