import React, { Component, createRef, RefObject } from 'react';
import ScrollBar from 'simplebar';
import 'simplebar/dist/simplebar.css';
import { StyledType } from '../../utility/styled';
import { StyledBottom, StyledTop } from './ScrollBox.style';

type PropsType = StyledType & {
    maxHeight: number;
    showInsetShadow?: boolean;
    autoHideScrollBar?: boolean;
    onScroll?(eventData: {
        scrollTop: number;
        scrollBottom: number;
        scrollDirection: StateType['scrollDirection'];
    }): void;
};

type StateType = {
    scrollPosition: number;
    scrollDirection: 'up' | 'down';
};

class ScrollBox extends Component<PropsType, StateType> {
    private scrollbar: ScrollBar;
    private contentRef: RefObject<HTMLDivElement>;

    public constructor(props: PropsType) {
        super(props);
        this.contentRef = createRef();

        this.state = {
            scrollPosition: 0,
            scrollDirection: 'up',
        };
    }

    private handleScroll = (): void => {
        const element = this.scrollbar.getScrollElement();

        const contentElement = this.scrollbar.getContentElement();

        const direction =
            this.state.scrollPosition >= element.scrollTop ? 'up' : 'down';

        const scrollBottom =
            (contentElement as HTMLDivElement).offsetHeight -
            element.scrollTop -
            (element as HTMLDivElement).offsetHeight;

        if (this.props.onScroll !== undefined) {
            this.props.onScroll({
                scrollTop: element.scrollTop,
                scrollBottom,
                scrollDirection: direction,
            });
        }

        this.setState({
            scrollPosition: element.scrollTop,
            scrollDirection: direction,
        });
    };

    public componentDidMount(): void {
        this.scrollbar = new ScrollBar(
            this.contentRef.current as HTMLDivElement,
            {
                autoHide:
                    this.props.autoHideScrollBar !== undefined
                        ? this.props.autoHideScrollBar
                        : true,
            },
        );

        this.scrollbar
            .getScrollElement()
            .addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount(): void {
        this.scrollbar
            .getScrollElement()
            .removeEventListener('scroll', this.handleScroll);
    }

    public render(): JSX.Element {
        return (
            <div className={this.props.className}>
                {this.props.showInsetShadow === true &&
                this.state.scrollDirection === 'down' ? (
                    <StyledTop />
                ) : (
                    undefined
                )}
                <div ref={this.contentRef}>{this.props.children}</div>
                {this.props.showInsetShadow === true &&
                this.state.scrollDirection === 'up' ? (
                    <StyledBottom />
                ) : (
                    undefined
                )}
            </div>
        );
    }
}

export default ScrollBox;
export { StateType, PropsType };
