import React, { FC, useState, useEffect, useRef } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import TransitionAnimation from '../TransitionAnimation';
import Text from '../Text';
import { TooltipAnchor, TooltipArrow, TooltipBackground, TooltipContent, TooltipWindow } from './style';

type PlacementType = PopperChildrenProps['placement'];

type PropsType = {
    text: string;
};

/**
 * Tooltip component that is positioned around the component it wraps.
 * This component is based on react-popper, a wrapper around popper.js
 * [reference](https://github.com/FezVrasta/react-popper)
 *
 * @param text
 * Mandatory prop that contains the contents of the tooltip
 */
const Tooltip: FC<PropsType> = props => {
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setOpen] = useState(false);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (isOpen && (event.key === 'Escape' || event.key === 'Esc')) {
            setOpen(!isOpen);
        }
    };

    const handleTouch = (event: TouchEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
            setOpen(true);
        } else {
            setOpen(false);
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

    useEffect(() => {
        const node = anchorRef.current;

        if (node) {
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

        return () => {
            document.removeEventListener('touchEnd', handleTouch);
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <Manager>
            <Reference>
                {({ ref }: ReferenceChildrenProps): JSX.Element => (
                    <span style={{ display: 'inline-block' }} ref={anchorRef}>
                        <TooltipAnchor ref={ref} role="button" aria-expanded={isOpen}>
                            {props.children}
                        </TooltipAnchor>
                    </span>
                )}
            </Reference>
            <TransitionAnimation show={isOpen} animation="fade">
                <div ref={tooltipRef}>
                    <Popper
                        placement="bottom"
                        modifiers={{
                            offset: { offset: '0 9px' },
                            flip: { enabled: false },
                            preventOverflow: {
                                enabled: true,
                            },
                        }}
                    >
                        {({ ref, style, placement, arrowProps }: PopperChildrenProps): JSX.Element => (
                            <TooltipWindow ref={ref} style={style}>
                                <TooltipContent>
                                    <Text>{props.text}</Text>
                                </TooltipContent>
                                <TooltipBackground />
                                <TooltipArrow ref={arrowProps.ref} style={arrowProps.style} placement={placement} />
                                <TooltipArrow shadow style={arrowProps.style} placement={placement} />
                            </TooltipWindow>
                        )}
                    </Popper>
                </div>
            </TransitionAnimation>
        </Manager>
    );
};

export default Tooltip;
export { PropsType, PlacementType };
