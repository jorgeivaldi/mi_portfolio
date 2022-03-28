import { Global } from '@mantine/core'
import React from 'react'

export const GlobalStyles = () => {
  return (
    <Global
        styles={(theme) => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          body: {
            margin: 0,
            ...theme.fn.fontStyles(),
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            lineHeight: theme.lineHeight,
          },
        })}
      />
  )
}
