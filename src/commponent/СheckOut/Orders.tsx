import React, {useEffect, useState} from 'react';
import {Select, Table} from "@mantine/core";
import Meneu from "../../PersonalArea/Menu";
import {useAppSelector} from "../../state/store";
import {ChangeStatus, delIte, OrderType} from "../../state/auth-reducer";
import {useDispatch} from "react-redux";



const rolesData = ['оформлен', 'оплачен', 'выдан'];

const Orders = () => {
    const [searchValue, onSearchChange] = useState('')
    const dispatch = useDispatch()
    const card = useAppSelector<OrderType[]>(state => state.auth['card'])

    const ths = (
        <tr>
            <th>Номер заказа</th>
            <th>Цена</th>
            <th>Статус</th>
            <th></th>

            {/*<th>Atomic mass</th>*/}
        </tr>
    );
    const tr = card.map(el=>{


        return(<tr >
                    <td>{el.id}</td>
                  <td>{el.totalPrice}</td>
                   <td> <Select    onSearchChange={onSearchChange} data={['оформлен', 'оплачен', 'выдан']} variant="unstyled" /></td>
                <td>  <button onClick={()=> dispatch(delIte(el.id))}>x</button></td>
        </tr>

        )
        }
    //     (<)
    )


    return (
        <Table captionSide="bottom">
            <caption>Some elements from periodic table</caption>
            <thead>{ths}</thead>
            <tbody>{tr}</tbody>

        </Table>
    );
};

export default Orders;