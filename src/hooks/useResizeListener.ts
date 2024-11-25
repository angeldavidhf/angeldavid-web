import { useEffect } from "react";

const useResizeListener = (onResize: () => void, delay = 100): void => {
    useEffect(() => {
        let resizeTimeout: NodeJS.Timeout;

        const handleResize = () => {
            document.body.classList.add("is-resizing");
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                document.body.classList.remove("is-resizing");
                onResize();
            }, delay);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [onResize, delay]);
}

export default useResizeListener;