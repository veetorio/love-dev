import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo as chaves possíveis e o formato do estado
type AbleKeys = 'featureA' | 'featureB' | 'featureC';

type AbleState = {
  [key in AbleKeys]: boolean;
};

// Estado inicial: todos os ables são false
const initialState: AbleState = {
  featureA: false,
  featureB: false,
  featureC: false,
};

// Definindo o contexto
type AbleContextType = {
  state: AbleState;
  toggleAble: (key: AbleKeys, value?: boolean) => void;
};

export const AbleContext = createContext<AbleContextType | undefined>(undefined);

// Provider
export const AbleProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AbleState>(initialState);

  // Função para atualizar uma chave específica
  const toggleAble = (key: AbleKeys, value?: boolean) => {
    setState(prev => ({
      ...prev,
      [key]: value !== undefined ? value : !prev[key], // se passar value, seta para ele, senão alterna
    }));
  };

  return (
    <AbleContext.Provider value={{ state, toggleAble }}>
      {children}
    </AbleContext.Provider>
  );
};

// Hook para usar o contexto
export const useAble = () => {
  const context = useContext(AbleContext);
  if (!context) throw new Error('useAble deve ser usado dentro de AbleProvider');
  return context;
};
