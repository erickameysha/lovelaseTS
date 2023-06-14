import React from 'react';
import EditableSpan from "../../UnComponent/EditableSpan";

const MyAccount = () => {
    return (
        <div>
            <div><h1>Личная информация</h1>
                {/*<p>имя</p>*/}
                <EditableSpan value={'erere'} onChange={()=> {}}/>
                <p>телефон</p>
                <p>мыло</p>
                <button>Редактировать</button>
            </div>

        </div>
    );
};

export default MyAccount;