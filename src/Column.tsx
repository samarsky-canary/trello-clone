import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext'
import { Card } from './Card';
import uuid from 'uuid'
interface ColumnProps {
    text: string;
    index: number;
    id : string;
}

export const Column = ({ text, index, id }: ColumnProps) => {
    const { state, dispatch } = useAppState();
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map((task, i) => (
                <Card title={task.text} key={task.id} index={i}/>
            ))}
            <AddNewItem 
                toggleButtonText={"+ Add another task"}
                onAdd={(text) => { dispatch({type:"ADD_TASK", payload:{taskId: id, text: text}}) }} 
                dark={true} />
        </ColumnContainer>
    );
}