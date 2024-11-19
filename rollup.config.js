import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

export default [
    {
        input: "src/index.ts",
        output: {
            file: "dist/index.js",
            format: "cjs",
        },
        plugins: [resolve(), commonjs()],
        external: ["react"],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
];
