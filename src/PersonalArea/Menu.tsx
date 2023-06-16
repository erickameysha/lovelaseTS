import React from 'react';
import { Menu, Button, Text } from '@mantine/core';


const Meneu = () => {
    return (

        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Button>Toggle menu</Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item >Отменить заказ</Menu.Item>

            </Menu.Dropdown>
        </Menu>

    );
};

export default Meneu;