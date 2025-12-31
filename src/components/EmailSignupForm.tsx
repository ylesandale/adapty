'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight } from 'lucide-react';

interface EmailSignupFormProps {
  /** Form submission handler */
  onSubmit?: (email: string) => void;
  /** Placeholder text for email input */
  placeholder?: string;
  /** Submit button text */
  buttonText?: string;
}

/**
 * Email signup form component with validation
 * @component
 */
export const EmailSignupForm: React.FC<EmailSignupFormProps> = ({
  onSubmit,
  placeholder = 'Email адрес',
  buttonText = 'Начать',
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Пожалуйста, введите email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Пожалуйста, введите корректный email');
      return;
    }

    if (onSubmit) {
      onSubmit(email);
    } else {
      // Default behavior: redirect to app registration
      window.location.href = `https://app.adapty.io/registration-by-email/?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex-1">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? 'border-red-500' : ''}
            aria-label="Email address"
            aria-invalid={!!error}
            aria-describedby={error ? 'email-error' : undefined}
          />
          {error && (
            <p
              id="email-error"
              className="mt-2 text-sm text-red-600"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
        <Button type="submit" size="default" className="md:w-auto w-full">
          {buttonText}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

