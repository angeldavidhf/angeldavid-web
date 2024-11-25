import { useEffect } from "react";

const useObjectFitPolyfill = (selector: string): void => {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            const img = element.querySelector("img");
            if (img) {
                const src = img.getAttribute("src");
                if (src) {
                    (element as HTMLElement).style.backgroundImage = `url(${src})`;
                    (element as HTMLElement).style.backgroundSize = "cover";
                    img.style.display = "none";
                }
            }
        });
    }, [selector]);
}

export default useObjectFitPolyfill;
