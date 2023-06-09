import React from 'react';
import './Main.css'
import sliderIMG from './mainImages/slider.png'
import img1 from './mainImages/img1.jpg'
import img2 from './mainImages/img2.jpg'
import img3 from './mainImages/img3.jpg'
import katya from './mainImages/katyaImg.png'
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div>

            <div className="BG">
            <div className={'container'}>

                <div className="slider-content">
                    <h2 className={'title slider__title'}>Lingerie with a
                        <span>psychotherapeutic effect</span>
                    </h2>
                    <div className="slider">
                        <img className={'slider-images'} src={sliderIMG} alt="ooeo"/>
                        <div className="about-product">
                            <Link to={'/catalog'} className={'slider-button'}>ABOUT NEW PRODUCTS</Link>
                        </div>

                    </div>
                    <div className="formula">
                        <span className={'title formula-title'}>The formula to self love</span>
                        <p className={'text formula-text'}>
                            We help girls achieve healthy self-esteem and self-love
                            <span> with the help of beautiful and high-quality lingerie. </span>
                        </p>

                        <div className="form-items">
                            <div className="form-item">
                                <img className={'form-img'} src={img1} alt=""/>
                                <div className={'form-subtitle'}>
                                    <p className={' form-subtitle-p'}>“Kunoichi” BRA 65$ </p>
                                </div>
                            </div>
                            <div className="form-item">
                                <img className={'STREP'} src={img2} alt=""/>
                                <div className={'form-subtitle'}>
                                    <p className={' form-subtitle-p'}>“STREP“ 20$</p>
                                </div>
                            </div>
                            <div className="form-item">
                                <img className={' Kunoichi'} src={img3} alt=""/>
                                <div className={'form-subtitle'}>
                                    <p className={' form-subtitle-p'}>“Kunoichi” 50$ </p>
                                </div>
                            </div>

                        </div>
                        <div className={'button-flex'}>
                            <Link to="/catalog" className="button">show more</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="BG-Katya">
                <div className="container">
                <div className="mayNamesIsAnton">
                    <div className="katya-wrapp">
                        <h2>
                            Hi, my name is
                            Karina Kudina. Lovelace
                            - my life's work.
                        </h2>

                        <img src={katya} alt=""/>

                        <div className="katya-text">
                            <div className={'katya-text-span'}>
                                At 24, I was working in a café as a waitress, admired the subject of sexuality and wanted
                                very much to find a vocation in life.
                            </div>
                            <div className={'katya-text-span'}>
                                I never thought I could be a "girl boss", and in fact, I doubted myself a lot. After all,
                                <span>apart from an unloving job, I was also in a painful relationship that "gave" me a bunch of complexes, depression and self-loathing.
                         </span>
                            </div>
                            <div className={'katya-text-span'}>

                                On 25 November 2015, I woke up with the desire to start sewing...

                            </div>
                        </div>
                        <div className="button-flex katya-button-flex">
                            <Link className={'button katya-button'} to="/aboutUS">Read the history of the brand →</Link>
                        </div>

                    </div>
                </div>
                </div>

                    <div className="help">
                        <div className="help-titll">
                            <div className="f"></div>
                            <p>We help girls come to love themselves
                            </p>
                            <span>with beautiful
                            lingerie
                            </span>
                        </div>
                        <div className="help-wrapp">
                            <div className="help-items">
                                <div className="help-item">
                                    <p className="help-item__title">
                                        Eco-friendliness


                                    </p>
                                    <span className="help-item__subtitle">


Our packaging is reusable, stylish bags
                                    <span>in which you can store your underwear or</span>
                                    <span>use them as fruit pouches.</span>
                               </span>
                                </div>
                                <div className="help-item">
                                    <p className="help-item__title">
                                        Adjustment

                                    </p>
                                    <span className="help-item__subtitle">

The underwear is adjustable and if you gain or lose weight, it will fit just by tightening or loosening the adjustment.
                               </span>
                                </div>
                                <div className="help-item">
                                    <p className="help-item__title">
                                        No Push-tup

                                    </p>
                                    <span className="help-item__subtitle">

We don't use push-up technology because we care about the health of our customers
                               </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        </div>


    );
};

export default Main;