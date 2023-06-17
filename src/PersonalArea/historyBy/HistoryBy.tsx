import React from 'react';
import {Accordion} from "@mantine/core";
import AccordionItem from "../MyAccount/AccordionItem";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../state/store";
import {OrderType} from "../../state/auth-reducer";

const HistoryBy = () => {
    const card = useAppSelector<OrderType[]>(state => state.auth['card'])
    const child = card.map(el=>
        <AccordionItem id={el.id}status={el.status} totalPrice={el.totalPrice}/>

        )
    return (


        <Accordion variant="filled" defaultValue="customization">

            {child}
        </Accordion>
    );
};

export default HistoryBy;