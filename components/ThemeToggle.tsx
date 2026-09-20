'use client';

import { SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';

type ThemeToggleProps = { className?: string };

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className={className ? `theme-toggle ${className}` : 'theme-toggle'}
      aria-label="Switch color theme"
      title={`Use ${nextTheme} theme`}
      onClick={() => setTheme(nextTheme)}
    >
      <SunMoon size={16} aria-hidden="true" />
      <span>Theme</span>
    </button>
  );
}
