import React from 'react';
import './BasketError.css'
import {Link} from "react-router-dom";
const BasketError = () => {
    return (
        <div className={'card'}>
            <div className={'container'}>
                <div className="error-bg">
                    <svg width="251" height="312" viewBox="0 0 251 312" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M233.756 80.1514C233.478 76.7733 230.709 74.185 227.41 74.2181H179.184V55.435C179.184 24.8184 155.034 0 125.248 0C95.4586 0 71.311 24.8184 71.311 55.435V74.2181H23.0853C19.801 74.2309 17.0595 76.7937 16.7398 80.1514L0.115052 276.589C-0.640954 285.696 2.35333 294.715 8.37411 301.448C14.3924 308.179 22.882 312.008 31.7781 312H218.779C227.675 312.008 236.165 308.179 242.183 301.448C248.204 294.715 251.201 285.696 250.445 276.589L233.756 80.1514ZM84.002 55.435C84.002 32.0229 102.468 13.0435 125.248 13.0435C148.027 13.0435 166.493 32.0229 166.493 55.435V74.2181H84.002V55.435Z"
                            fill="#FDF6FA"></path>
                    </svg>
                </div>
                <div className="cart__text">
                    <h2 className="title title_left"><span>В корзине нет товаров.</span> Перейдите в каталог и добавьте
                        в
                        корзину любой товар, который вам понравится</h2>
                </div>
                <Link to={'/catalog'}>
                    назад
                </Link>
            </div>
        </div>
    );
};

export default BasketError;