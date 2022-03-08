// Polyfill 'window.fetch'
import { setLogger } from 'react-query'
// Extend Jest "expect" with Testing Library assertions
import '@testing-library/jest-dom/extend-expect'
import 'whatwg-fetch'
import { server } from '@/test-utils/server'
import { queryClient } from '.'

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
})

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
  queryClient.clear()
})

afterAll(() => {
  server.close()
})
