import { memo } from 'react'
import { Cube, Face } from '../../lib/types/cube'
import { Square } from './Square'

import * as styles from './Pattern.styles'

type PatternProps = {
  cube: Cube
}

const FaceComponent = ({ face, index }: { face: Face; index: number }) => (
  <div className={styles.faceWithIndex[index]}>
    {face.map((line, i) => (
      <div className={styles.line} key={i}>
        {line.map((square, j) => (
          <Square color={square} key={j} />
        ))}
      </div>
    ))}
  </div>
)

const PatternBase = ({ cube }: PatternProps) => {
  console.log(cube['L'])

  return (
    <div className={styles.cube}>
      {Object.keys(cube).map((face, i) => (
        <FaceComponent face={cube[face as keyof Cube]} index={i} />
      ))}
    </div>
  )
}

export const Pattern = memo(PatternBase)
