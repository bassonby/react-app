import styles from "./article.module.css"

export const Article = ({article}) =>(
    <div className={styles.article} >{article}</div>
)