import React, { createContext, useReducer, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { fintItemIndexById as findItemIndexById } from './utils/findItemIndexById'


interface Task {
    id: string;
    text: string;
}

interface List {
    id: string;
    text: string;
    tasks: Task[];
}

export interface AppState {
    lists: List[]
}

const appData: AppState = {
    lists: [
        {
            id: '0',
            text: ' To do',
            tasks: [{ id: "c0", text: "Create app scaffold" }, { id: "c1", text: "Init app" }]
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: '2',
            text: 'Done',
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
}

interface AppStateContextProps {
    state: AppState;
    dispatch: React.Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);


export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appStateReducer, appData);
    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
}

export const useAppState = () => {
    // retrieve value from context
    return useContext(AppStateContext);
};

type Action =
    | {
        type: "ADD_LIST"
        payload: string
    }
    | {
        type: "ADD_TASK"
        payload: { text: string; taskId: string }
    }
    | {
        type: "MOVE_LIST"
        payload: {
            dragIndex: number
            hoverIndex: number
        }
    };


const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "ADD_LIST": {
            // reducer logic
            return {
                ...state,
                lists: [
                    ...state.lists,
                    { id: uuid(), text: action.payload, tasks: [] }
                ]
            };
        }
        case "ADD_TASK": {
            //
            const targetLaneIndex = findItemIndexById(state.lists, action.payload.taskId);
            state.lists[targetLaneIndex].tasks.push({
                id: uuid(),
                text: action.payload.text
            });
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    }
}