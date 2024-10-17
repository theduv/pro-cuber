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
  time: number
}

export const TimerPageContext = createContext<TimerPageContextValue>({
  time: 0,
})

type TimerPageContextProviderProps = PropsWithChildren

const TimerPageContextProviderBase = ({
  children,
}: TimerPageContextProviderProps) => {
  const [time, setTime] = useState(0)
  const requestRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const isPressingKeyRef = useRef<boolean>(false)
  const isRunningRef = useRef<boolean>(false)

  const animate = (time: number) => {
    if (previousTimeRef.current !== null) {
      const deltaTime = time - previousTimeRef.current
      setTime((prevTime) => prevTime + deltaTime)
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  const startTimer = useCallback(
    (e: KeyboardEvent) => {
      const keyPressedCode = e.code

      if (keyPressedCode !== STARTING_KEY) return

      if (isPressingKeyRef.current) return

      requestRef.current = requestAnimationFrame(animate)
      isRunningRef.current = true
      isPressingKeyRef.current = false
    },
    [isPressingKeyRef, isRunningRef, animate],
  )

  const stopTimer = useCallback(() => {
    if (!isRunningRef.current) return

    isPressingKeyRef.current = true

    cancelAnimationFrame(requestRef.current!)
    requestRef.current = null
    previousTimeRef.current = null
    isRunningRef.current = false
  }, [isPressingKeyRef, isRunningRef])

  useEffect(() => {
    window.addEventListener('keydown', stopTimer)
    window.addEventListener('keyup', startTimer)

    return () => {
      window.removeEventListener('keydown', stopTimer)
      window.removeEventListener('keyup', startTimer)
    }
  }, [stopTimer, startTimer])

  const contextValue = {
    time,
  }

  return (
    <TimerPageContext.Provider value={contextValue}>
      {children}
    </TimerPageContext.Provider>
  )
}

export const TimerPageContextProvider = memo(TimerPageContextProviderBase)
