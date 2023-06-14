import React from 'react';
import {Box, Button} from "@mui/material";
import {Group, JsonInput, PasswordInput, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";

const CheckOutPersonForm = () => {


    const form = useForm({
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            // password: (value) => (value.length < 6 ? 'Name must have at least 6 letters' : null),
            phone: (value)=> (/\+375\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(value)?  'Invalid number': null)
        },
        initialValues: {

                name: '',
                email: '',
                phone: '',
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


    return (
        <Box>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                        <Button type="submit">Submit</Button>
                    </Group>
                </div>


                {/*<JsonInput/>*/}
            </form>
        </Box>
    );
};

export default CheckOutPersonForm;