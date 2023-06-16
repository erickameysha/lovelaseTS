import React from 'react';
import {Accordion} from "@mantine/core";
import Meneu from "../Menu";

const AccordionItem = (props: any) => {
    return (
        <Accordion.Item value="customization">
            <Accordion.Control >  Заказ: {props.id}</Accordion.Control>
            <Accordion.Panel>
                <div>

                    Цена: {props.price}
                    <Meneu/>
                </div>
            </Accordion.Panel>
        </Accordion.Item>)
};

export default AccordionItem;