import create, { GetState, SetState, StoreApi, Mutate } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { name } from '../../package.json'
import { immer } from './middlewares'

type State = object

export const useStore = create<
  State,
  SetState<State>,
  GetState<State>,
  Mutate<
    StoreApi<State>,
    [
      ['zustand/subscribeWithSelector', never],
      ['zustand/persist', Partial<State>],
      ['zustand/devtools', never],
    ]
  >
>(
  devtools(
    subscribeWithSelector(
      persist(
        immer(() => ({})),
        {
          name,
          version: 0,
        },
      ),
    ),
  ),
)
