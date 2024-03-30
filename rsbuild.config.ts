import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  tools: {
    swc: {
      jsc: {
        experimental: {
          plugins: [
            [
              "@swc/plugin-styled-jsx",
              {
                plugins: ["@styled-jsx/plugin-sass"],
              },
            ],
          ],
        },
      },
    },
  },
});
