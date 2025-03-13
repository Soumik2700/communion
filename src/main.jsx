import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const HeroSection = lazy(() => import('./components/HeroSection.jsx'))
const EventList = lazy(() => import('./components/EventList.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const SignIn = lazy(()=> import("./components/SignIn.jsx"))

const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroSection />
      },
      {
        path: "events",
        element: <EventList />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path:"/signin",
        element:<SignIn/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-xl font-bold">Loading...</div>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  </StrictMode>
)
