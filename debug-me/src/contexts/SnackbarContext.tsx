import React from 'react';
import { SnackbarProps } from '../components/Snackbar';
import { Question } from '../models/Question';

export interface SnackbarContextType {
    setContext?: React.Dispatch<React.SetStateAction<SnackbarProps>>;
    context: SnackbarProps;
}

const SnackbarContext = React.createContext<SnackbarContextType>({context: {
    message: "",
    type: 'success',
    visible: false
}});

export default SnackbarContext;