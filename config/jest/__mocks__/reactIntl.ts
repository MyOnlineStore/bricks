/* tslint:disable */
const mock = jest.fn(() => {
    const React = require('react');

    return {
        Manager: (props:any):JSX.Element => {
            return props.children;
        },
        Popper: (props:any):JSX.Element => {
            return props.children({
                ref: null,
                style: '',
                placement: '',
                arrowProps: { ref: null, style: '' }
            });
        },
        Reference: (props:any):JSX.Element => {
            return props.children({
                ref: null,
            });
        },
    };
});
/* tslint:enable */

export default mock;
