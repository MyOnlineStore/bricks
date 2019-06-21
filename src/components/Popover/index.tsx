import React, { FC, useState, useEffect, useRef } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import TransitionAnimation from '../TransitionAnimation';
import { PopoverAnchor, PopoverArrow, PopoverBackground, PopoverContent, PopoverWindow } from './style';

type PlacementType = PopperChildrenProps['placement'];

type PropsType = {
    placement?: PlacementType;
    show?: boolean;
    fixed?: boolean;
    offset?: number;
    distance?: number;
    stretch?: boolean;
    preventOverflow?: boolean;
    triggerOn?: 'click' | 'hover';
    onClickOutside?(): void;
    renderContent(): JSX.Element | string;
};

const Popover: FC<PropsType> = props => {
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setOpen] = useState(!!props.show);

    const mapOffset = (props: PropsType): string => {
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

    const handleKeyDown = (event: KeyboardEvent) => {
        if (isOpen && (event.key === 'Escape' || event.key === 'Esc') && props.triggerOn !== undefined) {
            setOpen(!isOpen);
        }
    };

    const handleToggleInside = (event: MouseEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as Node) && props.triggerOn !== undefined) {
            setOpen(!isOpen);
        }
    };

    const handleClickOutside = (event: KeyboardEvent) => {
        const anchorNode = anchorRef.current;
        const popoverNode = popoverRef.current;

        if (
            anchorNode !== null &&
            !anchorNode.contains(event.target as Node) &&
            popoverNode !== null &&
            !popoverNode.contains(event.target as Node)
        ) {
            if (props.onClickOutside !== undefined) props.onClickOutside();
            if (props.triggerOn !== undefined) setOpen(!isOpen);
        }
    };

    const handleMouseToggle = (event: MouseEvent, value: boolean) => {
        const anchorNode = anchorRef.current;
        const popoverNode = popoverRef.current;
        if (
            (anchorNode !== null && anchorNode.contains(event.target as Node)) ||
            (popoverNode !== null && popoverNode.contains(event.target as Node))
        )
            setOpen(value);
    };

    useEffect(() => {
        const node = anchorRef.current;

        if (node && props.triggerOn === 'hover') {
            node.addEventListener('mouseenter', e => handleMouseToggle(e, true));
            node.addEventListener('mouseleave', e => handleMouseToggle(e, false));

            return () => {
                node.removeEventListener('mouseenter', e => handleMouseToggle(e, true));
                node.removeEventListener('mouseleave', e => handleMouseToggle(e, false));
            };
        }
    }, [anchorRef.current]);

    useEffect(() => {
        document.addEventListener(props.triggerOn === 'click' ? 'click' : 'mouseenter', handleToggleInside);
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener(props.triggerOn === 'click' ? 'click' : 'mouseenter', handleToggleInside);
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <Manager>
            <Reference>
                {({ ref }: ReferenceChildrenProps): JSX.Element => (
                    <div ref={anchorRef}>
                        <PopoverAnchor
                            ref={ref}
                            stretch={props.stretch}
                            role="button"
                            aria-expanded={props.show !== undefined ? props.show : isOpen}
                        >
                            {props.children}
                        </PopoverAnchor>
                    </div>
                )}
            </Reference>
            <TransitionAnimation show={props.show !== undefined ? props.show : isOpen} animation="fade">
                <div ref={popoverRef}>
                    <Popper
                        positionFixed={!!props.fixed}
                        placement={props.placement !== undefined ? props.placement : 'bottom'}
                        modifiers={{
                            offset: { offset: mapOffset(props) },
                            flip: { enabled: false },
                            preventOverflow: {
                                enabled: props.preventOverflow !== undefined ? props.preventOverflow : true,
                            },
                        }}
                    >
                        {({ ref, style, placement, arrowProps }: PopperChildrenProps): JSX.Element => (
                            <PopoverWindow ref={ref} style={style}>
                                <PopoverContent>{props.renderContent()}</PopoverContent>
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
};

export default Popover;
export { PropsType, PlacementType };
