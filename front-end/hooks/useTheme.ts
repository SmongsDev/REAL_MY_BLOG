import { useTheme as useNextThemes } from 'next-themes';
import { useEffect, useState } from 'react';

export default function useTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useNextThemes();

  useEffect(() => {
    setMounted(true);
  }, []);
  return {
    theme: mounted ? resolvedTheme : undefined,
    setTheme,
  };
}