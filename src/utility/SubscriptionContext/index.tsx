import React, { Component, createContext, Consumer } from 'react';

/* tslint:disable */
type PayloadType = any;
/* tslint:enable */

type PropsType = {
    onUpdate?(items: StateType['items']): void;
};

type StateType = {
    items: Array<{ id: string; payload: PayloadType }>;
};

type ContextValue = {
    items: StateType['items'];
    update: SubscriptionProvider['update'];
    updateAll: SubscriptionProvider['updateAll'];
    remove: SubscriptionProvider['remove'];
    getPayload: SubscriptionProvider['getPayload'];
};

const { Consumer, Provider } = createContext(undefined as any);

const SubscriptionConsumer: Consumer<ContextValue> = Consumer;

class SubscriptionProvider extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            items: [],
        };
    }

    private updateAll = (payload: PayloadType): void => {
        this.setState({
            items: this.state.items.map(item => ({ ...item, payload })),
        });
    };

    private getPayload = (id: string): PayloadType => {
        const found = this.state.items.filter(item => item.id === id);

        if (found[0]) {
            return found[0].payload;
        }

        return undefined;
    };

    private update = (id: string, payload: PayloadType): void => {
        const isNew = this.state.items.reduce((found, item): boolean => {
            return item.id === id ? false : found;
        }, true);

        if (isNew) {
            this.setState(prevState => ({
                items: [...prevState.items, { id, payload }],
            }));
        } else {
            this.setState(prevState => ({
                items: prevState.items.map(item => (item.id === id ? { ...item, payload } : item)),
            }));
        }
    };

    private remove = (id: string): void => {
        this.setState(prevState => ({ items: prevState.items.filter(item => item.id !== id) }));
    };

    public componentDidUpdate(prevProps: PropsType, prevState: StateType): void {
        if (this.props.onUpdate !== undefined && JSON.stringify(prevState.items) !== JSON.stringify(this.state.items)) {
            this.props.onUpdate(this.state.items);
        }
    }

    public render(): JSX.Element {
        const contextValue = {
            items: this.state.items,
            update: this.update,
            updateAll: this.updateAll,
            remove: this.remove,
            getPayload: this.getPayload,
        };

        return <Provider value={contextValue}>{this.props.children}</Provider>;
    }
}

export { SubscriptionConsumer, SubscriptionProvider, PropsType, StateType, ContextValue, PayloadType, Consumer };
