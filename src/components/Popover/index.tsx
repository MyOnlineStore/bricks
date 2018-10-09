import React, { SFC } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import TransitionAnimation from '../TransitionAnimation';
import { PopoverAnchor, PopoverArrow, PopoverBackground, PopoverContent, PopoverWindow } from './style';

type PlacementType = PopperChildrenProps['placement'];

type PropsType = {
    placement?: PlacementType;
    isOpen: boolean;
    fixed?: boolean;
    offset?: number;
    distance?: number;
    stretch?: boolean;
    renderContent(): JSX.Element | string;
};

const Popover: SFC<PropsType> = (props): JSX.Element => {
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

    return (
        <>
            <Manager>
                <Reference>
                    {({ ref }: ReferenceChildrenProps): JSX.Element => (
                        <PopoverAnchor innerRef={ref} stretch={props.stretch}>
                            {props.children}
                        </PopoverAnchor>
                    )}
                </Reference>
                <TransitionAnimation show={props.isOpen} animation="fade">
                    <Popper
                        positionFixed={props.fixed !== undefined ? props.fixed : false}
                        placement={props.placement !== undefined ? props.placement : 'bottom'}
                        modifiers={{
                            offset: {
                                offset: mapOffset(props),
                            },
                            flip: {
                                enabled: false,
                            },
                        }}
                    >
                        {({ ref, style, placement, arrowProps }: PopperChildrenProps): JSX.Element => (
                            <PopoverWindow innerRef={ref} style={style}>
                                <PopoverContent>{props.renderContent()}</PopoverContent>
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
                </TransitionAnimation>
            </Manager>
        </>
    );
};

export default Popover;
export { PropsType, PlacementType };
