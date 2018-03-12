import React, {Component} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import FormItem from '../components/FormItem';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging
        ? "lightgreen"
        : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver
        ? "lightblue"
        : "lightgrey",
    padding: grid,
    width: '100%'
});

export default class DraggableImpl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.items.length !== this.props.items.length) {
            this.setState({items: this.props.items});
        }

        if (prevState.items.length !== this.state.items.length) {
            this
                .props
                .changeItems({details: this.state.items});
        }

        if (prevState.items.filter((item, index) => this.state.items[index].id !== item.id).length > 0) {
            this
                .props
                .changeItems({details: this.state.items});
        }
    }
    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const items = reorder(this.state.items, result.source.index, result.destination.index);
        this.setState({items});
    }

    changeItem = (item, index) => {
        const items = this.state.items;
        items[index] = item;

        this.setState({items});
    }

    deleteItem = (index) => {
        const items = this.state.items;
        items.splice(index, 1)
        this.setState({items: items});
    }

    render() {
        return (
            <div>
                {this.state.items.length > 0 && (
                    <DragDropContext onDragEnd={(result) => this.onDragEnd(result)}>

                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                    {this
                                        .state
                                        .items
                                        .map((item, key) => (
                                            <Draggable key={key} draggableId={key} index={key}>
                                                {(provided, snapshot) => (
                                                    <div>
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={[getItemStyle(snapshot.isDragging, provided.draggableProps.style)]}>
                                                            <FormItem
                                                                index={key}
                                                                item={item}
                                                                changeItem={(item, key) => this.changeItem(item, key)}
                                                                deleteItem={(index) => this.deleteItem(index)}/>
                                                        </div>
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                )
}
            </div>
        );
    }
}
