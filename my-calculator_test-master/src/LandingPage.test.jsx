import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from '@jest/globals';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  test('renders LandingPage component', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByText('Welcome to My App')).toBeInTheDocument();
    expect(screen.getByText('Calculator')).toBeInTheDocument();
    expect(screen.getByText('Notepad')).toBeInTheDocument();
  });
});
