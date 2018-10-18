import React, { Component } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import TransitionAnimation from '../TransitionAnimation';
import { PopoverAnchor, PopoverArrow, PopoverBackground, PopoverContent, PopoverWindow } from './style';

type PlacementType = PopperChildrenProps['placement'];

type PropsType = {
    placement?: PlacementType;
    isOpen?: boolean;
    fixed?: boolean;
    offset?: number;
    distance?: number;
    stretch?: boolean;
    triggerOn?: 'click' | 'hover';
    renderContent(): JSX.Element | string;
};

type StateType = {
    isOpen: boolean;
};

class Popover extends Component<PropsType, StateType> {
    private anchorRef: HTMLDivElement;
    private popoverRef: HTMLDivElement;

    public constructor(props: PropsType) {
        super(props);

        this.state = { isOpen: false };
    }

    public static getDerivedStateFromProps(props: PropsType, state: StateType): Partial<StateType> {
        if (props.isOpen !== undefined && props.isOpen !== state.isOpen) {
            return { isOpen: props.isOpen };
        }

        return state;
    }

    private mapOffset = (props: PropsType): string => {
        switch (true) {
            case props.offset === undefined && props.distance === undefined:
                return '0, 16px';
            case props.offset !== undefined && props.distance === undefined:
                return `${props.offset}px, 16px`;
            case props.offset === undefined && props.distance !== undefined:
                return `0, ${props.distance}px`;
            default:
                return `${props.offset}px, ${props.distance}px`;
        }
    };

    private togglePopover = (): void => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    private handleClickOutside = (event: Event): void => {
        if (
            this.popoverRef &&
            this.state.isOpen &&
            this.anchorRef &&
            !this.anchorRef.contains(event.target as Node) &&
            !this.popoverRef.contains(event.target as Node)
        ) {
            this.togglePopover();
        }
    };

    public componentDidMount(): void {
        if (this.props.isOpen === undefined && this.anchorRef) {
            this.anchorRef.addEventListener(
                this.props.triggerOn === 'click' ? 'click' : 'mouseenter',
                this.togglePopover,
                false,
            );
            if (this.props.triggerOn === 'hover') {
                this.anchorRef.addEventListener('mouseleave', this.togglePopover, false);
            }
        }

        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    public componentWillUnmount(): void {
        this.anchorRef.removeEventListener(
            this.props.triggerOn === 'click' ? 'click' : 'mouseenter',
            this.togglePopover,
            false,
        );
        if (this.props.triggerOn === 'hover') {
            this.anchorRef.removeEventListener('mouseleave', this.togglePopover, false);
        }
    }

    public render(): JSX.Element {
        return (
            <>
                <Manager>
                    <Reference>
                        {({ ref }: ReferenceChildrenProps): JSX.Element => (
                            <div
                                ref={(ref): void => {
                                    if (ref) this.anchorRef = ref;
                                }}
                            >
                                <PopoverAnchor innerRef={ref} stretch={this.props.stretch}>
                                    {this.props.children}
                                </PopoverAnchor>
                            </div>
                        )}
                    </Reference>
                    <TransitionAnimation show={this.state.isOpen} animation="fade">
                        <div
                            ref={(ref): void => {
                                if (ref) this.popoverRef = ref;
                            }}
                        >
                            <Popper
                                positionFixed={this.props.fixed !== undefined ? this.props.fixed : false}
                                placement={this.props.placement !== undefined ? this.props.placement : 'bottom'}
                                modifiers={{
                                    offset: {
                                        offset: this.mapOffset(this.props),
                                    },
                                    flip: {
                                        enabled: false,
                                    },
                                }}
                            >
                                {({ ref, style, placement, arrowProps }: PopperChildrenProps): JSX.Element => (
                                    <PopoverWindow innerRef={ref} style={style}>
                                        <PopoverContent>{this.props.renderContent()}</PopoverContent>
                                        <PopoverBackground />
                                        <PopoverArrow
                                            innerRef={arrowProps.ref}
                                            style={arrowProps.style}
                                            placement={placement}
                                        />
                                        <PopoverArrow shadow style={arrowProps.style} placement={placement} />
                                    </PopoverWindow>
                                )}
                            </Popper>
                        </div>
                    </TransitionAnimation>
                </Manager>
            </>
        );
    }
}

export default Popover;
export { PropsType, PlacementType };
