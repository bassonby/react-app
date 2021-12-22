import { LendingText } from "../../constants/constants";
import { Article } from "../article/article";

import styles from "../content.module.css"

export const C1 = () => (
    <div className={styles.flex}>
        {LendingText.c1Article.map(({c1Article , key} , index) => (
        <Article index={index} article={c1Article} key={key} />
        ))}
    </div>
);