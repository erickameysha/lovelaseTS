import s from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={s.header}>
                <div className={s.containerIr}>
                    <div className={s.container}>

                        <div className={s.wrap}>


                            <div className={s.items}>

                            {/*    <Link className={s.item} to={'/aboutUS'}>*/}
                                    ABOUT US
                            {/*    </Link>*/}
                            {/*    <Link className={s.item} to={'/'}>*/}
                                    MAIN
                            {/*    </Link>*/}
                            {/*    <Link className={s.item} to={'/catalog'}>*/}
                                    CATALOG
                            {/*    </Link>*/}
                            </div>

                            <span className={s.logo}>
                            <img  className={s.ks} src="https://lovelace.by/image/catalog/logo.png" alt=""/>
                        </span>
                            <div
                                className={s.temp}>
    {/*                            <Link to={'/registration'}>*/}
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="14.5" cy="7.5" r="5.5" stroke="black" strokeWidth="1.6"></circle>
                                        <path d="M14 16C20.7091 16 24.6333 20.7902 23.916 26H14" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M14 16C7.9618 16 4.43003 20.7902 5.07562 26H14" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
    {/*                            </Link>*/}
    {/*                            <Link to={'/basket'}>*/}
    {/*                                /!* <IconButton aria-label="cart">*/}
    {/*  <StyledBadge badgeContent={4} color="secondary">*/}
    {/*    <ShoppingCartIcon />*/}
    {/*  </StyledBadge>*/}
    {/*</IconButton>    *!/*/}
    {/*                            </Link>*/}
                            </div>
                        </div>






                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
