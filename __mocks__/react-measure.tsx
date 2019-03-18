/* tslint:disable */

const measureRef = jest.fn();

const contentRect = { bounds: { width: 600, height: 600 } };

const Measure = jest.fn((props: any): JSX.Element => props.children({ measureRef, contentRect }));

export default Measure;
