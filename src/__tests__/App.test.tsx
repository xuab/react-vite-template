import { screen } from '@testing-library/react'
import { App } from '@/App'
import { render } from '@/test-utils'

test('render headings', async () => {
  render(<App />)
  const link = screen.getByRole('link')
  expect(link).toHaveTextContent('React')
})
