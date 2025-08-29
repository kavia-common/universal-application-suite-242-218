import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";

/**
 * PUBLIC_INTERFACE
 * ESLint flat config for the project using React and Prettier compatibility.
 */
export default [
  js.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: pluginImport
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"]
        }
      ]
    }
  }
];
