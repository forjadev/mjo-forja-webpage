import { create } from "@storybook/theming"

export const lightTheme = create({
  base: "light",
  appBg: "#EFF2F8",
  barBg: "#DCE3F1",
  colorPrimary: "#f77818",
  colorSecondary: "#f77818",
  appContentBg: "#EFF2F8",
  inputBg: "#DCE3F1",
  buttonBg: "#DCE3F1",
  booleanBg: "#DCE3F1",
  brandTitle: `<div style="display: flex; gap: 1rem; align-items: center"><img src="/logo.svg" width="50px" height="50px"/> <span>Storybook</span></div>`,
})

export const darkTheme = create({
  base: "dark",
  appBg: "#191B21",
  barBg: " #1F2025",
  colorPrimary: "#0a978c",
  colorSecondary: "#0a978c",
  appContentBg: "#191B21",
  inputBg: "#1F2025",
  buttonBg: "#1F2025",
  booleanBg: "#1F2025",
  brandTitle: `<div style="display: flex; gap: 1rem; align-items: center"><img src="/logo-blue.svg" width="50px" height="50px"/> <span>Storybook</span></div>`,
})
