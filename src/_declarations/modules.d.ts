declare module '@storybook/addon-storyshots';
declare module '@storybook/addon-knobs';
declare module 'react-inlinesvg';
declare module 'enzyme-adapter';

declare module '*.svg' {
    const content: string;
    export default content;
}
