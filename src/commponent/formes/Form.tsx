import React, {useEffect} from 'react';
import { useForm} from "@mantine/form";

import {Box, Button} from "@mui/material";
import {Group, PasswordInput, TextInput} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {AuthType, regAC} from "../../state/auth-reducer";
import {AppRootStateType} from "../../state/store";



const Form = () => {
    const auth= useSelector<AppRootStateType, AuthType[]>(state => state.auth)
const dispatch= useDispatch()
    const form = useForm({
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 6 ? 'Name must have at least 6 letters' : null),
            // phone: (value)=> (/\+375\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(value))?  'Invalid number': null)
        },
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',


        },
    });
    useEffect(()=> {
        console.log(auth)
    },[auth])

    return (
        <Box>
            <form onSubmit={form.onSubmit(values => dispatch(regAC(values.name, values.lastName,values.email, values.password, values.phone)))}>
                <TextInput
                    withAsterisk
                    label="name"
                    placeholder="Имя"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    withAsterisk
                    label="Фамилия"
                    placeholder="Фамилия"
                    {...form.getInputProps('lastName')}
                />

                <PasswordInput
                    label={'Password'}
                    placeholder={'Пароль'}
                    {...form.getInputProps('password')}
                />
                <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="example@mail.com"
                    {...form.getInputProps('email')}
                />

                <Group position="right" mt="xl">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    )
}

export default Form