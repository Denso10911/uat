import React from 'react';
import s from "./footer.module.scss";

const Footer = () => {
 const info = [
  {
   id: 1,
   label: "Legal Name",
   value: "Papel For You Information Technology Consultants LLC",
  },
  { id: 2, label: "License No", value: "1260076" },
  { id: 3, label: "Registered Authority", value: "Dubai Department of Economy and Tourism" },
  {
   id: 4,
   label: "Registered Address",
   value: "A601, Opus Tower, Business Bay, Dubai, United Arab Emirates.",
  },
 ]
 return (
  <div className={s.container}>
   <div className={s.wrapper}>
    <div className={s.logo}>
     <img src="/images/logo.svg" alt="papel logo"/>
    </div>
    <div className={s.info}>
     {info.map((el) => (
      <div key={el.id} className={s.item}>
       <span>{el.label}</span> – <span>{el.value}</span>
      </div>
     ))} 
    </div>
   </div>
  </div>
 );
};

export default Footer;