import { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(0);

    return (
        <div>
            <Display count={count} />
            <Buttons
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
            />
        </div>
    );
}

export default Counter;
