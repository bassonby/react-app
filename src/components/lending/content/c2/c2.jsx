import { LendingText } from "../../constants/constants";
import { Aside } from "../aside/aside";
import { Main } from "./main/main";

import styles from "../content.module.css"

export const C2 = () => (
    <div className={styles.flex}>
          <Aside aside={LendingText.c2Aside[0]} />
          <Main  main="main"/>
          <Aside aside={LendingText.c2Aside[1]} />
    </div>
)
