import Key from './Key'
const keys = [
  'C', '⌫', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='
]
const Keyboard = ({ onKeyClick }: { onKeyClick: (v: string) => void }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '0.75rem',
      marginTop: '1rem'
    }}
  >
    {keys.map(k => (
      <Key key={k} label={k} onClick={onKeyClick} />
    ))}
  </div>
)
export default Keyboard