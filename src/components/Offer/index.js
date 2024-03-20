import React from 'react';
import s from "./offer.module.scss"
import OfferCard from "../OfferCard";

const Offer = () => {
 
 const cards = [
  {id: 1, image: "images/card1.png", title: <><p>Virtual</p> Prepaid Card</>, desc: "Download the Papel App, create your Free Digital Mastercard & add it to your digital wallet."},
  {id: 2, image: "images/card2.png", title: <><p>Mobile</p> Application</>, desc: "Receive notifications, access your accounts & view transactions in real-time via your device."},
  {id: 3, image: "images/card3.png", title: <><p>Account</p> Dashboard</>, desc: "Receive an Account Dashboard to manage your account & corporate expenses with ease."},
 ]
 return (
  <div className={s.container}>
   <div className={s.wrapper}>
    <hi className={s.title}>
     What we will offer
    </hi>
    <div className={s.cards}>
     {cards.map(el => (
      <OfferCard image={el.image} title={el.title} desc={el.desc} key={el.id}/>
     ))}
    </div>
   </div>
  </div>
 );
};

export default Offer;