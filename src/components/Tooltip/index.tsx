import React, { FC, useState, useEffect, useRef } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import TransitionAnimation from '../TransitionAnimation';
import Text from '../Text';
import { TooltipAnchor, TooltipArrow, TooltipBackground, TooltipContent } from './style';

type PlacementType = PopperChildrenProps['placement'];

type PropsType = {
    show?: boolean;
    text: string;
    triggerOn?: 'click' | 'hover';
    onClickOutside?(): void;
};

/**
 * Tooltip component that is positioned around the component it wraps.
 * This component is based on react-popper, a wrapper around popper.js
 * [reference](https://github.com/FezVrasta/react-popper)
 *
 * @param show
 * Enables you to manage the visibility of the tooltip
 * @param text
 * Mandatory prop that contains the contents of the tooltip
 * @param triggerOn
 * Used to set they way the tooltip is triggered. Can't be used together with show prop.
 * @param onClickOutside
 * Function triggered when the user clicks outside of the tooltip.
 */
const Tooltip: FC<PropsType> = props => {
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setOpen] = useState(!!props.show);

    const handleKeyDown = (event: KeyboardEvent) => {
        if ((props.show !== undefined || isOpen) && (event.key === 'Escape' || event.key === 'Esc')) {
            setOpen(!isOpen);
            if (props.onClickOutside) props.onClickOutside();
        }
    };

    const handleTouch = (event: TouchEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
            setOpen(true);
        } else {
            setOpen(false);
            if (props.onClickOutside) props.onClickOutside();
        }
    };

    const handleMouse = (event: MouseEvent, value: boolean) => {
        const anchorNode = anchorRef.current;
        const tooltipNode = tooltipRef.current;

        if (
            (anchorNode !== null && anchorNode.contains(event.target as Node)) ||
            (tooltipNode !== null && tooltipNode.contains(event.target as Node))
        ) {
            setOpen(value);
        }
    };

    const handleClick = (event: MouseEvent) => {
        const anchorNode = anchorRef.current;
        const tooltipNode = tooltipRef.current;

        if (
            anchorNode !== null &&
            !anchorNode.contains(event.target as Node) &&
            tooltipNode !== null &&
            !tooltipNode.contains(event.target as Node)
        ) {
            if (props.triggerOn === 'click') setOpen(false);
            if (props.onClickOutside !== undefined) props.onClickOutside();
        } else if (
            (anchorNode !== null && anchorNode.contains(event.target as Node)) ||
            (tooltipNode !== null && tooltipNode.contains(event.target as Node))
        ) {
            if (props.triggerOn === 'click') setOpen(true);
        }
    };

    useEffect(() => {
        const node = anchorRef.current;

        if (node && props.triggerOn !== 'click') {
            const show = (event: MouseEvent) => handleMouse(event, true);
            const hide = (event: MouseEvent) => handleMouse(event, false);

            node.addEventListener('mouseenter', show);
            node.addEventListener('mouseleave', hide);

            return () => {
                node.removeEventListener('mouseenter', show);
                node.removeEventListener('mouseleave', hide);
            };
        }
    }, [anchorRef.current]);

    useEffect(() => {
        document.addEventListener('touchEnd', handleTouch);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('touchEnd', handleTouch);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClick);
        };
    });

    return (
        <Manager>
            <Reference>
                {({ ref }: ReferenceChildrenProps): JSX.Element => (
                    <span ref={anchorRef} data-testid="tooltip-anchor-ref">
                        <TooltipAnchor
                            ref={ref}
                            role="button"
                            aria-expanded={props.show !== undefined ? props.show : isOpen}
                        >
                            {props.children}
                        </TooltipAnchor>
                    </span>
                )}
            </Reference>
            <TransitionAnimation show={props.show !== undefined ? props.show : isOpen} animation="fade">
                <div ref={tooltipRef}>
                    <Popper
                        positionFixed={true}
                        placement="bottom"
                        modifiers={{
                            offset: { offset: '0 12px' },
                            flip: { enabled: true },
                            preventOverflow: {
                                enabled: true,
                            },
                        }}
                    >
                        {({ ref, style, placement, arrowProps }: PopperChildrenProps): JSX.Element => (
                            <div ref={ref} style={style} data-testid="tooltip-anchor-window">
                                <TooltipContent>
                                    <Text>{props.text}</Text>
                                </TooltipContent>
                                <TooltipBackground />
                                <TooltipArrow ref={arrowProps.ref} style={arrowProps.style} placement={placement} />
                                <TooltipArrow shadow style={arrowProps.style} placement={placement} />
                            </div>
                        )}
                    </Popper>
                </div>
            </TransitionAnimation>
        </Manager>
    );
};

export default Tooltip;
export { PropsType, PlacementType };
