import { LendingText } from "../../constants/constants"
import { Article } from "../article/article"

import styles from "../content.module.css"

export const C3 = () => (
    <div className={styles.flex}>
        {LendingText.c3Article.map((c3Article, index) =>(
            <Article inex={index} article={c3Article} />
            ))}
    </div>
)


