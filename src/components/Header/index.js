import React from 'react';
import s from "./header.module.scss"

const Header = () => {
 return (
  <div className={s.container}>
   <div className={s.wrapper}>    
    <div className={s.logo}>
     <img src="/images/logo.svg" alt="papel logo"/>
    </div>
   </div>
  </div>
 );
};

export default Header;