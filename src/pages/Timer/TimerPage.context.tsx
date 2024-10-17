import {
  createContext,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

const STARTING_KEY = 'Space'

type TimerPageContextValue = {
  isPressingStartingKey: boolean
  isTimerRunning: boolean
  time: number
}

export const TimerPageContext = createContext<TimerPageContextValue>({
  isPressingStartingKey: false,
  isTimerRunning: false,
  time: 0,
})

type TimerPageContextProviderProps = PropsWithChildren

const TimerPageContextProviderBase = ({
  children,
}: TimerPageContextProviderProps) => {
  const [time, setTime] = useState(0)
  const [isPressingStartingKey, setIsPressingStartingKey] = useState(false)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  const requestRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const isPressingKeyRef = useRef<boolean>(false)

  const animate = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== null) {
        const deltaTime = time - previousTimeRef.current
        setTime((prevTime) => prevTime + deltaTime)
      }

      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    },
    [previousTimeRef, setTime],
  )

  const keyupHandler = useCallback(
    (e: KeyboardEvent) => {
      setIsPressingStartingKey(false)

      const keyPressedCode = e.code

      const oldIsPressingKey = isPressingKeyRef.current

      isPressingKeyRef.current = false

      if (keyPressedCode !== STARTING_KEY) return

      if (oldIsPressingKey || isTimerRunning) {
        return
      }

      setTime(0)
      requestRef.current = requestAnimationFrame(animate)

      setIsTimerRunning(true)
    },
    [isPressingKeyRef, isTimerRunning, setIsPressingStartingKey, animate],
  )

  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      const keyPressedCode = e.code

      if (keyPressedCode === STARTING_KEY) setIsPressingStartingKey(true)

      if (!isTimerRunning || !requestRef.current) return

      cancelAnimationFrame(requestRef.current)

      isPressingKeyRef.current = true
      requestRef.current = null
      previousTimeRef.current = null
      setIsTimerRunning(false)
    },
    [isPressingKeyRef, setIsPressingStartingKey, isTimerRunning],
  )

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler)
    window.addEventListener('keyup', keyupHandler)

    return () => {
      window.removeEventListener('keydown', keydownHandler)
      window.removeEventListener('keyup', keyupHandler)
    }
  }, [keydownHandler, keyupHandler])

  const contextValue = {
    isPressingStartingKey,
    isTimerRunning,
    time,
  }

  console.log(isPressingKeyRef.current)

  return (
    <TimerPageContext.Provider value={contextValue}>
      {children}
    </TimerPageContext.Provider>
  )
}

export const TimerPageContextProvider = memo(TimerPageContextProviderBase)
