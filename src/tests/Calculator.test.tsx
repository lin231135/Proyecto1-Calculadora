import { render, screen, fireEvent } from '@testing-library/react'
import Calculadora from '../components/Calculadora'

describe('Calculadora', () => {
  it('muestra los números presionados uno tras otro', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    expect(screen.getByTestId('display').textContent).toBe('123')
  })

  it('resetea el display tras presionar una operación', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('5'))
    expect(screen.getByTestId('display').textContent).toBe('5')
  })

  it('calcula resultado al presionar operación más de una vez', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('+'))
    expect(screen.getByTestId('display').textContent).toBe('7')
  })

  it('muestra el resultado al presionar "="', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('6'))
    fireEvent.click(screen.getByText('*'))
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display').textContent).toBe('42')
  })

  it('muestra ERROR si el resultado es negativo', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display').textContent).toBe('ERROR')
  })

  it('muestra decimal correctamente', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('5'))
    expect(screen.getByTestId('display').textContent).toBe('1.5')
  })

  it('muestra resultado decimal si aplica (ej. 5 / 2)', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('/'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display').textContent?.startsWith('2.5')).toBe(true)
  })

  it('muestra resultado del módulo', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('%'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display').textContent).toBe('3')
  })

  it('muestra ERROR al dividir por cero', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('/'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display').textContent).toBe('ERROR')
  })

  it('invierte el signo con el botón +/-', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('+/-'))
    expect(screen.getByTestId('display').textContent).toBe('ERROR')
  })

  it('limpia todo al presionar C', () => {
    render(<Calculadora />)
    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('C'))
    expect(screen.getByTestId('display').textContent).toBe('0')
  })
})