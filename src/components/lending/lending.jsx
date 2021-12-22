import { Header } from "./header";
import { Content } from "./content";
import { Footer } from "./footer";


import styles from "./lending.module.css";
 
export const Lending = () => (
    <div className={styles.lending}>
        <Header />
        <Content />
        <Footer />
    </div>
)