import React, {useEffect} from 'react';
import {Box, Button} from "@mui/material";
import {Group, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import {getToBasket, PersonData} from "../../../state/auth-reducer";

import {BasketType} from "../../../App";

const CheckOutPersonForm = () => {
const person = useSelector<AppRootStateType, PersonData[]>(state => state.auth['person'])
const card = useSelector<AppRootStateType, BasketType[]>(state => state.auth['card'])
const basket = useSelector<AppRootStateType, BasketType[]|null>(state => state.basket['basketItem'])
const total = useSelector<AppRootStateType, number>(state => state.basket['totalPrice'])
const dispatch = useDispatch()
    const form = useForm({
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            // password: (value) => (value.length < 6 ? 'Name must have at least 6 letters' : null),
            phone: (value)=> (/\+375\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(value)?  'Invalid number': null)
        },
        initialValues: {

                name: person.length? `${person[0].name}`: '',
                email: person.length? `${person[0].email}`: '',
                phone: person. length? `${person[0].phone}`:'',
                social: '',

            country: 'Беларусь',
            city: '',
            street: '',
            house: '',
            korp: '',
            flat: '',
            comment: ''

        },
    })
const onClick = () => {
    dispatch(getToBasket(basket, total))
}
useEffect(()=>{
    console.log(card)
},[card])
    return (
        <Box>
            <form onSubmit={form.onSubmit(onClick)}>
                <div>

                    <TextInput
                        withAsterisk
                        placeholder="Имя"
                        {...form.getInputProps('name')}
                    />

                    <TextInput
                        placeholder={'Телефон'}
                        {...form.getInputProps('phone')}
                    />
                    <TextInput
                        withAsterisk
                        placeholder="example@mail.com"
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        withAsterisk
                        placeholder="
Никнейм в инстаграм или телеграм Менеджер свяжется с вами через"
                        {...form.getInputProps('social')}
                    />
                </div>

                <div className="">
                    <h1>Страна и адрес доставки</h1>

                    <TextInput
                        placeholder={'Страна'}
                        {...form.getInputProps('country')}
                    />
                    <TextInput
                        placeholder={'Город'}
                        {...form.getInputProps('city')}
                    />
                    <TextInput
                        placeholder={'Улица'}
                        {...form.getInputProps('street')}
                    />

                    <div style={{display: 'flex'}}>
                        <TextInput
                            placeholder={'Дом'}
                            {...form.getInputProps('house')}
                        />
                        <TextInput
                            placeholder={'Корпус'}
                            {...form.getInputProps('korp')}
                        />
                        <TextInput
                            placeholder={'Квартира'}
                            {...form.getInputProps('flat')}
                        />
                    </div>
                    <Group position="right" mt="xl">
                        <Button type="submit" >Submit</Button>
                    </Group>
                </div>


                {/*<JsonInput/>*/}
            </form>
        </Box>
    );
};

export default CheckOutPersonForm;