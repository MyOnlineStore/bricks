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
    overflow?: boolean;
    positionFixed?: boolean;
    triggerOn?: 'click' | 'hover';
    onClickOutside?(): void;
    renderContent(): JSX.Element | string;
};

const Popover: FC<PropsType> = props => {
    const [isOpen, setOpen] = useState(!!props.show);
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const popoverRef = useRef<HTMLDivElement | null>(null);

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
        if (isOpen && (event.key === 'Escape' || event.key === 'Esc')) {
            setOpen(!isOpen);
        }
    };

    const toggleInside = (event: KeyboardEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
            setOpen(!isOpen);
        }
    };

    const toggleOutside = (event: KeyboardEvent) => {
        const anchorNode = anchorRef.current;
        const popoverNode = popoverRef.current;

        if (
            anchorNode !== null &&
            !anchorNode.contains(event.target as Node) &&
            popoverNode !== null &&
            !popoverNode.contains(event.target as Node)
        ) {
            console.log('[toggleOutside');
            setOpen(!isOpen);
        }
    };

    const handleMouseOver = () => setOpen(true);
    const handleMouseOut = () => setOpen(false);

    useEffect(() => {
        const node = anchorRef.current;
        if (node && props.triggerOn === 'hover') {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);

            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, [anchorRef.current]); // Recall only if ref changes

    useEffect(() => {
        document.addEventListener(props.triggerOn === 'click' ? 'click' : 'mouseenter', toggleInside);
        document.addEventListener('mousedown', toggleOutside);
        document.addEventListener('keydown', (event: KeyboardEvent) => handleKeyDown(event));

        return () => {
            document.removeEventListener(props.triggerOn === 'click' ? 'click' : 'mouseenter', toggleInside);
            document.removeEventListener('mousedown', toggleOutside);
            document.removeEventListener('keydown', (event: KeyboardEvent) => handleKeyDown(event));
        };
    });

    console.log('isOpen', isOpen);

    return (
        <Manager>
            <Reference>
                {({ ref }: ReferenceChildrenProps): JSX.Element => (
                    <div ref={anchorRef}>
                        <PopoverAnchor ref={ref} stretch={props.stretch} role="button" aria-expanded={isOpen}>
                            {props.children}
                        </PopoverAnchor>
                    </div>
                )}
            </Reference>
            <TransitionAnimation show={isOpen} animation="fade">
                <div ref={popoverRef}>
                    <Popper
                        positionFixed={true}
                        placement={props.placement !== undefined ? props.placement : 'bottom'}
                        modifiers={{
                            offset: { offset: mapOffset(props) },
                            flip: { enabled: false },
                            preventOverflow: { enabled: !props.overflow },
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
