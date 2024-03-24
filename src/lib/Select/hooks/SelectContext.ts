import {createContext,useContext} from 'react';
import { selectTypes } from './types';

export function useSelectContext(){

    const selectContext = createContext<{select: selectTypes} | null>(null);

    if(!selectContext){
        throw new Error(
            "Error: The component must be rendered as child of Select component"
        );
    }

    return selectContext;
}