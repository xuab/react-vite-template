import { act } from 'react-dom/test-utils'
import actualCreate, {
  StateCreator,
  State,
  SetState,
  GetState,
  StoreApi,
} from 'zustand'

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set<() => unknown>()

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = <TState extends State>(
  createState:
    | StateCreator<TState, SetState<TState>, GetState<TState>>
    | StoreApi<TState>,
) => {
  const store = actualCreate(createState)
  const initialState = store.getState()
  storeResetFns.add(() => store.setState(initialState, true))
  return store
}

// reset all stores after each test run
afterEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()))
})

export default create
