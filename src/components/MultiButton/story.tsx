import { storiesOf } from '@storybook/react';
import { object, text, select, number } from '@storybook/addon-knobs';
import React, { Component } from 'react';
import MultiButton, { PlacementType } from '.';
import Box from '../Box';
import trbl from '../../utility/trbl';

const options = [
    {
        value: 'Option 1',
        label: 'Default action',
        default: true,
        description: 'Unparalleled step-changes dynamically enable senior industry leaders for our market foci.',
        action: () => {
            alert('Default action');
        },
    },
    {
        value: 'Option 2',
        label: 'Alternative action 1',
        description: 'In the deliverable space, industry is virtually impacting its holistic verticals.',
        action: () => {
            alert('Alternative action 1');
        },
    },
    {
        value: 'Option 3',
        label: 'Alternative action 2',
        description:
            'Key players will take ownership of their big datas by iteratively integrating long-term capabilities.',
        action: () => {
            alert('Alternative action 2');
        },
    },
];

class Demo extends Component<{}, { value: string }> {
    public render(): JSX.Element {
        return (
            <Box height="90vh" justifyContent="center" alignItems="center">
                <Box margin={trbl(48)}>
                    <MultiButton
                        options={object('options', options)}
                        placement={
                            select(
                                'placement',
                                [
                                    'auto-start',
                                    'auto',
                                    'auto-end',
                                    'top-start',
                                    'top',
                                    'top-end',
                                    'right-start',
                                    'right',
                                    'right-end',
                                    'bottom-end',
                                    'bottom',
                                    'bottom-start',
                                    'left-end',
                                    'left',
                                    'left-start',
                                ],
                                'bottom-end',
                            ) as PlacementType
                        }
                        offset={number('offset', 0)}
                        distance={number('distance', 3)}
                        variant={'secondary'}
                    />
                </Box>
            </Box>
        );
    }
}

storiesOf('MultiButton', module).add('Default', () => <Demo />);
