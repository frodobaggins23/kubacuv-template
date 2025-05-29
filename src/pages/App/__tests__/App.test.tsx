import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
// App is dynamically imported in tests

// Mock the Boilerplate component and capture props
let capturedBoilerplateProps: any = {};
vi.mock('@/components/boilerplate', () => ({
  Boilerplate: vi.fn((props) => {
    capturedBoilerplateProps = props;
    return (
      <div data-testid="mock-boilerplate">
        <span>Count: {props.count}</span>
        <button onClick={() => props.setCount((c: number) => c + 1)}>Increment</button>
        <span>Message: {props.message}</span>
      </div>
    );
  }),
}));

// Mock the config module
const mockGetAppMessage = vi.fn();
vi.mock('@/config', () => ({
  getAppMessage: mockGetAppMessage,
}));

describe('App Component', () => {
  beforeEach(() => {
    vi.resetModules(); // Reset modules to ensure fresh import of App.tsx
    capturedBoilerplateProps = {}; // Reset captured props
    mockGetAppMessage.mockRestore(); // Restore mockGetAppMessage to default behavior or clear calls

    // Re-apply mocks that might be cleared by resetModules if they are not top-level hoisted vi.mock
    // For vi.mock at the top level, this might not be strictly necessary but good for clarity.
    vi.mock('@/components/boilerplate', () => ({
      Boilerplate: vi.fn((props) => {
        capturedBoilerplateProps = props;
        return (
          <div data-testid="mock-boilerplate">
            <span>Count: {props.count}</span>
            <button onClick={() => props.setCount((c: number) => c + 1)}>Increment</button>
            <span>Message: {props.message}</span>
          </div>
        );
      }),
    }));
    vi.mock('@/config', () => ({
      getAppMessage: mockGetAppMessage,
    }));
  });

  it('renders without crashing and includes the mocked Boilerplate', async () => {
    mockGetAppMessage.mockReturnValue('Default for this test');
    const { App } = await import('../App');
    render(<App />);
    expect(screen.getByTestId('mock-boilerplate')).toBeInTheDocument();
  });

  it('passes initial count (0) to Boilerplate', async () => {
    mockGetAppMessage.mockReturnValue('Default for this test');
    const { App } = await import('../App');
    render(<App />);
    expect(capturedBoilerplateProps.count).toBe(0);
  });

  it('passes the VITE_MESSAGE from mocked config to Boilerplate', async () => {
    mockGetAppMessage.mockReturnValue('Mocked Test Message from config');
    const { App } = await import('../App');
    render(<App />);
    expect(capturedBoilerplateProps.message).toBe('Mocked Test Message from config');
  });

  it('updates count in Boilerplate when its setCount is effectively called', async () => {
    mockGetAppMessage.mockReturnValue('Default for this test');
    const { App } = await import('../App');
    render(<App />);
    
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    });
    
    expect(capturedBoilerplateProps.count).toBe(1);
  });

  it('passes a fallback message if getAppMessage returns the fallback', async () => {
    mockGetAppMessage.mockReturnValue('Fill in .env.VITE_MESSAGE'); // Simulate fallback
    const { App } = await import('../App');
    render(<App />);
    expect(capturedBoilerplateProps.message).toBe('Fill in .env.VITE_MESSAGE');
  });
});
