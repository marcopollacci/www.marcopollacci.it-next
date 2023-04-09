import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "3smdj3",
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
