'use client';

import { useRef } from 'react';
import { useTheme } from './ThemeProvider';
import Icon from './Icon';

const themes = [
  { value: 'system', label: 'System', icon: 'monitor' },
  { value: 'light', label: 'Light', icon: 'sun' },
  { value: 'dark', label: 'Dark', icon: 'moon' },
];

export default function ThemeToggle() {
  const { theme, changeTheme } = useTheme();
  const toggleRef = useRef(null);

  return (
    <div ref={toggleRef} className="theme-toggle" role="group" aria-label="Color theme" data-active-theme={theme}>
      {themes.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={(event) => changeTheme(item.value, event.currentTarget)}
          className={`focus-ring theme-option ${theme === item.value ? 'theme-option-active' : ''}`}
          aria-pressed={theme === item.value}
          aria-label={`${item.label} theme`}
          title={`${item.label} theme`}
        >
          <Icon name={item.icon} size={14} strokeWidth={1.7} className="theme-icon" />
        </button>
      ))}
    </div>
  );
}
