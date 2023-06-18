import {Group, Avatar, Text, Title,Button} from '@mantine/core';
import React from 'react';
import {Trash} from "tabler-icons-react";
// import {Button} from "@mui/material";
// import {Avatar,Text} from "@mui/material";

type PropsType ={
    id: string
    img: string
    price: number
    title: string
    filter: string
    onClickHandler: (newID:string)=> void
}
const Cards = (props: PropsType) => {
    const onClickHandler = (newID: string) => {
        props.onClickHandler(newID)

    }
    return (
        <div>
            <Group noWrap>
                <Avatar size={96} src={props.img}/>

                <Group position={'apart'} style={{width:' 100%'}}>
                    <div>
                        <Title fz={24}>
                            {props.title}
                        </Title>
                        <Text>
                            {props.price} BYN
                        </Text>
                        <Text>
                          Тип: {props.filter}
                        </Text>
                    </div>
                    <Group>
                        <Button  onClick={()=> onClickHandler(props.id)}><Trash
                            size={20}
                            strokeWidth={2}
                            color={'black'}
                        /></Button>




                    </Group>
                </Group>
            </Group>
        </div>
    );
};

export default Cards;