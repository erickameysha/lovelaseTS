import React, {useEffect} from 'react';
import { useForm} from "@mantine/form";

import {Box, Button} from "@mui/material";
import {Group, PasswordInput, TextInput} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import { PersonData, regAC} from "../../state/auth-reducer";
import {AppRootStateType} from "../../state/store";



const Form = () => {
    const auth= useSelector<AppRootStateType,PersonData[]|null>(state => state.auth['person'])
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
                    style={{padding: '5px'}}
                    withAsterisk
                    placeholder="Имя"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    style={{padding: '5px'}}
                    withAsterisk
                    placeholder="Фамилия"
                    {...form.getInputProps('lastName')}
                />

                <TextInput
                    style={{padding: '5px'}}
                    withAsterisk
                    placeholder="example@mail.com"
                    {...form.getInputProps('email')}
                />

                <PasswordInput
                    style={{padding: '5px'}}
                    placeholder={'Пароль'}
                    {...form.getInputProps('password')}
                />

                <Group position="right" mt="xl">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    )
}

export default Form