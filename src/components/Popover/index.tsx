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

/**
 * Tooltip component that is positioned around the component it wraps.
 * This component is based on react-popper, a wrapper around popper.js
 * [reference](https://github.com/FezVrasta/react-popper)
 *
 * @param renderContent
 * Mandatory prop that contains the contents of the tooltip
 * @param placement
 * Defines the location of the tooltip (optional)
 * @param show
 * Enables you to manage the visibility of the tooltip
 * @param fixed
 * Enable to use the fixed position strategy to position the tooltip
 * @param offset
 * Offset the tooltip content-block horzontal or vertical relative to the wrapper element
 * @param distance
 * Used to set the distance between the wrapper element and the tooltip
 * @param stretch
 * Used to strech the anchor of the tooltip. By enabling this the anchor grows to the size of the parent of the wrapped component
 * @param preventOverflow
 * This is used to prevent the tooltip from being positioned outside the boundary
 * [reference](https://popper.js.org/popper-documentation.html#modifiers..preventOverflow)
 * @param triggerOn
 * Used to set they way the tooltip is triggered. Can't be used together with show prop.
 * @param onClickOutside
 * Function triggered when the user clicks outside of the tooltip.
 */
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
        ) {
            setOpen(value);
        }
    };

    useEffect(() => {
        const node = anchorRef.current;

        if (node && props.triggerOn === 'hover') {
            const mouseEnter = (event: MouseEvent) => handleMouseToggle(event, true);
            const mouseLeave = (event: MouseEvent) => handleMouseToggle(event, false);

            node.addEventListener('mouseenter', mouseEnter);

            node.addEventListener('mouseleave', mouseLeave);

            return () => {
                node.removeEventListener('mouseenter', mouseEnter);
                node.removeEventListener('mouseleave', mouseLeave);
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
