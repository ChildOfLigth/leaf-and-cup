import { useEffect } from "react";

export default function useScreenResize(callback: () => void | boolean) {
    useEffect(() => {
        callback();

        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    }, [callback]);
}