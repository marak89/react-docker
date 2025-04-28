import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]); // stan z listą użytkowników
    const [loading, setLoading] = useState(true); // stan ładowania
    const [error, setError] = useState(null); // stan błędu

    useEffect(() => {
        // Pobieranie danych z API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Błąd pobierania danych');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });

        return () => {
            // Czyszczenie (np. można tu anulować fetch, jeśli korzystasz z AbortController)
            console.log('Komponent odmontowany');
        };
    }, []); // efekt wykona się tylko raz po zamontowaniu

    if (loading) return <p>Ładowanie danych...</p>;
    if (error) return <p>Błąd: {error}</p>;

    return (
        <div>
            <h2>Lista użytkowników</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
