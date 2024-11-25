type Breakpoint = { [key: string]: string[] | string };

const useBreakpoints = (breakpoints: Breakpoint): void => {
    Object.keys(breakpoints).forEach((key) => {
        const value = breakpoints[key];
        if (typeof value === "string") {
            document.documentElement.style.setProperty(`--${key}`, value);
        } else {
            const [min, max] = value;
            const query = `(min-width: ${min || "0px"}) and (max-width: ${max || "10000px"})`;
            document.documentElement.style.setProperty(`--${key}`, query);
        }
    });
}

export default useBreakpoints;

