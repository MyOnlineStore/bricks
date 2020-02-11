// This is a workaround for a bug in jest-styled-components
// see: https://github.com/styled-components/jest-styled-components/issues/264, https://github.com/styled-components/jest-styled-components/issues/291
declare namespace jest {
    interface AsymmetricMatcher {
        $$typeof: Symbol;
        //tslint:disable-next-line
        sample?: string | RegExp | object | Array<any> | Function;
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined;

    interface Options {
        media?: string;
        modifier?: string;
        supports?: string;
    }

    interface Matchers<R> {
        toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
}
