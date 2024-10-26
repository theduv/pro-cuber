import {
  createContext,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { randomScrambleForEvent } from 'cubing/scramble'
import { noop } from 'lodash'

const STARTING_KEY = 'Space'

type TimerPageContextValue = {
  isPressingStartingKey: boolean
  isTimerRunning: boolean
  time: number
  currentScramble: string
  onResetTimesList: () => void
  timesList: string[]
}

export const TimerPageContext = createContext<TimerPageContextValue>({
  isPressingStartingKey: false,
  isTimerRunning: false,
  time: 0,
  currentScramble: '',
  onResetTimesList: noop,
  timesList: [],
})

type TimerPageContextProviderProps = PropsWithChildren

const getTimesFromLocalStorage = () => {
  const timesFromLocalStorage = localStorage.getItem('times')
  const data = timesFromLocalStorage ? timesFromLocalStorage.split(';') : []

  console.log({ data })
  return data.map((time) => parseFloat(time).toFixed(2))
}

const saveTimeToLocalStorage = (time: number) => {
  const timesFromLocalStorage = localStorage.getItem('times')
  const parsedTimesFromLocalStorage = timesFromLocalStorage
    ? timesFromLocalStorage.split(';')
    : []

  const newTimesArray = [...parsedTimesFromLocalStorage]

  newTimesArray.push((time / 1000).toFixed(2).toString())

  localStorage.setItem('times', newTimesArray.join(';'))
}

const onRemoveLastTime = () => {
  const timesFromLocalStorage = localStorage.getItem('times')
  const parsedTimesFromLocalStorage = timesFromLocalStorage
    ? timesFromLocalStorage.split(';')
    : []

  parsedTimesFromLocalStorage.pop()

  localStorage.setItem('times', parsedTimesFromLocalStorage.join(';'))
}

const TimerPageContextProviderBase = ({
  children,
}: TimerPageContextProviderProps) => {
  const [time, setTime] = useState(0)
  const [isPressingStartingKey, setIsPressingStartingKey] = useState(false)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [currentScramble, setCurrentScramble] = useState('')
  const [timesList, setTimesList] = useState<string[]>([])

  const requestRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const isPressingKeyRef = useRef<boolean>(false)

  const onResetTimesList = () => {
    localStorage.removeItem('times')
    updateTimeFromLocalStorage()
  }

  const updateScramble = useCallback(async () => {
    const res = await randomScrambleForEvent('333')

    setCurrentScramble(res.toString())
  }, [setCurrentScramble])

  const updateTimeFromLocalStorage = useCallback(() => {
    const timesFromLocalStorage = getTimesFromLocalStorage()

    setTimesList(timesFromLocalStorage)
  }, [setTimesList])

  useEffect(() => {
    updateScramble()
    updateTimeFromLocalStorage()
  }, [])

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
    async (e: KeyboardEvent) => {
      setIsPressingStartingKey(false)

      const keyPressedCode = e.code
      const oldIsPressingKey = isPressingKeyRef.current

      isPressingKeyRef.current = false

      if (keyPressedCode !== STARTING_KEY) return

      console.log(oldIsPressingKey)

      if (oldIsPressingKey || isTimerRunning) {
        return
      }

      setTime(0)
      setIsTimerRunning(true)
      requestRef.current = requestAnimationFrame(animate)
    },
    [isPressingKeyRef, isTimerRunning, setIsPressingStartingKey, animate],
  )

  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      const keyPressedCode = e.code

      console.log(keyPressedCode)

      if (e.ctrlKey && e.key === 'Backspace') {
        onRemoveLastTime()
        updateTimeFromLocalStorage()
        return
      }

      if (keyPressedCode === STARTING_KEY) setIsPressingStartingKey(true)

      if (!isTimerRunning || !requestRef.current) return

      cancelAnimationFrame(requestRef.current)
      saveTimeToLocalStorage(time)
      updateTimeFromLocalStorage()

      isPressingKeyRef.current = true
      requestRef.current = null
      previousTimeRef.current = null
      setIsTimerRunning(false)
      updateScramble()
    },
    [isPressingKeyRef, setIsPressingStartingKey, isTimerRunning, time],
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
    currentScramble,
    onResetTimesList,
    timesList,
  }

  return (
    <TimerPageContext.Provider value={contextValue}>
      {children}
    </TimerPageContext.Provider>
  )
}

export const TimerPageContextProvider = memo(TimerPageContextProviderBase)
