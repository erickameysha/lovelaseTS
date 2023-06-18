import React from 'react';
import {useAppDispatch, useAppSelector} from "../../state/store";
import Cards from "./Cards";
import {createStyles, Group} from "@mantine/core";
import {CatalogDataType} from "../../Catalog/CatalogFakeData";
import {delItemAC} from "../../state/catalog-reducer";


const useStyles = createStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'stretch',
    }
}))
const CardsContainer = () => {
    const basket = useAppSelector<CatalogDataType[]>(state => state.catalog['items'])
const dispatch= useAppDispatch()
    const {classes} = useStyles()

    return (
        <Group className={classes.root}>
            {basket.map((el) => {
                const onClickHandler = (newID: string) => {
                  dispatch(delItemAC(newID))
                }
                return <Cards id={el.id} key={el.id} onClickHandler={onClickHandler} img={el.img} price={el.price} title={el.title} filter={el.filter}/>
            })}
        </Group>
    );
};

export default CardsContainer;