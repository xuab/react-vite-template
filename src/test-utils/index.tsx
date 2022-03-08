import { FC, ReactElement } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  QueryClientConfig,
} from 'react-query'
import { render, RenderOptions } from '@testing-library/react'
import { renderHook, RenderHookOptions } from '@testing-library/react-hooks'
import { merge } from 'lodash'
import { queryClientConfig as originalConfig } from '@/providers/QueryProvider'

const queryClientConfig: QueryClientConfig = merge(originalConfig, {
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
  },
})

export const queryClient = new QueryClient(queryClientConfig)

const wrapper: FC = (props) => {
  return <QueryClientProvider client={queryClient} {...props} />
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper, ...options })

const customRenderHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: Omit<RenderHookOptions<TProps>, 'wrapper'>,
) => renderHook(callback, { wrapper, ...options })

export { customRender as render, customRenderHook as renderHook }
