import { storiesOf } from '@storybook/react';
import React, { Component, ReactNode } from 'react';
import DataCard from '.';
import { Button, Icon, Badge } from '../..';

type StateType = {
    rows: Array<{ id: string; checked?: boolean; cells: Array<ReactNode> }>;
};

type PropsType = {};

const actions = (
    <>
        <Button title="edit" flat compact variant="secondary">
            <Icon icon="pencil" size="medium" />
        </Button>
        <Button title="delete" flat compact variant="destructive">
            <Icon icon="trash" size="medium" />
        </Button>
    </>
);

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            rows: [
                {
                    id: 'article-1',
                    checked: true,
                    cells: [
                        <img key="img" src="https://www.stevensegallery.com/100/100" />,
                        'Tijger | dubbelzijdig',
                        '€ 1,85',
                        'Onbeperkt',
                        'Mis deze waanzinnige actie niet!',
                        actions,
                    ],
                },
                {
                    id: 'article-2',
                    checked: false,
                    cells: [
                        <img key="img" src="https://www.stevensegallery.com/100/100" />,
                        'Een fijne avondmaaltijd',
                        '€ 19,95',
                        <Badge key="s" severity="info">
                            1 stuks
                        </Badge>,
                        undefined,
                        actions,
                    ],
                },
                {
                    id: 'article-3',
                    checked: true,
                    cells: [
                        <img key="img" src="https://www.stevensegallery.com/100/100" />,
                        'USB om rusland mee af te luisteren',
                        '€ 39,00',
                        undefined,
                        undefined,
                        actions,
                    ],
                },
                {
                    id: 'article-4',
                    checked: false,
                    cells: [
                        <img key="img" src="https://www.stevensegallery.com/100/100" />,
                        'Een hele bijzondere klok voor de tijd te lezen maar eigenlijk is het gewoon stiekem een telefoon',
                        '€ 2,45',
                        <Badge key="s" severity="error">
                            0 stuks
                        </Badge>,
                        undefined,
                        actions,
                    ],
                },
            ],
        };
    }

    public render(): JSX.Element {
        return <DataCard rows={this.state.rows} headers={['Afbeelding', 'Artikel', 'Prijs', 'Voorraad', 'Sticker']} />;
    }
}

storiesOf('DataCard', module).add('Default', () => {
    return <Demo />;
});
