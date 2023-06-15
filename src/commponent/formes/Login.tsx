import React from 'react';
import {useForm} from "@mantine/form";
import {Box, Button} from "@mui/material";
import {Group, PasswordInput, TextInput} from "@mantine/core";

const Login = () => {

    const form = useForm({
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 6 ? 'Name must have at least 6 letters' : null),

        },
        initialValues: {

            email: '',
            password: '',


        },
    });
    return (
        <Box>
            <form onSubmit={form.onSubmit(values => console.log(values))}>
                <TextInput
                    withAsterisk
                    placeholder="example@mail.com"
                    {...form.getInputProps('email')}
                />

                <PasswordInput

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

export default Login