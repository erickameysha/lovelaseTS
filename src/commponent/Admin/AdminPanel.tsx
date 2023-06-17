import React, {useEffect, useState} from 'react';
import {Accordion, Select, Tabs, TextInput} from "@mantine/core";
import {useDispatch} from "react-redux";
import {addItem} from "../../state/catalog-reducer";
import AddItemPanel from "../AddItemPanel";
import Orders from "../СheckOut/Orders";
import {Link} from "react-router-dom";

const AdminPanel = () => {

    return (
        <div style={{maxWidth: '1120px',
            margin: '0 auto'}}>
            <Accordion style={{margin:'150px 0'}} defaultValue="customization">
                <Accordion.Item value="customization">
                    <Accordion.Control>добавление товара</Accordion.Control>
                    <Accordion.Panel><AddItemPanel/></Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="flexibility">
                    <Accordion.Control>заказы</Accordion.Control>
                    <Accordion.Panel><Orders/></Accordion.Panel>
                </Accordion.Item>

            </Accordion>
            <div>
            <Link to={'/my-account'}>личныйй</Link>
            </div>
        </div>
    );
};

export default AdminPanel;