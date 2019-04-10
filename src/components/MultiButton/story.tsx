import { storiesOf } from '@storybook/react';
import { object, select, number } from '@storybook/addon-knobs';
import React, { FC } from 'react';
import MultiButton, { PlacementType } from '.';
import Box from '../Box';
import trbl from '../../utility/_trbl';

const options = [
    {
        label: 'Default action',
        default: true,
        description: 'Unparalleled step-changes dynamically enable senior industry leaders for our market foci.',
        onClick: (): void => {
            alert('Default action');
        },
    },
    {
        label: 'Alternative action 1',
        description: 'In the deliverable space, industry is virtually impacting its holistic verticals.',
        onClick: (): void => {
            alert('Alternative action 1');
        },
    },
    {
        label: 'Alternative action 2',
        description:
            'Key players will take ownership of their big datas by iteratively integrating long-term capabilities.',
        onClick: (): void => {
            alert('Alternative action 2');
        },
    },
];

const Demo: FC = (): JSX.Element => {
    /* tslint:disable */
    return (
        <Box height="90vh" justifyContent="center" alignItems="center">
            <Box margin={trbl(48)}>
                <MultiButton
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
                    variant={select(
                        'variant',
                        ['primary', 'secondary', 'warning', 'destructive', 'plain'],
                        'secondary',
                    )}
                    offset={number('offset', 0)}
                    distance={number('distance', 3)}
                    options={object('options', options)}
                />
            </Box>
        </Box>
    );
    /* tslint:enable */
};

storiesOf('MultiButton', module).add('Default', () => <Demo />);
