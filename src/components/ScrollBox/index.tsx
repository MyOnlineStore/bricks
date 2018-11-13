import React, { Component } from 'react';
import ScrollBar from 'simplebar';
import { StyledType } from '../../utility/_styled';
import StyledScrollBox, { StyledBottom, StyledTop, StyledWrapper } from './style';

type PropsType = StyledType & {
    autoHideScrollBar?: boolean;
    showInsetShadow?: boolean;
    onScroll?(eventData: {
        scrollTop: number;
        scrollBottom: number;
        scrollDirection: StateType['scrollDirection'];
    }): void;
};

type StateType = {
    scrollPosition: number;
    scrollDirection: 'up' | 'down' | 'idle';
    showInsetShadow: boolean;
};

class ScrollBox extends Component<PropsType, StateType> {
    private scrollbar: ScrollBar;
    private contentRef: HTMLDivElement | null;

    public constructor(props: PropsType) {
        super(props);

        this.state = {
            scrollPosition: 0,
            scrollDirection: 'idle',
            showInsetShadow: false,
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
            showInsetShadow: this.hasOverflow(),
            scrollPosition: element.scrollTop,
            scrollDirection: direction,
        });
    };

    private hasOverflow = (): boolean => {
        const element = this.scrollbar.getScrollElement();
        const contentElement = this.scrollbar.getContentElement();

        return (element as HTMLDivElement).offsetHeight < (contentElement as HTMLDivElement).offsetHeight;
    };

    public componentDidMount(): void {
        this.scrollbar = new ScrollBar(this.contentRef as HTMLDivElement, {
            autoHide: this.props.autoHideScrollBar !== undefined ? this.props.autoHideScrollBar : true,
        });

        this.scrollbar.getScrollElement().addEventListener('scroll', this.handleScroll);

        this.setState({
            showInsetShadow: this.hasOverflow(),
        });
    }

    public componentWillUnmount(): void {
        this.scrollbar.getScrollElement().removeEventListener('scroll', this.handleScroll);
    }

    public render(): JSX.Element {
        return (
            <StyledWrapper>
                <StyledScrollBox
                    innerRef={(ref): void => {
                        this.contentRef = ref;
                    }}
                >
                    {this.props.showInsetShadow !== false && (
                        <StyledTop show={this.state.showInsetShadow && this.state.scrollDirection === 'down'} />
                    )}
                    {this.props.children}
                    {this.props.showInsetShadow !== false && (
                        <StyledBottom show={this.state.showInsetShadow && this.state.scrollDirection !== 'down'} />
                    )}
                </StyledScrollBox>
            </StyledWrapper>
        );
    }
}

export default ScrollBox;
export { StateType, PropsType };
