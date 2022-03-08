import { FC } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  QueryClientConfig,
} from 'react-query'

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      keepPreviousData: true,
      notifyOnChangeProps: 'tracked',
    },
  },
}

export const queryClient = new QueryClient(queryClientConfig)

export const QueryProvider: FC = (props) => {
  return <QueryClientProvider client={queryClient} {...props} />
}
