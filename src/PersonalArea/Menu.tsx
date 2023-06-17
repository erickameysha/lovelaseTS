import React from 'react';
import { Menu, Button, Text } from '@mantine/core';

type propsType ={
    id: any
}
const Meneu = (props:  any) => {

    return (

        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Button>x</Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item >Отменить заказ</Menu.Item>

            </Menu.Dropdown>
        </Menu>

    );
};

export default Meneu;