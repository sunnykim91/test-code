import type { Preview } from "@storybook/react";
import "../src/reset.css";
import "../src/figma-variables.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
