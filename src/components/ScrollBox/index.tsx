import React, { Component, createRef, RefObject } from 'react';
import ScrollBar from 'simplebar';
import 'simplebar/dist/simplebar.css';
import { StyledType } from '../../utility/styled';
import StyledScrollBox, { StyledBottom } from './style';

type PropsType = StyledType & {
    height?: number;
    showInsetShadow?: boolean;
    autoHideScrollBar?: boolean;
    onScroll?(eventData: {
        showInsetShadow?: boolean;
        scrollTop: number;
        scrollBottom: number;
        scrollDirection: StateType['scrollDirection'];
    }): void;
};

type StateType = {
    scrollPosition: number;
    scrollDirection: 'up' | 'down' | 'idle';
};

class ScrollBox extends Component<PropsType, StateType> {
    private scrollbar: ScrollBar;
    private contentRef: HTMLDivElement | null;

    public constructor(props: PropsType) {
        super(props);

        this.state = {
            scrollPosition: 0,
            scrollDirection: 'idle',
        };
    }

    private handleScroll = (): void => {
        const element = this.scrollbar.getScrollElement();
        const contentElement = this.scrollbar.getContentElement();
        const direction = this.state.scrollPosition >= element.scrollTop ? 'up' : 'down';

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
        this.scrollbar = new ScrollBar(this.contentRef as HTMLDivElement, {
            autoHide: this.props.autoHideScrollBar !== undefined ? this.props.autoHideScrollBar : true,
        });

        this.scrollbar.getScrollElement().addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount(): void {
        this.scrollbar.getScrollElement().removeEventListener('scroll', this.handleScroll);
    }

    public render(): JSX.Element {
        return (
            <StyledScrollBox
                innerRef={(ref): void => {
                    this.contentRef = ref;
                }}
            >
                {this.props.children}
                {this.props.showInsetShadow === true && this.state.scrollDirection === 'down' && <StyledBottom />}
            </StyledScrollBox>
        );
    }
}

export default ScrollBox;
export { StateType, PropsType };
