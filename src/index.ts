import type { Plugin } from "vite";
import { name } from "../package.json";

const loadEnvKeys = () => {
    const VITE_ENV: Record<string, string> = {};

    Object.keys(process.env).forEach((key) => {
        if (key.startsWith("VITE_")) {
            VITE_ENV[`import.meta.env.${key}`] = process.env[key]!;
        }
    });

    return VITE_ENV;
};

const EnvLoader = (): Plugin => {
    return {
        name,
        enforce: "pre",
        config() {
            return {
                define: loadEnvKeys()
            };
        }
    };
};

export default EnvLoader;
