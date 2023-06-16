import {createStyles, Tabs} from '@mantine/core';
import React from 'react';
import MyAccount from "./MyAccount";
import {ClockHour3, User} from "tabler-icons-react";
import HistoryBy from "../historyBy/HistoryBy";


const useStyle = createStyles((theme)=>({
    root:{
      display:'flex'
    },
    tabsList:{
        width: '300px'
    },
    tab:{
        backgroundColor: "#ffff",
        fontSize:'24px',
        padding: '14px 20px 18px',
        border: "none",
       color: 'black',
        '&:hover':{
            backgroundColor: '#fdf6fa',
            color:'#e44897',
        },

    }
}))
const MyAccountContainer = () => {
    const {classes} = useStyle()
    return (
        <Tabs  className={classes.root} defaultValue="gallery" orientation="vertical">
            <Tabs.List className={classes.tabsList} >
                <Tabs.Tab className={classes.tab} icon={<User
                    size={24}

                    strokeWidth={1}
                    color={'#000000'}
                />} value="gallery">Аккаунт</Tabs.Tab>
                <Tabs.Tab className={classes.tab} icon={ <ClockHour3
                    size={24}
                    strokeWidth={1}
                    color={'#000000'}
                />} value="messages">История</Tabs.Tab>
            </Tabs.List>

                <Tabs.Panel value="gallery"><MyAccount/></Tabs.Panel>
            <Tabs.Panel value="messages"><HistoryBy/></Tabs.Panel>

        </Tabs>
    );
};

export default MyAccountContainer;