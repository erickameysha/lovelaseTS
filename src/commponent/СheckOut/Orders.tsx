import React from 'react';
import {Table} from "@mantine/core";
import Meneu from "../../PersonalArea/Menu";

const Orders = () => {
    const ths = (
        <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
        </tr>
    );


    return (
        <Table captionSide="bottom">
            <caption>Some elements from periodic table</caption>
            <thead>{ths}</thead>
            <tbody> <tr>
                <td>name</td>
                <td>phone</td>
                <td>price</td>
                <td>  <Meneu/></td>
            </tr></tbody>

        </Table>
    );
};

export default Orders;