import { useEffect } from 'react';

const useLockBodyScroll = (locked: boolean) => {
    useEffect(() => {
        document.body.style.overflow = locked ? 'hidden' : 'auto';
    }, [locked]);
};

export default useLockBodyScroll;
