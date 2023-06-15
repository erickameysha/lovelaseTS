import React from 'react';
import Login from "../formes/Login";
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className={'container'}>
            <div className="login__form">
                <div className="login__login">
                    <div className="login__title">
                        Введите номер <br/>телефона и пароль, чтобы войти в аккаунт
                    </div>
                    <div className="login_text_block">
          <span>
            Если ваш номер уже зарегистрирован в системе, и вы не знаете пароль, восстановите его через форму «Забыли пароль?»
          </span>
                    </div>
                    <Login/>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;