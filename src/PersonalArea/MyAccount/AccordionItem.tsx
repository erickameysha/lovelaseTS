import React from 'react';
import {Accordion} from "@mantine/core";
import Meneu from "../Menu";
import {useDispatch} from "react-redux";
import {delIte} from "../../state/auth-reducer";

type propsType = {
    id: string,
    totalPrice: string
    status: string


}
const AccordionItem = (props: propsType) => {
    const dispatch = useDispatch()
    // @ts-ignore
    return (
        <Accordion.Item value="customization">
            <Accordion.Control> Заказ: {props.id}</Accordion.Control>
            <Accordion.Panel>
                <div>
                    <div style={{display: 'flex',justifyContent: 'space-between'}} className="">
                        <p>Цена: {props.totalPrice}</p>
                        <p>на расмотрении</p>
                    </div>
                    <div className="">
                        <button onClick={()=>dispatch(delIte(props.id))}>x</button>
                    </div>


                </div>
            </Accordion.Panel>
        </Accordion.Item>)
};

export default AccordionItem;