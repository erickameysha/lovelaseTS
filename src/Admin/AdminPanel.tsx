import React, {useState} from 'react';
import {Select, TextInput} from "@mantine/core";

const AdminPanel = () => {
    const [searchValue, onSearchChange] = useState('');
    const [link, setLink] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')

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
                        onChange={(event) => setColor(event.currentTarget.value)}

                    />
                    <TextInput
                        placeholder={'Цена'}
                        onChange={(event) => setPrice(event.currentTarget.value)}

                    />
                </div>
            </div>

        </div>
    );
};

export default AdminPanel;