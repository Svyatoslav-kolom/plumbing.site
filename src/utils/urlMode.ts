// utils/urlMode.ts
import { useSearchParams } from "react-router-dom";

export type Mode = "design" | "renovation";

// const DEFAULT_MODE: Mode = "renovation";

/**
 * Отримати mode з query параметрів
 */
export const getModeFromParams = (params: URLSearchParams): Mode => {
    const mode = params.get("mode");
    return mode === "design" ? "design" : "renovation";
};

/**
 * Хук для зчитування та оновлення mode в URL
 */
export const useMode = (): [Mode, (mode: Mode) => void] => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentMode: Mode = getModeFromParams(searchParams);

    const setMode = (mode: Mode) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("mode", mode);
        setSearchParams(newParams);

    };

    return [currentMode, setMode];
};
