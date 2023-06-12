import React, {useEffect, useState} from 'react';
import {Select, TextInput} from "@mantine/core";
import {useDispatch} from "react-redux";
import {addItem} from "../../state/catalog-reducer";

const AdminPanel = () => {
    const dispatch = useDispatch()
    const [searchValue, onSearchChange] = useState("All");
    const [link, setLink] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState<number>(0)

    useEffect(()=> {
        console.log(searchValue)
        console.log(link)
    },[searchValue, link])

    const onClickHandler = () => {
      dispatch(addItem(searchValue, link,price, title))
    }

    return (
        <div>
            <h1>Админ панель


            </h1>

            <div>
                <h1>Добавление товара</h1>

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
                        onChange={(event) => setLink(event.currentTarget.value)}

                    />
                    <TextInput
                        placeholder={'Цвет'}
                        onChange={(event) => setTitle(event.currentTarget.value)}

                    />
                    <TextInput
                        placeholder={'Цена'}
                        onChange={(event) => setPrice(+event.currentTarget.value)}

                    />
                </div>
                <button onClick={onClickHandler}> +</button>
            </div>

        </div>
    );
};

export default AdminPanel;