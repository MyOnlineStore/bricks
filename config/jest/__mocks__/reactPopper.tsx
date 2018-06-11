import React from 'react';

/* tslint:disable */

const Manager = jest.fn((props: any): JSX.Element => {
    return props.children;
});

const Popper = jest.fn((props: any): JSX.Element => {
    return props.children({
        ref: null,
        style: '',
        placement: '',
        arrowProps: { ref: null, style: '' },
    });
});

const Reference = jest.fn((props: any): JSX.Element => {
    return props.children({
        ref: null,
    });
});

/* tslint:enable */

export { Manager, Popper, Reference };
