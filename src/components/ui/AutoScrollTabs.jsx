import React, { Children, cloneElement, isValidElement, useState } from 'react';
import './AutoScrollTabs.css';

export default function AutoScrollTabs({ children, className = '' }) {
  const [isPointerDown, setIsPointerDown] = useState(false);
  const handleKeyDown = (event) => {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!keys.includes(event.key)) return;

    const tabs = [...event.currentTarget.querySelectorAll('[role="tablist"] [role="tab"]')];
    const currentIndex = tabs.indexOf(event.target);
    if (currentIndex < 0 || tabs.length === 0) return;

    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? tabs.length - 1
        : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;

    event.preventDefault();
    tabs[nextIndex].focus();
    tabs[nextIndex].click();
  };
  const duplicateChildren = Children.map(children, (child) => (
    isValidElement(child)
      ? cloneElement(child, {
        id: undefined,
        'aria-controls': undefined,
        tabIndex: -1,
      })
      : child
  ));

  return (
    <div
      className={`auto-scroll-tabs ${className}`.trim()}
      onPointerDown={() => setIsPointerDown(true)}
      onPointerUp={() => setIsPointerDown(false)}
      onPointerCancel={() => setIsPointerDown(false)}
      onKeyDown={handleKeyDown}
    >
      <div
        className="auto-scroll-tabs__track"
        style={{ animationPlayState: isPointerDown ? 'paused' : undefined }}
      >
        <div className="auto-scroll-tabs__group" role="tablist">
          {children}
        </div>
        <div
          className="auto-scroll-tabs__group auto-scroll-tabs__group--duplicate"
          role="presentation"
          aria-hidden="true"
          inert
        >
          {duplicateChildren}
        </div>
      </div>
    </div>
  );
}
