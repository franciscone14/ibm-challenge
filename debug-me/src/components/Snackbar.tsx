import React, { useContext, useEffect } from 'react';
import SnackbarContext from '../contexts/SnackbarContext';

// import { Container } from './styles';

export interface SnackbarProps {
    message: string;
    type: 'success' | 'danger';
    visible: boolean;
}

const Snackbar: React.FC = () => {

  const { context, setContext } = useContext(SnackbarContext);

  useEffect(() => {
    if(setContext){
      setTimeout(() => setContext({...context, visible: false}), 5000);
    }
  }, [context.visible]);

  if(context.visible){
    return (
      <div style={{position: 'absolute', bottom: '1rem', left: '1rem'}}>
          <div className={`alert alert-${context.type}`} role="alert">
              {context.message}
          </div>
      </div>
    );
  }
  return <div />
}

export default Snackbar;