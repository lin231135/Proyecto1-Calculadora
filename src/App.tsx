import useCalculator from './hooks/useCalculator'
import Display from './components/Display'
import Keyboard from './components/Keyboard'

const App = () => {
  const { display, input } = useCalculator()

  return (
    <div style={{ width: '300px', margin: '2rem auto' }}>
      <Display value={display} />
      <Keyboard onKeyClick={input} />
    </div>
  )
}

export default App