import React, { Component } from 'react';
import Toast, { PropsType as ToastPropsType } from '../Toast';
import { createPortal } from 'react-dom';

type ToastType = Pick<ToastPropsType, Exclude<keyof ToastPropsType, 'show'>>;

// tslint:disable-next-line:no-any
type MetaType = any;

type PropsType = {
    portalId?: string;
    /**
     * This callback can be used to respond to calls of toaster.notify, An example
     *  would be to log an error every time a toast is shown with severity "error"
     *
     * @example
     * ```
     * <Toaster
     *     onNotify={(toaster, meta) => {
     *         if (toaster.severity === 'error') {
     *             log(meta);
     *         }
     *     }}
     * />
     *
     * window.toaster.notify({
     *     severity: 'error',
     *     title: 'Something went wrong',
     * }, 'Some error');
     * ```
     */
    onNotify?(toast: ToastType, meta?: MetaType): void;
};

type StateType = {
    toasts: Array<ToastType & { id: number; isOpen: boolean }>;
};

declare global {
    interface Window {
        toaster: {
            notify(toast: ToastType, meta?: MetaType): void;
        };
    }
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

    public notify = (toast: ToastType, meta?: MetaType): void => {
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

        if (this.props.onNotify) {
            this.props.onNotify(toast, meta);
        }
    };

    public render(): JSX.Element {
        const toasts = (
            <>
                {this.state.toasts.map(toast => {
                    const { id, onClose, ...toastProps } = toast;
                    const autoDismiss = toastProps.severity !== 'error';

                    return (
                        <Toast
                            key={toast.id}
                            autoDismiss={autoDismiss}
                            show={toast.isOpen}
                            {...toastProps}
                            onExited={(): void => this.removeToast(toast.id)}
                            onClose={(): void => {
                                if (onClose !== undefined) onClose();
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
