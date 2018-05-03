jest.mock('simplebar', (element:HTMLElement, options:Object) => {
    return {
        getScrollElement: jest.fn().mockReturnValue({
            addEventListener: jest.fn().mockImplementation((event, callback) => {
                callback();
            }),
        }),
        getContentElement: jest.fn().mockReturnValue({
            offsetHeight: 400,
        }),
    };
});
