import styles from "../styles/Page.module.scss";
import React, { useState } from "react";
import Convert from "./Convert";
import BTC from "../img/BTC.png";
import USA from "../img/USA.png";
import EURO from "../img/EURO.png";

const Page: React.FC = () => {

  function getCurrentDate(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}.${month<10?`0${month}`:`${month}`}${separator}.${date}`
    }

  const calcBTCusa = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((respone) => {
      return respone.json();
    })
    .then((name) => setCrypto(name.bpi.USD.rate_float + " USD"));
  }
  
  const calcBTCeuro = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((respone) => {
      return respone.json();
    })
    .then((name) => setCrypto(name.bpi.EUR.rate_float + " EURO"));
  }

  const [crypto, setCrypto] = useState("");

  return (
    <div className="App">
        <div className={styles.text}>
          <h1>Cryptocurrency converter</h1>
        </div>
        <div className={styles.list}>
          <div onClick={calcBTCusa}>
            <Convert photoCrypto={BTC} photoCountry={USA} from="BTC" to="USD"/>
          </div>
          <div onClick={calcBTCeuro}>
            <Convert photoCrypto={BTC} photoCountry={EURO} from="BTC" to="EURO"/>
          </div>
        </div>
        <div className={styles.text} style={{marginTop: 50}}>
          <h1>Output Cryptocurrency</h1>
          <h2 style={{marginTop: 50}}>{crypto}</h2>
          <p style={{fontSize: 12}}>Last update: {getCurrentDate()}</p>
        </div>
    </div>
  );
};

export default Page;