import React from 'react';
import s from "./offerCard.module.scss"

const OfferCard = ({image, title, desc}) => {
 return (
  <div className={s.container}>
   <div className={s.image}>
    <img src={image} alt=""/>
   </div>
   <div className={s.titleWrapper}>
    <div className={s.title}>
     {title}
    </div>
    <div className={s.desc}>
     {desc}
    </div>
   </div>
  </div>
 );
};

export default OfferCard;