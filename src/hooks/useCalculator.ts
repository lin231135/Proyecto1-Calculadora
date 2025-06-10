import { useState } from 'react'

const MAX_LENGTH = 9
const MAX_VALUE = 999999999

const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [prev, setPrev] = useState<number | null>(null)
  const [op, setOp] = useState<string | null>(null)
  const [reset, setReset] = useState(false)

  const input = (key: string) => {
    if (display === 'ERROR') return

    if ('0123456789'.includes(key)) {
      setDisplay(prevDisplay => {
        if (reset) {
          setReset(false)
          return key
        }
        if (prevDisplay === '0') return prevDisplay.length < MAX_LENGTH ? key : prevDisplay
        if (prevDisplay.length >= MAX_LENGTH) return prevDisplay
        return prevDisplay + key
      })
      setReset(false)
      return
    }

    if (key === '.') {
      if (reset) {
        setDisplay('0.')
        setReset(false)
        return
      }
      if (!display.includes('.') && display.length < MAX_LENGTH) {
        setDisplay(display + '.')
      }
      return
    }

    if (key === '+/-') {
      if (display === '0' || display === '0.') return
      const isNegative = display.startsWith('-')
      const newVal = isNegative ? display.slice(1) : '-' + display
      if (newVal.length > MAX_LENGTH || Number(newVal) < 0) {
        setDisplay('ERROR')
      } else {
        setDisplay(newVal)
      }
      return
    }

    // NUEVO: Soporte para botón ⌫ (backspace)
    if (key === '⌫') {
      setDisplay(prevDisplay => {
        if (reset || prevDisplay === '0') {
          setReset(false)
          return '0'
        }
        if (prevDisplay.length === 1 || (prevDisplay.length === 2 && prevDisplay.startsWith('-'))) {
          return '0'
        }
        return prevDisplay.slice(0, -1)
      })
      setReset(false)
      return
    }

    if ('+-*/%'.includes(key)) {
      if (op && prev !== null && !reset) {
        compute()
        setOp(key)
        setReset(true)
        return
      }
      setPrev(Number(display))
      setOp(key)
      setReset(true)
      return
    }

    if (key === '=') compute()
    if (key === 'C') clear()
  }

  const compute = () => {
    if (op && prev !== null) {
      const curr = Number(display)
      let result = 0

      if (op === '+') result = prev + curr
      if (op === '-') result = prev - curr
      if (op === '*') result = prev * curr
      if (op === '/') result = curr === 0 ? NaN : prev / curr
      if (op === '%') result = curr === 0 ? NaN : prev % curr

      if (result < 0 || result > MAX_VALUE || isNaN(result)) {
        setDisplay('ERROR')
        setPrev(null)
        setOp(null)
        setReset(true)
        return
      }

      let resultStr = result.toString()
      if (resultStr.length > MAX_LENGTH) {
        if (resultStr.includes('.')) {
          resultStr = resultStr.slice(0, MAX_LENGTH)
        } else {
          setDisplay('ERROR')
          setPrev(null)
          setOp(null)
          setReset(true)
          return
        }
      }
      setDisplay(resultStr)
      setPrev(result)
      setOp(null)
      setReset(true)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPrev(null)
    setOp(null)
    setReset(false)
  }

  return { display, input }
}

export default useCalculator