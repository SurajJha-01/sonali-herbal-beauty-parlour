/**
 * Button.jsx — Reusable button / link component.
 * Variants: primary | outline | ghost | whatsapp | phone
 * Renders an <a> if href is provided, otherwise a <button>.
 * Returns null for whatsapp/phone variants when the link is not configured.
 */
import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  disabled,
  className = '',
  fullWidth = false,
  size = 'md',
  external = false,
  ...rest
}) {
  if (!href && !onClick && !children) return null;

  // Hide whatsapp/phone buttons if the link is null (not configured)
  if ((variant === 'whatsapp' || variant === 'phone') && !href) return null;

  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  if (href) {
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
