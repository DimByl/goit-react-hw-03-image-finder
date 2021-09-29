import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderSpinner from "react-loader-spinner";
import styles from './Loader.scss';

export default function Loader () {
    return (
        <div className={styles.Loader}>
            <LoaderSpinner
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={5000}
            />
        </div>
        
    );
}
