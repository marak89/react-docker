import React, { useState } from 'react';

function TodoList() {
    // Krok 1: Definicja stanu
    const [tasks, setTasks] = useState([]);        // lista zadań
    const [newTask, setNewTask] = useState('');    // tekst nowego zadania

    // Obsługa zmiany w polu input
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    // Obsługa dodania zadania
    const handleAddTask = (e) => {
        e.preventDefault(); // zapobiegamy przeładowaniu strony

        if (newTask.trim() === '') return; // ignorujemy puste zadania

        setTasks([...tasks, newTask]);     // dodajemy nowe zadanie do listy
        setNewTask('');                    // czyścimy pole input
    };

    // Usuwanie zadania po kliknięciu
    const handleRemoveTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    };

    // Krok 3: Wyświetlanie listy
    return (
        <div>
            <h2>Lista zadań</h2>

            {/* Krok 2: Formularz */}
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Wpisz nowe zadanie"
                />
                <button type="submit">Dodaj</button>
            </form>

            {/* Lista zadań */}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}{' '}
                        <button onClick={() => handleRemoveTask(index)}>
                            Usuń
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
