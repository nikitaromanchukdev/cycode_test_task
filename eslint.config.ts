import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import pluginImport from "eslint-plugin-import";

export default defineConfig(
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        plugins: {
            js,
            react: pluginReact,
        },

        extends: [
            "js/recommended",
            pluginImport.flatConfigs.recommended,
            pluginImport.flatConfigs.typescript,
            pluginReact.configs.flat.recommended,
        ],

        ignores: ["dist", "node_modules"],
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                project: ["./tsconfig.json"],
                ecmaFeatures: { jsx: true },
            },
        },
    },
);
