import {useState} from "react";
import Item from "../Item/Item";
import './Counter.css'
import {BasketType} from "../../App";
import basket from "./Basket";

type CounterProps = {
    price: number
    basket: BasketType[]
    id: string;
    onTotalPriceChange: (price: number) => void; // Определяем новый пропс для передачи функции обновления общей стоимости
};

export const Counter = ({ price,basket,id, onTotalPriceChange }: CounterProps) => {
    const [count, setCount] = useState<number>(0);

    const handleIncrease = (): void => {
        setCount(count + 1);
        const item: BasketType| undefined =basket.find((item) => item.id === id);
        if (item) {
            onTotalPriceChange(item.price); // Вызываем функцию обновления общей стоимости и передаем стоимость одного товара
        }
    };

    const handleDecrease = (): void => {
        if (count > 0) {
            setCount(count - 1);
            const item: BasketType | undefined = basket.find((item) => item.id === id);
            if (item) {
                onTotalPriceChange(-item.price); // Вызываем функцию обновления общей стоимости и передаем отрицательную стоимость одного товара
            }
        }
    };

    const item: BasketType | undefined = basket.find((item) => item.id === id);

    if (!item) {
        return null;
    }

    return (
        <div className="counter_inner">
            <div className="counter-wrap">
            <button  className={'counterButton'}  onClick={handleDecrease}>-</button>
            <p className={'counter-display'}>{count}</p>
            <button className={'counterButton'}  onClick={handleIncrease}>+</button>
            </div>
            {/*<span>{item.price * count} руб.</span>*/}
        </div>
    );
};
