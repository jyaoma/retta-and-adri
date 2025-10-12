import React, {ActionDispatch, createContext, ReactNode, useContext, useReducer} from 'react';

type LoaderContextState = {
    itemsToLoad: number;
    loadedItems: number;
}

export enum LoaderContextActions {
    SET_ITEMS_TO_LOAD = 'SET_ITEMS_TO_LOAD',
    INCREMENT_LOADED_ITEMS = 'INCREMENT_LOADED_ITEMS',
}

type LoaderContextAction = {
    type: keyof typeof LoaderContextActions;
    data?: number;
};

const loaderReducer = (state: LoaderContextState, action: LoaderContextAction) => {
    switch (action.type) {
        case LoaderContextActions.SET_ITEMS_TO_LOAD:
            if (!!action.data) {
                return {
                    ...state,
                    itemsToLoad: action.data,
                };
            }
            return state;
        case LoaderContextActions.INCREMENT_LOADED_ITEMS:
            return {
                ...state,
                loadedItems: state.loadedItems + 1,
            };
        default:
            return state;
    }
};

const initialState = {
    itemsToLoad: 0,
    loadedItems: 0,
};

export const LoaderContext = createContext<LoaderContextState>(initialState);
export const LoaderDispatchContext = createContext<ActionDispatch<[action: LoaderContextAction]> | null>(null);

export const LoaderProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
    const [state, dispatch] = useReducer(loaderReducer, initialState);

    return (
        <LoaderContext value={state}>
            <LoaderDispatchContext value={dispatch}>
                {children}
            </LoaderDispatchContext>
        </LoaderContext>
    )
}

export const useLoaderContext = () => useContext(LoaderContext);
export const useLoaderDispatchContext = () => useContext(LoaderDispatchContext);