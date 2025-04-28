function Buttons({ onIncrement, onDecrement }) {
    return (
        <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}

export default Buttons;
