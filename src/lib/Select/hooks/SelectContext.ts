import {createContext,useContext} from 'react';
import { selectTypes } from '../types';

const SelectContext = createContext<{select: selectTypes} | null>(null);

export function useSelectContext(){

    const context = useContext(SelectContext);
    if(!context){
        throw new Error(
            "Error: The component must be rendered as child of Select component"
        );
    }

    return context;
}

export default SelectContext;