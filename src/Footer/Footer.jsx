import React from 'react';
import {Link} from "react-router-dom";
import instagram from './FooterIcon/instagram.png'
import faceBook from './FooterIcon/facebook.png'
import './footer.css'
import s from "./../Header/Header.module.css";

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'container'}>
                <div className={'reerr'}>
                    <div className="first-colume">
                        <img className={s.ks}
                             src="https://lovelace.by/image/catalog/logo.png" alt=""/>
                        <p>+375(29) 888-32-81</p>
                        <p>г. Минск, ТЦ Немига 3</p>
                        <p>support@lovelace.by</p>
                    </div>
                    <div className="second-colume">
                        <ul>
                            <li><h3>НАША ПРОГРАММА</h3></li>
                            <li>
                                <span>Подарочный сертификат</span>
                            </li>
                            <li>
                                <span>Руководство по размерам</span>
                            </li>
                            <li>
                               <span>
                               Уход за бельем
                           </span></li>
                            <li>
                               <span>
                                      Возврат
                               </span>
                            </li>
                            <li>
                               <span>
                                        Личный кабинет
                               </span>
                            </li>
                        </ul>
                    </div>
                    <div className="third-colume">
                        <ul>
                            <li><h3>О КОМПАНИИ</h3></li>
                            <li>
                                <span>   Контакты</span>
                            </li>
                            <li>
                                <span>  Доставка и оплата</span>
                            </li>
                            <li>
                               <span>
                              Договор оферты
                           </span></li>
                            <li>
                               <span>
                                  Политика конфиденциальности
                               </span>
                            </li>

                        </ul>
                    </div>  <div className="third-colume">
                        <ul>
                            <li><h3>О КОМПАНИИ</h3></li>
                            <li>
                                <span>   Контакты</span>
                            </li>
                            <li>
                                <span>  Доставка и оплата</span>
                            </li>
                            <li>
                               <span>
                              Договор оферты
                           </span></li>
                            <li>
                               <span>
                                  Политика конфиденциальности
                               </span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;