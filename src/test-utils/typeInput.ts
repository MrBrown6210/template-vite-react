import { fireEvent } from '@testing-library/react'
export const typeInput = (element: HTMLElement, text: string) => {
  fireEvent.change(element, {
    target: {
      value: text
    }
  })
}
