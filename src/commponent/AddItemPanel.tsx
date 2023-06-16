import React, {useEffect, useState} from 'react';
import {Select, TextInput} from "@mantine/core";
import {useDispatch} from "react-redux";
import {addItem} from "../state/catalog-reducer";

const AddItemPanel = () => {
    const dispatch = useDispatch()
    const [searchValue, onSearchChange] = useState("");
    const [link, setLink] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState<number>(0)

    useEffect(()=> {
        console.log(searchValue)
        console.log(link)
    },[searchValue, link])

    const onClickHandler = () => {
        dispatch(addItem(searchValue, link,price, title))
        setLink('')
        setPrice(0)
        setTitle('')
        onSearchChange('All')
    }

    return (
        <div>

            <Select
                label="Your favorite framework/library"
                placeholder="Pick one"
                searchable
                onSearchChange={onSearchChange}
                searchValue={searchValue}
                nothingFound="No options"
                data={['Underwear', 'BodyJewelry', 'clothing', 'Swimwear']}
            />
            <TextInput
                placeholder={'Ccылка на фотографию формата jpg, webp'}
                value={link}
                onChange={(event) => setLink(event.currentTarget.value)}

            />
            <TextInput
                placeholder={'Заголовок'}
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}

            />
            <TextInput
                placeholder={'Цена'}
                value={price}
                onChange={(event) => setPrice(+event.currentTarget.value)}

            />
            <button onClick={onClickHandler}> +</button>
        </div>
    );
};

export default AddItemPanel;