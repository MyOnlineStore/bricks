import React, { Children, Component } from 'react';

type PropsType = {};

type StateType = {
    currentStep: number;
};

class ButtonChain extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            currentStep: 0,
        };
    }

    public nextStep = (): void => {
        if (this.state.currentStep < Children.count(this.props.children) - 1) {
            this.setState({
                currentStep: this.state.currentStep + 1,
            });
        } else {
            this.setState({
                currentStep: 0,
            });
        }
    };

    public render(): JSX.Element {
        return (
            <span
                onClickCapture={(): void => {
                    this.nextStep();
                }}
            >
                {Children.count(this.props.children) > 0 &&
                    Children.toArray(this.props.children)[
                        this.state.currentStep
                    ]}
            </span>
        );
    }
}

export default ButtonChain;
export { PropsType, StateType };
