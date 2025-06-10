import useCalculator from '../hooks/useCalculator'
import Display from './Display'
import Keyboard from './Keyboard'

const Calculadora = () => {
  const { display, input } = useCalculator()

  return (
    <div style={{ width: '300px', margin: '2rem auto' }}>
      <Display value={display} />
      <Keyboard onKeyClick={input} />
    </div>
  )
}

export default Calculadora