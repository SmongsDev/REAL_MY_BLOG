import useShortcut from '@/hooks/useShortcut';
import useTheme from '@/hooks/useTheme';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function Shortcut(){
	  const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();
  
    useShortcut('KeyD', () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    });

    useShortcut('KeyL', () => {
      if(session) router.push('/api/auth/signout')
      else router.push('/login')
    });
  
    // useShortcut('KeyQ', () => {
    //   setOpen(!open);
    //   return open;
    // });
    return null;
}