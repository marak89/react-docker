import React, { useState } from 'react';

function RegistrationForm() {
    // Krok 1: Stan jako obiekt
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    // Krok 2: Obsługa zmian
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    // Walidacja podstawowa
    const validate = () => {
        const newErrors = {};
        if (!form.firstName.trim()) newErrors.firstName = 'Imię jest wymagane';
        if (!form.lastName.trim()) newErrors.lastName = 'Nazwisko jest wymagane';
        if (!form.email.trim()) {
            newErrors.email = 'Email jest wymagany';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            newErrors.email = 'Nieprawidłowy format email';
        }
        if (!form.password) newErrors.password = 'Hasło jest wymagane';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Krok 3: Wysyłanie
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log('Dane do wysłania:', form);
            alert('Rejestracja zakończona sukcesem!');
            // Możesz tu wysłać dane do API
        } else {
            console.warn('Formularz zawiera błędy:', errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Formularz rejestracji</h2>

            <label>
                Imię:
                <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <span>{errors.firstName}</span>}
            </label>
            <br />

            <label>
                Nazwisko:
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <span>{errors.lastName}</span>}
            </label>
            <br />

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </label>
            <br />

            <label>
                Hasło:
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
            </label>
            <br />

            <button type="submit">Zarejestruj</button>
        </form>
    );
}

export default RegistrationForm;
