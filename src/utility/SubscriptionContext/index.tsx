import React, { createContext, Context, SFC, Consumer } from 'react';

type StateType = {
    test: string;
};

type ContextType = {
    state: StateType;
    subscribe: SubscribeType;
    unsubscribe: SubscribeType;
};

type CallbackType = () => void;
type SubscribeType = (callback: CallbackType) => void;

class SubscriptionContext {
    private subscriptions: Array<CallbackType>;
    private state: StateType;

    public constructor() {
        this.state = {
            test: 'construction',
        };
    }

    public subscribe = (callback: CallbackType): void => {
        this.subscriptions.push(callback);
    };

    public unsubscribe = (callback: CallbackType): void => {
        this.subscriptions = this.subscriptions.filter(item => item !== callback);
    };
}

export default SubscriptionContext;
export { ContextType, CallbackType, SubscribeType, StateType };
