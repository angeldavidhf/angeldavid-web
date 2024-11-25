import { useEffect } from "react";

const useSidebar = (toggleSelector: string, sidebarSelector: string): void => {
    useEffect(() => {
        const toggle = document.querySelector(toggleSelector) as HTMLElement;
        const sidebar = document.querySelector(sidebarSelector) as HTMLElement;

        const handleToggle = (event: MouseEvent) => {
            event.preventDefault();
            sidebar.classList.toggle("inactive");
        };

        toggle?.addEventListener("click", handleToggle);
        return () => toggle?.removeEventListener("click", handleToggle);
    }, [toggleSelector, sidebarSelector]);
}

export default useSidebar;
