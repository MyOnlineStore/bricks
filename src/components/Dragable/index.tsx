import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

type StateType = {
    items: Array<{ id: string; content: string }>;
};
type PropsType = {};

class Dragable extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            items: this.getItems(10),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    private getItems = (count: number): StateType['items'] => {
        return [
            {
                id: 'item-1',
                content: 'item 1',
            },
            {
                id: 'item-2',
                content: 'item 2',
            },
            {
                id: 'item-3',
                content: 'item 3',
            },
        ];
    };

    private onDragEnd = (result: DropResult): void => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = this.reorder(this.state.items, result.source.index, result.destination.index);

        this.setState({
            items,
        });
    };

    private reorder = (list: StateType['items'], startIndex: any, endIndex: any) => {
        const result = Array.apply(10);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    public render(): JSX.Element {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided): JSX.Element => (
                        <div ref={provided.innerRef}>
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided): JSX.Element => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Dragable;
export { PropsType, StateType };
