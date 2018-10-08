import { boolean, number, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React, { Component, StatelessComponent } from 'react';
import Popover, { PlacementType } from '.';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';

type PropsType = {
    placement: PlacementType;
    fixed: boolean;
    offset: number;
    distance: number;
};

type StateType = {
    isOpen: boolean;
};

const DemoContent: StatelessComponent = (): JSX.Element => {
    return (
        <Box margin={trbl(24)}>
            <Text>
                Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus
                mollis interdum. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </Text>
        </Box>
    );
};

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    private toggle = (): void => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    public render(): JSX.Element {
        return (
            <Box height="90vh" justifyContent="center" alignItems="center">
                <Box margin={trbl(48)}>
                    <Popover
                        isOpen={this.state.isOpen}
                        placement={this.props.placement}
                        fixed={this.props.fixed}
                        offset={this.props.offset}
                        distance={this.props.distance}
                        renderContent={(): JSX.Element => <DemoContent />}
                    >
                        <Button variant="primary" title="Toggle" action={this.toggle} />
                    </Popover>
                </Box>
            </Box>
        );
    }
}

storiesOf('Popover', module)
    .add('Default', () => (
        /* tslint:disable */
        <Demo
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
                    'bottom',
                ) as PlacementType
            }
            fixed={boolean('fixed', false)}
            offset={number('offset', 0)}
            distance={number('distance', 16)}
        />
        /* tslint:enable */
    ))
    .add('Internal state on hover', () => (
        <Box height="90vh" justifyContent="center" alignItems="center">
            <Box margin={trbl(48)}>
                <Popover
                    triggerOn={'hover'}
                    renderContent={(): JSX.Element => <DemoContent />}
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
                            'bottom',
                        ) as PlacementType
                    }
                    fixed={boolean('fixed', false)}
                    offset={number('offset', 0)}
                    distance={number('distance', 16)}
                >
                    <Button variant="primary" title="Hover over me" />
                </Popover>
            </Box>
        </Box>
    ))
    .add('Internal state on click', () => (
        <Box height="90vh" justifyContent="center" alignItems="center">
            <Box margin={trbl(48)}>
                <Popover
                    triggerOn={'click'}
                    renderContent={(): JSX.Element => <DemoContent />}
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
                            'bottom',
                        ) as PlacementType
                    }
                    fixed={boolean('fixed', false)}
                    offset={number('offset', 0)}
                    distance={number('distance', 16)}
                >
                    <Button variant="primary" title="Toggle" />
                </Popover>
            </Box>
        </Box>
    ));
