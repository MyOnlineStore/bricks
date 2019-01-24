import React, { Component } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import StyledFoldOut from './style';

type ContentProps = {
    contentHeight?: StateType['contentHeight'];
    isOpen: PropsType['open'];
};

type StateType = {
    contentHeight?: number;
};

type PropsType = {
    open: boolean;
};

class FoldOut extends Component<PropsType, StateType> {
    private contentRef: HTMLDivElement;
    private resizeObserver: ResizeObserver;

    public constructor(props: PropsType) {
        super(props);

        this.state = {
            contentHeight: undefined,
        };

        try {
            this.resizeObserver = new ResizeObserver(
                (entries: Array<ResizeObserverEntry>): void => {
                    entries.forEach(
                        (entry: ResizeObserverEntry): void => {
                            this.setState({
                                contentHeight: entry.contentRect.height,
                            });
                        },
                    );
                },
            );
        } catch (error) {
            console.warn(`
                ResizeObserver is not available in this environment.
                 Folding animation will be unavailable. Fallback used.
            `);
        }
    }

    public componentDidMount(): void {
        try {
            this.resizeObserver.observe(this.contentRef);
        } catch {
            // no-op when ResizeObserver is not available.
        }
    }

    public componentWillUnmount(): void {
        try {
            this.resizeObserver.unobserve(this.contentRef);
        } catch {
            // no-op when ResizeObserver is not available.
        }
    }

    public render(): JSX.Element {
        return (
            <StyledFoldOut isOpen={this.props.open} contentHeight={this.state.contentHeight}>
                <div
                    ref={(ref): void => {
                        this.contentRef = ref as HTMLDivElement;
                    }}
                >
                    {this.props.children}
                </div>
            </StyledFoldOut>
        );
    }
}

export default FoldOut;
export { ContentProps, StateType, PropsType };
