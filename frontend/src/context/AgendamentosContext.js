import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const AgendamentosContext = createContext();

// Cria o provedor do contexto
export const AgendamentosProvider = ({ children }) => {
    const [agendamentos, setAgendamentos] = useState([]);

    const adicionarAgendamento = (novoAgendamento) => {
        setAgendamentos(prevAgendamentos => [...prevAgendamentos, novoAgendamento]);
    };

    const editarAgendamento = (id, agendamentoAtualizado) => {
        setAgendamentos(prevAgendamentos =>
            prevAgendamentos.map(agendamento => 
                agendamento.id === id ? { ...agendamento, ...agendamentoAtualizado } : agendamento
            )
        );
    };

    const excluirAgendamento = (id) => {
        setAgendamentos(prevAgendamentos => 
            prevAgendamentos.filter(agendamento => agendamento.id !== id)
        );
    };

    return (
        <AgendamentosContext.Provider value={{ agendamentos, adicionarAgendamento, editarAgendamento, excluirAgendamento }}>
            {children}
        </AgendamentosContext.Provider>
    );
};

// Hook personalizado para usar o contexto
export const useAgendamentos = () => {
    return useContext(AgendamentosContext);
};
