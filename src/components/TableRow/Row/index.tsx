import { DraggableProvidedDraggableProps } from 'react-beautiful-dnd';
import { ContrastThemeProvider } from '../../Contrast';
import React, { SFC } from 'react';
import StyledRow from '../style';

type PropsType = {
    draggableProps?: DraggableProvidedDraggableProps;
    draggable?: boolean;
    focus?: boolean;
    header?: boolean;
    hasHover?: boolean;
    innerRef?(ref: HTMLTableRowElement): void;
    onMouseEnter?(): void;
    onMouseLeave?(): void;
};

const Row: SFC<PropsType> = (props): JSX.Element => {
    /* tslint:disable:no-unbound-method */

    return (
        <ContrastThemeProvider enable={props.hasHover}>
            <StyledRow
                {...props.draggableProps}
                header={props.header}
                draggable={props.draggable}
                innerRef={props.innerRef}
                focus={props.focus}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                {props.children}
            </StyledRow>
        </ContrastThemeProvider>
    );
    /* tslint:enable:no-unbound-method */
};

export default Row;
export { PropsType };
