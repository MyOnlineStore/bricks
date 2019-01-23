import React, { Component } from 'react';
import Toast, { PropsType as ToastPropsType } from '../Toast';
import { createPortal } from 'react-dom';

type ToastType = Pick<ToastPropsType, Exclude<keyof ToastPropsType, 'isOpen'>>;

type PropsType = {
    portalId?: string;
};

type StateType = {
    toasts: Array<ToastType & { id: number; isOpen: boolean }>;
};

declare global {
    interface Window {
        toaster: {
            notify(toast: ToastType): void;
        };
    }
}

if (window) {
    window.toaster = {
        notify: (): void => {
            console.error(
                '[Bricks]: <Toaster /> not mounted yet. Make sure the Toaster is mounted before calling notify.',
            );
        },
    };
}

class Toaster extends Component<PropsType, StateType> {
    private static portalId: string = '__toaster-container';
    private toastId: number = 0;

    public constructor(props: PropsType) {
        super(props);

        this.state = {
            toasts: [],
        };
    }

    private closeToast = (id: number): void => {
        this.setState({
            toasts: this.state.toasts.map(toast => {
                if (toast.id === id) {
                    return {
                        ...toast,
                        isOpen: false,
                    };
                }

                return toast;
            }),
        });
    };

    private removeToast = (id: number): void => {
        this.setState({
            toasts: this.state.toasts.filter(toast => toast.id !== id),
        });
    };

    private getToastId = (): number => {
        this.toastId++;

        return this.toastId;
    };

    public componentDidMount(): void {
        window.toaster = {
            notify: this.notify,
        };
    }

    public notify = (toast: ToastType): void => {
        this.setState({
            toasts: [
                ...this.state.toasts,
                {
                    ...toast,
                    id: this.getToastId(),
                    isOpen: true,
                },
            ],
        });
    };

    public render(): JSX.Element {
        const toasts = (
            <>
                {this.state.toasts.map(toast => {
                    const { id, closeAction, ...toastProps } = toast;
                    const autoDismiss = toastProps.severity !== 'error';

                    return (
                        <Toast
                            key={toast.id}
                            autoDismiss={autoDismiss}
                            isOpen={toast.isOpen}
                            {...toastProps}
                            onExited={(): void => this.removeToast(toast.id)}
                            closeAction={(): void => {
                                if (closeAction !== undefined) closeAction();
                                this.closeToast(id);
                            }}
                        />
                    );
                })}
            </>
        );

        const portalId = this.props.portalId ? this.props.portalId : Toaster.portalId;
        const container = document.getElementById(portalId);

        if (!container) {
            const newContainer = document.createElement('div');

            newContainer.id = portalId;
            document.body.prepend(newContainer);

            return createPortal(toasts, newContainer);
        }

        return createPortal(toasts, container);
    }
}

export default Toaster;
