import React, { Component } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import TransitionAnimation from '../TransitionAnimation';
import { PopoverAnchor, PopoverArrow, PopoverBackground, PopoverContent, PopoverWindow } from './style';
// import { createPortal } from 'react-dom';

type PlacementType = PopperChildrenProps['placement'];

type PropsType = {
    placement?: PlacementType;
    show?: boolean;
    fixed?: boolean;
    offset?: number;
    distance?: number;
    stretch?: boolean;
    overflow?: boolean;
    positionFixed?: boolean;
    triggerOn?: 'click' | 'hover';
    onClickOutside?(): void;
    renderContent(): JSX.Element | string;
};

type StateType = {
    isOpen: boolean;
};

class Popover extends Component<PropsType, StateType> {
    // const Popover:FC<PropsType> = props => {
    private anchorRef: HTMLDivElement;
    private popoverRef: HTMLDivElement;

    public constructor(props: PropsType) {
        super(props);

        this.state = { isOpen: false };
    }

    public static getDerivedStateFromProps(props: PropsType, state: StateType): Partial<StateType> {
        if (props.show !== undefined && props.show !== state.isOpen) {
            return { isOpen: props.show };
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
            if (this.props.onClickOutside !== undefined) this.props.onClickOutside();
            else this.togglePopover();
        }
    };

    private handleKeyDown = (event: KeyboardEvent): void => {
        if (this.state.isOpen && (event.key === 'Escape' || event.key === 'Esc')) {
            this.togglePopover();
        }
    };

    public componentDidMount(): void {
        if (this.props.show === undefined && this.anchorRef) {
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
        document.addEventListener('keydown', (event: KeyboardEvent) => this.handleKeyDown(event), false);
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

        document.removeEventListener('mousedown', this.handleClickOutside, false);
        document.removeEventListener('keydown', (event: KeyboardEvent) => this.handleKeyDown(event), false);
    }

    public render(): JSX.Element {
        // const body = document.getElementsByTagName('BODY')[0];
        return (
            <Manager>
                <Reference>
                    {({ ref }: ReferenceChildrenProps): JSX.Element => (
                        <div
                            ref={(ref): void => {
                                if (ref) this.anchorRef = ref;
                            }}
                        >
                            <PopoverAnchor
                                ref={ref}
                                stretch={this.props.stretch}
                                role="button"
                                aria-expanded={this.state.isOpen}
                            >
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
                            positionFixed={true}
                            placement={this.props.placement !== undefined ? this.props.placement : 'bottom'}
                            modifiers={{
                                offset: { offset: this.mapOffset(this.props) },
                                flip: { enabled: false },
                                preventOverflow: { enabled: !this.props.overflow },
                            }}
                        >
                            {({ ref, style, placement, arrowProps }: PopperChildrenProps): JSX.Element => (
                                <PopoverWindow ref={ref} style={style}>
                                    <PopoverContent>{this.props.renderContent()}</PopoverContent>
                                    <PopoverBackground />
                                    <PopoverArrow ref={arrowProps.ref} style={arrowProps.style} placement={placement} />
                                    <PopoverArrow shadow style={arrowProps.style} placement={placement} />
                                </PopoverWindow>
                            )}
                        </Popper>
                    </div>
                </TransitionAnimation>
            </Manager>
        );
    }
}

export default Popover;
export { PropsType, PlacementType };
