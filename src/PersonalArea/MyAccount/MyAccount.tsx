import React from 'react';
import EditableSpan from "../../UnComponent/EditableSpan";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {PersonData} from "../../state/auth-reducer";
import {Title, Text} from "@mantine/core";
import {Tabs} from '@mantine/core';

const MyAccount = () => {
    const user = useSelector<AppRootStateType, PersonData[]>(state => state.auth.person)
    return (

        <div style={{marginLeft:'30px'}}>
            <Title order={2}>Личная информация</Title>
            <Text size={23}>{user[0].name}</Text>
            {/*<EditableSpan value={'erere'} onChange={()=> {}}/>*/}
            <Text size={23}>{user[0].phone}</Text>
            <Text size={23}>{user[0].email}</Text>
            {/*<button>Редактировать</button>*/}
        </div>


    );
};

export default MyAccount;