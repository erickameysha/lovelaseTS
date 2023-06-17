import React from 'react';
import EditableSpan from "../../UnComponent/EditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {goOut, PersonData} from "../../state/auth-reducer";
import {Title, Text} from "@mantine/core";
import {Tabs} from '@mantine/core';
import {Button} from "@mui/material";

const MyAccount = () => {
    const user = useSelector<AppRootStateType, PersonData[]>(state => state.auth['person'])
    const dispatch = useDispatch()
    return (

        <div style={{marginLeft:'30px'}}>
            {
                user.map(el=> {
                 return( <div>  <Title order={2}>Личная информация</Title>
                    <Text size={23}>{el.name}</Text>
                    {/*<EditableSpan value={'erere'} onChange={()=> {}}/>*/}
                    <Text size={23}>{el.phone}</Text>
                    <Text size={23}>{el.email}</Text>
                    <Button onClick={()=>dispatch(goOut(false))} >Выход</Button>
                    {/*<button>Редактировать</button>*/}
                     </div>
                )
                })
            }

        </div>


    );
};

export default MyAccount;