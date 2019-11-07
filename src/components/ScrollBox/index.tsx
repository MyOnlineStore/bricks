import React, { FC, forwardRef, Ref, ReactNode, useState, useRef, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import StyledWrapper, { StyledTop, StyledBottom } from './style';

type PropsType = {
    autoHideScrollBar?: boolean;
    showInsetShadow?: boolean;
    scrollRef?: Ref<Element>;
    children?: ReactNode;
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

const ScrollBox: FC<PropsType> = props => {
    const scrollbar = useRef<any>();
    const [scrollBarState, setScrollBarState] = useState<StateType>({
        scrollDirection: 'idle',
        scrollPosition: 0,
        showInsetShadow: false,
    });

    const hasOverflow = (): boolean => {
        if (scrollbar && scrollbar.current) {
            const element = scrollbar.current.getScrollElement();
            const contentElement = scrollbar.current.getContentElement();

            return (element as HTMLDivElement).offsetHeight < (contentElement as HTMLDivElement).offsetHeight;
        }

        return false;
    };

    const handleScroll = () => {
        if (scrollbar && scrollbar.current) {
            const element = scrollbar.current.getScrollElement();
            const contentElement = scrollbar.current.getContentElement();
            const direction = scrollBarState.scrollPosition >= element.scrollTop ? 'up' : 'down';

            const scrollBottom =
                (contentElement as HTMLDivElement).offsetHeight -
                element.scrollTop -
                (element as HTMLDivElement).offsetHeight;

            if (props.onScroll !== undefined) {
                props.onScroll({
                    scrollTop: element.scrollTop,
                    scrollBottom,
                    scrollDirection: direction,
                });
            }

            setScrollBarState({
                showInsetShadow: hasOverflow(),
                scrollPosition: element.scrollTop,
                scrollDirection: direction,
            });
        }
    };

    useEffect(() => {
        if (scrollbar && scrollbar.current) {
            scrollbar.current.getScrollElement().addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollbar && scrollbar.current) {
                scrollbar.current.getScrollElement().removeEventListener('scroll', handleScroll);
            }
        };
    });

    return (
        <StyledWrapper>
            {props.showInsetShadow !== false && (
                <StyledTop show={scrollBarState.showInsetShadow && scrollBarState.scrollDirection === 'down'} />
            )}
            <SimpleBar
                ref={scrollbar}
                scrollableNodeProps={{ ref: props.scrollRef }}
                options={{ autoHide: props.autoHideScrollBar }}
            >
                {props.children}
            </SimpleBar>
            {props.showInsetShadow !== false && (
                <StyledBottom show={scrollBarState.showInsetShadow && scrollBarState.scrollDirection !== 'down'} />
            )}
        </StyledWrapper>
    );
};

export default forwardRef<Element, PropsType>((props, ref) => <ScrollBox scrollRef={ref} {...props} />);
export { StateType, PropsType };
