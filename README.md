# React-preparation

A comprehensive demonstration of React hooks including the latest React 19 features.

## Project Structure

The project demonstrates various React hooks organized into categories:

### State Management Hooks

- [`UseStateHook`](src/components/hooks/state/UseStateHook/UseStateHook.tsx) - Basic state management with counter example

  - **Usage**: Demonstrates how to use the `useState` hook to manage state in a functional component. The example includes a simple counter that increments and decrements a value.
  - **Code Breakdown**:

    ```typescript
    const [count, setCount] = useState(0); // Initializes state with 0
    const increment = () => setCount(count + 1); // Function to increment count
    const decrement = () => setCount(count - 1); // Function to decrement count
    ```

- [`UseReducerHook`](src/components/hooks/state/UseReducerHook/UseReducerHook.tsx) - Complex state management with actions

  - **Usage**: Shows how to use the `useReducer` hook for more complex state management scenarios. The example includes a counter with actions to increment, decrement, and reset the value.
  - **Code Breakdown**:

    ```typescript
    const initialState = { count: 0 };
    function reducer(state, action) {
      switch (action.type) {
        case "increment":
          return { count: state.count + 1 };
        case "decrement":
          return { count: state.count - 1 };
        case "reset":
          return initialState;
        default:
          throw new Error();
      }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    ```

### Context Hooks

- [`UseContextHook`](src/components/hooks/context/UseContextHook/UseContextHook.tsx) - Theme switching using context

  - **Usage**: Demonstrates the `useContext` hook to consume a context value. The example includes a theme switcher that toggles between light and dark modes.
  - **Code Breakdown**:

    ```typescript
    const ThemeContext = createContext("light");
    const theme = useContext(ThemeContext); // Consumes the context value
    ```

### Ref Hooks

- [`UseRefHook`](src/components/hooks/ref/UseRefHook/UseRefHook.tsx) - Form input management

  - **Usage**: Shows how to use the `useRef` hook to manage focus and value of a form input element.
  - **Code Breakdown**:

    ```typescript
    const inputRef = useRef(null);
    const focusInput = () => inputRef.current.focus(); // Focuses the input element
    ```

- [`UseImperativeHandleHook`](src/components/hooks/ref/UseImperativeHandleHook/UseImperativeHandleHook.tsx) - Modal control with imperative handle

  - **Usage**: Demonstrates the `useImperativeHandle` hook to customize the instance value that is exposed when using `ref` in parent components. The example includes controlling a modal's open and close actions.
  - **Code Breakdown**:

    ```typescript
    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }));
    ```

### Effect Hooks

- [`UseEffectHook`](src/components/hooks/effect/UseEffectHook/UseEffectHook.tsx) - Data fetching and window resize listener

  - **Usage**: Shows how to use the `useEffect` hook for side effects such as data fetching and adding event listeners. The example includes fetching data from an API and listening to window resize events.
  - **Code Breakdown**:

    ```typescript
    useEffect(() => {
      fetchData();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    ```

- [`UseLayoutEffectHook`](src/components/hooks/effect/UseLayoutEffectHook/UseLayoutEffectHook.tsx) - Synchronous DOM mutations

  - **Usage**: Demonstrates the `useLayoutEffect` hook for performing synchronous DOM mutations. The example includes measuring DOM elements before and after rendering.
  - **Code Breakdown**:

    ```typescript
    useLayoutEffect(() => {
      const rect = elementRef.current.getBoundingClientRect();
      // Perform synchronous DOM mutations
    }, []);
    ```

### Performance Hooks

- [`UseMemoHook`](src/components/hooks/performance/UseMemoHook/UseMemoHook.tsx) - Memoized computation example

  - **Usage**: Shows how to use the `useMemo` hook to memoize expensive computations and avoid unnecessary re-renders. The example includes a heavy computation that only recalculates when dependencies change.
  - **Code Breakdown**:

    ```typescript
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```

- [`UseCallbackHook`](src/components/hooks/performance/UseCallbackHook/UseCallbackHook.tsx) - Memoized callback for data fetching

  - **Usage**: Demonstrates the `useCallback` hook to memoize callback functions and prevent them from being recreated on every render. The example includes a data fetching function that is memoized.
  - **Code Breakdown**:

    ```typescript
    const fetchData = useCallback(() => {
      // Fetch data from API
    }, [dependencies]);
    ```

- [`UseTransitionHook`](src/components/hooks/performance/UseTransitionHook/UseTransitionHook.tsx) - Concurrent rendering with transitions

  - **Usage**: Shows how to use the `useTransition` hook to manage state transitions and improve UI responsiveness. The example includes a list filtering operation that uses transitions to avoid blocking the UI.
  - **Code Breakdown**:

    ```typescript
    const [isPending, startTransition] = useTransition();
    const handleChange = (e) => {
      startTransition(() => {
        setInputValue(e.target.value);
      });
    };
    ```

- [`UseDeferredValueHook`](src/components/hooks/performance/UseDeferredValueHook/UseDeferredValue.tsx) - Deferred value updates

  - **Usage**: Demonstrates the `useDeferredValue` hook to defer updates to a value and improve rendering performance. The example includes a search input that defers updates to the displayed results.
  - **Code Breakdown**:

    ```typescript
    const deferredValue = useDeferredValue(inputValue);
    ```

### Other Hooks

- [`UseDebugValueHook`](src/components/hooks/other/UseDebugValueHook/UseDebugValueHook.tsx) - Custom hook debugging

  - **Usage**: Shows how to use the `useDebugValue` hook to display debug information for custom hooks in React DevTools. The example includes a custom hook with debug information.
  - **Code Breakdown**:

    ```typescript
    useDebugValue(value, (name) => `${name}: ${value}`);
    ```

- [`UseIdHook`](src/components/hooks/other/UseIdHook/UseIdHook.tsx) - Unique ID generation

  - **Usage**: Demonstrates the `useId` hook to generate unique IDs for accessibility purposes. The example includes form elements with unique IDs.
  - **Code Breakdown**:

    ```typescript
    const id = useId();
    ```

- [`UseSyncExternalStoreHook`](src/components/hooks/other/UseSyncExternalStoreHook/UseSyncExternalStoreHook.tsx) - External store synchronization

  - **Usage**: Shows how to use the `useSyncExternalStore` hook to subscribe to an external store and synchronize its state with the component. The example includes a simple external store with state synchronization.
  - **Code Breakdown**:

    ```typescript
    const state = useSyncExternalStore(subscribe, getSnapshot);
    ```

### React 19 Hooks

- [`UseActionStateHook`](src/components/hooks/React19/UseActionStateHook/UseActionStateHook.tsx) - Form actions with loading states

  - **Usage**: Demonstrates the `useActionState` hook introduced in React 19 to manage form actions and loading states. The example includes a form with submit actions and loading indicators.
  - **Code Breakdown**:

    ```typescript
    const [actionState, setActionState] = useActionState();
    const handleSubmit = async () => {
      setActionState("loading");
      await performAction();
      setActionState("idle");
    };
    ```
