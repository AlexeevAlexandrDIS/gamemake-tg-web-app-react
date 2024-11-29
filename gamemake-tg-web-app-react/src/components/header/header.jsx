import React from 'react';
import Button from "../button/button";
const tg = window.Telegram.WebApp


const Header = () => {

    const onClose = () => {
        tg.close();
    }


    return (
        <div className={'header'}>
            <Button onClose={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;