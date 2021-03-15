import React from 'react';

export interface TokenContextType {
    setToken?: React.Dispatch<React.SetStateAction<string>>;
    token: string;
}

const TokenContext = React.createContext<TokenContextType>({token: ""});

export default TokenContext;