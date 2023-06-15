import {useState} from "react";
import './Counter.css'
import {BasketType} from "../../App";

import {useDispatch} from "react-redux";
import {dicrementCard, inrementCard} from "../../state/basket-reducer";

type CounterProps = {
    price: number
    basket: BasketType
    id: string;

    // onTotalPriceChange: (price: number) => void; // Определяем новый пропс для передачи функции обновления общей стоимости
};

export const Counter = ({ price, basket, id}: CounterProps) => {
    const [count, setCount] = useState<number>(basket.count);

    const dispatch = useDispatch()
    const handleIncrease = (): void => {
        setCount(count + 1);
        dispatch(inrementCard(id))
    };

    const handleDecrease = (): void => {
        if (count > 0) {
            setCount(count - 1);
            dispatch(dicrementCard(id))
        }
    };

    return (
        <div className="counter_inner">
            <div className="counter-wrap">
                <button className={'counterButton'} onClick={handleDecrease}>-</button>
                <p className={'counter-display'}>{count}</p>
                <button className={'counterButton'} onClick={handleIncrease}>+</button>
            </div>
            {/*<span>{item.price * count} руб.</span>*/}
        </div>
    );
};
