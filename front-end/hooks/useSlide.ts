import { useEffect, useState } from "react";

export default function useSlide(){
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(!open);
      }, [open]);
    return open;
}