import React, { useState, useEffect } from 'react';

function TytulDynamiczny() {
    const [text, setText] = useState('');

    useEffect(() => {
        document.title = `Wpisałeś: ${text}`;
    }, [text]);

    return (
        <div>
            <h1>Podaj tekst:</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

export default TytulDynamiczny;
