type Props = { label: string; onClick: (v: string) => void }
const Key = ({ label, onClick }: Props) => {
  const isOp = ['+', '-', '*', '/', '=', '%'].includes(label)
  const isSp = ['C', '+/-'].includes(label)
  return (
    <button
      onClick={() => onClick(label)}
      style={{
        padding: '1.2rem', fontSize: '1.5rem',
        backgroundColor: isOp ? '#ff9500' : isSp ? '#a6a6a6' : '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        aspectRatio: '1/1'
      }}
    >{label}</button>
  )
}
export default Key