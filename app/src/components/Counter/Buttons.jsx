function Buttons({ onIncrement, onDecrement, onReset }) {
    return (
        <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default Buttons;
