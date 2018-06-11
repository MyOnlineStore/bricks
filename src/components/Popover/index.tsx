import React, { StatelessComponent } from 'react';
import { Manager, Popper, PopperChildrenProps, Reference, ReferenceChildrenProps } from 'react-popper';
import TransitionAnimation from '../TransitionAnimation';
import { PopoverAnchor, PopoverArrow, PopoverBackground, PopoverContent, PopoverWindow } from './style';

type PlacementType = PopperChildrenProps['placement'];

type PropsType = {
    placement?: PlacementType;
    isOpen: boolean;
    fixed?: boolean;
    offset?: number;
    renderContent(): JSX.Element | string;
};

const Popover: StatelessComponent<PropsType> = (props): JSX.Element => {
    return (
        <>
            <Manager>
                <Reference>
                    {({ ref }: ReferenceChildrenProps): JSX.Element => (
                        <PopoverAnchor innerRef={ref}>{props.children}</PopoverAnchor>
                    )}
                </Reference>
                <TransitionAnimation show={props.isOpen} animation="fade">
                    <Popper
                        positionFixed={props.fixed !== undefined ? props.fixed : false}
                        placement={props.placement !== undefined ? props.placement : 'bottom'}
                        modifiers={{
                            offset: {
                                offset: props.offset !== undefined ? `0 ${props.offset}px` : '0 16px',
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
