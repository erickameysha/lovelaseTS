import React from 'react';

const BasketItem = (props: any) => {
    return (
        <div className={'pises'}>
            <div className={'item-inner'}>
                <div className="item-img">
                    <img src={props.item.img} alt=""/>
                </div>
                <div className={'re'}>
                    <h3 className={'mapTitle'}><span>{props.item.title}</span>
                    </h3>
                    {/*<p className={'mapPrice'}>{item.price}</p>*/}

                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>    <p>color: </p>
                        <div style={{
                            marginLeft: '10px',
                            width:'20px',
                            height:'20px',
                            background: 'pink'
                        }} ></div> </div>

                </div>

            </div>
            <div className="counter_inner">

                {/*<div className={'counter-wrap'}>*/}
                {/*    <button className={'counterButton'} onClick={()=> decrementCount()}>-</button>*/}
                {/*    <p className={'counter-display'}>{props.counter}</p>*/}
                {/*    <button className={'counterButton'} onClick={()=>incrementCount()} >+</button>*/}
                {/*</div>*/} 


                <div className={'prisesType'}>
                    {props.price} BYN
                </div>
            </div>

        </div>
    );
};

export default BasketItem;