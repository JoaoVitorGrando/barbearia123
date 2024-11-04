import React, { useState } from 'react';
import { useAgendamentos } from '../context/AgendamentosContext'; // Importa o hook do contexto
import '../styles/agendamentos.css'; // Corrigido para o caminho correto do CSS

const Agendamentos = () => {
    const { agendamentos, adicionarAgendamento, editarAgendamento, excluirAgendamento } = useAgendamentos(); // Usa o contexto
    const [novoAgendamento, setNovoAgendamento] = useState({ title: '', time: '' }); // Estado para o novo agendamento

    const handleAdicionarAgendamento = () => {
        if (novoAgendamento.title && novoAgendamento.time) {
            const agendamentoComId = { id: Date.now(), ...novoAgendamento }; // Adiciona um ID único
            adicionarAgendamento(agendamentoComId); // Adiciona o agendamento
            setNovoAgendamento({ title: '', time: '' }); // Reseta o formulário
        }
    };

    const handleEditarAgendamento = (id) => {
        const agendamentoAtualizado = { title: 'Reunião Atualizada', time: '15h - 16h' }; // Exemplo de dados atualizados
        editarAgendamento(id, agendamentoAtualizado); // Edita o agendamento
    };

    return (
        <div className="agendamentos-container">
            <h1>Lista de Agendamentos</h1>

            <div className="formulario-agendamento">
                <input 
                    type="text" 
                    placeholder="Título do Agendamento" 
                    value={novoAgendamento.title}
                    onChange={(e) => setNovoAgendamento({ ...novoAgendamento, title: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Horário" 
                    value={novoAgendamento.time}
                    onChange={(e) => setNovoAgendamento({ ...novoAgendamento, time: e.target.value })}
                />
                <button onClick={handleAdicionarAgendamento}>Adicionar Agendamento</button>
            </div>

            <ul className="agendamentos-list">
                {agendamentos.map(agendamento => (
                    <li key={agendamento.id} className="agendamento-item">
                        <strong>{agendamento.title}</strong>: {agendamento.time}
                        <button className="editar-btn" onClick={() => handleEditarAgendamento(agendamento.id)}>Editar</button>
                        <button className="excluir-btn" onClick={() => excluirAgendamento(agendamento.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Agendamentos;
