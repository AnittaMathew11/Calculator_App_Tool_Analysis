import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, beforeEach } from '@jest/globals'
import '@testing-library/jest-dom'
import Calculator from './Calculator'

describe('Calculator', () => {
  beforeEach(() => {
    render(<Calculator />)
  })

  test('renders Calculator component', () => {
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  test('performs addition', () => {
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  test('performs subtraction', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('−'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  test('performs multiplication', () => {
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('×'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByText('12')).toBeInTheDocument()
  })

  test('performs division', () => {
    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('÷'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  test('performs square root', () => {
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('√x'))
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  test('performs power', () => {
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('x^y'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByText('8')).toBeInTheDocument()
  })
})
