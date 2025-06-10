type Props = { value: string }
const Display = ({ value }: Props) => (
  <div
    data-testid="display"
    style={{
      background: '#000',
      color: '#fff',
      fontSize: '3rem',
      padding: '1rem',
      textAlign: 'right',
      borderRadius: '0.5rem',
      minHeight: '80px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}>
    {value}
  </div>
)
export default Display