import { memo } from 'react'

import * as styles from './TimesTableDivider.styles'

const TimesTableDividerBase = () => <div className={styles.mainContainer} />

export const TimesTableDivider = memo(TimesTableDividerBase)
