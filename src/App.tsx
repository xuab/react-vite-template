import { Logo } from '@/components/Logo'
import { QueryProvider } from '@/providers/QueryProvider'

export const App = () => {
  return (
    <QueryProvider>
      <div className="text-center">
        <header className="text-cyan bg-dark min-h-screen flex flex-col items-center justify-center">
          <Logo className="pointer-events-none h-[40vmin] animate-slow-spin" />
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </QueryProvider>
  )
}
