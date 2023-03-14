import styles from "../styles/Page.module.scss";

type AppProps = {
    photoCrypto: string,
    photoCountry: string,
    from: string,
    to: string 
}

const Convert = (props: AppProps) => {
    return (
        <div className={styles.choice}>
        <img src={props.photoCrypto} alt={props.from} />
            <span>{props.from}</span>
            <span>to</span>
            <img src={props.photoCountry} alt={props.to} />
            <span>{props.to}</span>
        </div>
    )
}

export default Convert;