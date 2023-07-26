import useShortcut from '@/hooks/useShortcut';
import useTheme from '@/hooks/useTheme';
import useSlide from '@/hooks/useSlide'
import { useState } from 'react';

export default function Shortcut(){
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
  
    useShortcut('KeyD', () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    });
  
    // useShortcut('KeyQ', () => {
    //   setOpen(!open);
    //   return open;
    // });
    return null;
}