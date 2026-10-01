import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SignIn from '@/app/[locale]/signin/page';

// Mock Next.js router
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock fetch API
global.fetch = vi.fn();

describe('SignIn Component', () => {
  it('renders sign in form correctly', () => {
    render(<SignIn />);
    
    expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('shows error on failed login', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Invalid credentials' })
    });

    render(<SignIn />);
    
    // Fill the form using accessible labels
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'corp@plastiq.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpass' } });
    
    // Submit
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });
  });

  it('redirects to dashboard on successful login', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: 'mock-corp-token', user: { email: 'corp@plastiq.com' } })
    });

    render(<SignIn />);
    
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'corp@plastiq.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/en/dashboard');
      expect(localStorage.getItem('plastiq_token')).toBe('mock-corp-token');
    });
  });
});
