import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Boilerplate } from '../Boilerplate'; // Adjusted path
import styles from '../Boilerplate.module.scss';

describe('Boilerplate Component', () => {
  const defaultProps = {
    count: 0,
    setCount: vi.fn(),
    message: 'Test Message',
  };

  it('renders without crashing and displays main content area', () => {
    render(<Boilerplate {...defaultProps} />);
    // Check for the element with role="main"
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays the Vite and React logos and title', () => {
    render(<Boilerplate {...defaultProps} />);
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Vite \+ React/i })).toBeInTheDocument();
  });

  it('displays the initial count', () => {
    render(<Boilerplate {...defaultProps} />);
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
  });

  it('calls setCount when the button is clicked', () => {
    const mockSetCount = vi.fn();
    render(<Boilerplate {...defaultProps} setCount={mockSetCount} />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(mockSetCount).toHaveBeenCalledTimes(1);
    // Also test if the functional update form is called correctly
    expect(mockSetCount).toHaveBeenCalledWith(expect.any(Function));
  });

  it('displays the message prop', () => {
    render(<Boilerplate {...defaultProps} />);
    // Use a more specific query if possible, or ensure the text is unique enough
    expect(screen.getByText(`This is special message: ${defaultProps.message}`)).toBeInTheDocument();
  });

  it('renders "Read the docs" link', () => {
    render(<Boilerplate {...defaultProps} />);
    expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();
  });

  it('applies the card style from CSS module to the main content area', () => {
    render(<Boilerplate {...defaultProps} />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass(styles.card);
  });

});
