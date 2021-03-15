import React from 'react';
import { Question } from '../models/Question';

export interface ItemsContextType {
    setItems?: React.Dispatch<React.SetStateAction<Question[]>>;
    items: Question[];
}

const ItemsContext = React.createContext<ItemsContextType>({items: []});

export default ItemsContext;