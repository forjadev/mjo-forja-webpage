import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { DocsContainer } from "./docsContainer";
import { darkTheme, lightTheme } from "./themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      disabled: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: { container: DocsContainer },
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
      stylePreview: true,
      darkClass: "dark",
      lightClass: "light",
      classTarget: "html",
    },
  },
};

export default preview;
