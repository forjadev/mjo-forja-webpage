/* .storybook/DocsContainer.tsx */
import {
  DocsContainer as BaseContainer,
  DocsContainerProps as BaseContainerProps,
} from "@storybook/blocks"
import React, { PropsWithChildren } from "react"
import { useDarkMode } from "storybook-dark-mode"
import { darkTheme, lightTheme } from "./themes"

export const DocsContainer = (props: PropsWithChildren<BaseContainerProps>) => {
  const dark = useDarkMode()
  return (
    <BaseContainer
      context={props.context}
      theme={dark ? darkTheme : lightTheme}
    >
      {props.children}
    </BaseContainer>
  )
}
