import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { cn } from './ui/utils';
import { Check, AlertCircle } from 'lucide-react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, success, size = 'md', icon, type = 'text', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const combinedRef = ref || inputRef;

    useEffect(() => {
      if (combinedRef && typeof combinedRef !== 'function') {
        const input = combinedRef.current;
        if (input) {
          setHasValue(input.value.length > 0);
        }
      }
    }, [combinedRef, props.value, props.defaultValue]);

    const inputClasses = cn(
      'input-micro',
      error && 'input-invalid',
      success && 'input-valid',
      icon && 'pl-11',
      size === 'sm' && 'px-3 py-2 text-sm',
      size === 'md' && 'px-4 py-3 text-base',
      size === 'lg' && 'px-5 py-4 text-lg',
      className
    );

    const labelClasses = cn(
      'input-label',
      size === 'sm' && 'text-sm top-2 left-3',
      size === 'md' && 'text-base top-3 left-4', 
      size === 'lg' && 'text-lg top-4 left-5',
      (isFocused || hasValue) && 'input-label-focused',
      icon && 'input-label-icon',
      error && 'text-red-500',
      success && 'text-green-500'
    );

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    return (
      <div className="relative mb-6">
        <div className="relative">
          {icon && (
            <div className={cn(
              'absolute left-0 top-0 flex items-center justify-center text-slate-grey transition-colors duration-200',
              size === 'sm' && 'w-8 h-8',
              size === 'md' && 'w-11 h-11',
              size === 'lg' && 'w-14 h-14',
              isFocused && 'text-oxford-blue'
            )}>
              {icon}
            </div>
          )}
          
          <input
            ref={combinedRef}
            type={type}
            className={inputClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          
          {label && (
            <label className={labelClasses}>
              {label}
            </label>
          )}
          
          {/* Validation Icons */}
          {(success || error) && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-200">
              {success && <Check size={20} className="text-green-500" />}
              {error && <AlertCircle size={20} className="text-red-500" />}
            </div>
          )}
        </div>
        
        {/* Helper Text / Error Message */}
        {(helperText || error) && (
          <div className={cn(
            'mt-2 text-sm font-montserrat transition-colors duration-200',
            error ? 'text-red-500' : 'text-slate-grey'
          )}>
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';