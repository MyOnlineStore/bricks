import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Toggle from '.';

type StateType = {
    checked: boolean;
};

class Demo extends Component<{}, StateType> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            checked: false,
        };
    }

    public render(): JSX.Element {
        return (
            <Toggle
                onChange={({ checked }): void => {
                    this.setState({ checked });
                }}
                name="Toggle"
                value="foot"
                checked={boolean('checked', this.state.checked)}
                disabled={boolean('disabled', false)}
                disabledIcon={boolean('disabled icon', true)}
                error={boolean('error', false)}
                label={text('label', 'Turn me on!')}
            />
        );
    }
}

storiesOf('Toggle', module).add('Default', () => <Demo />);
