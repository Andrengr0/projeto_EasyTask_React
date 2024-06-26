import React, { useState } from 'react';
import '../App.css';
import styles from './Todo.module.css';

const getCategoryColor = (category) => {
  switch (category) {
    case 'Trabalho':
      return '#ff0000';
    case 'Estudos':
      return '#3d54d8';
    case 'Pessoal':
      return '#2ab441';
    default:
      return '#000000';
  }
};

const Todo = ({ todo, removeTodo, completeTodo }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
    closeModal(); // Fecha a modal após remover a tarefa
  };

  return (
    <div className={styles.todo} style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category" style={{ color: getCategoryColor(todo.category) }}>
          {todo.category}
        </p>
      </div>
      <div>
        <button
          className={`${styles.complete} ${todo.isCompleted ? styles.undo : ''}`}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.isCompleted ? 'Desfazer' : 'Completar'}
        </button>
        <button className={styles.remove} onClick={openModal}>
          X
        </button>
      </div>

      {/* Modal de Confirmação */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Deseja realmente remover esta tarefa?</p>
            <div className={styles.modalButtons}>
              <button className={styles.cancelButton} onClick={closeModal}>
                Cancelar
              </button>
              <button className={styles.confirmButton} onClick={handleRemove}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
