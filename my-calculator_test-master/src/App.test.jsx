import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { describe, test, expect, beforeEach } from '@jest/globals'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })

  test('renders App component', () => {
    expect(screen.getByText('My App')).toBeInTheDocument()
  })
})
