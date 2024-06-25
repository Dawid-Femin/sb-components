// import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import styles from "rollup-plugin-styles";
// import autoprefixer from "autoprefixer";
// import env from "postcss-preset-env";
// import image from "@rollup/plugin-image";
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import pkg from "./package.json" assert { type: "json" };

export default [
  {
    // Entry point for the main bundle
    input: "src/index.ts",
    output: [
      {
        // Output configuration
        file: pkg.main,
        format: "es",
        sourcemap: true,
        name: "common-components",
        interop: "default",
      },
    ],
    // Exclude external dependencies from the bundle
    external: ["react", "react-dom", "react-router-dom", "formik"],
    plugins: [
      // Plugin to handle image imports
      // image(),
      // Plugin to handle styles with SCSS support
      styles({
        sass: {
          additionalData: `
            @import "src/assets/styles/bootstrap-reboot.scss";
            @import "src/assets/styles/benefit-systems/bootstrap.scss";
          `,
        },
        import: true,
        extract: true,
        modules: true,
        autoModules: true,
        include: "src/**/*.scss",
        plugins: [],
      }),
      // Plugin to handle TypeScript
      typescript({ tsconfig: "./tsconfig.json" }),
      // Plugin to resolve node modules
      // Plugin to convert CommonJS modules to ES6
      commonjs(),
      resolve(),
      typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
      // postcss({ extensions: ['.css'], inject: true, extract: false }),
    ],
  },
  {
    // Entry point for the type definitions
    input: "dist/es/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    // Exclude certain file types from the type definitions output
    external: [/\.svg$/, /\.s?css$/, /\.png$/, /\.webp$/],
    plugins: [dts()],
  },
];
