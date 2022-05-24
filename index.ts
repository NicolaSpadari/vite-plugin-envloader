import type { Plugin } from "vite";

const portKeys = () => {
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
        name: "vite-plugin-env-loader",
        config() {
            return {
                define: portKeys(),
            };
        },
    };
};

export { EnvLoader };
export default EnvLoader;
