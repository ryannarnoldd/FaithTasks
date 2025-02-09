import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Home from './pages/Home'
import Profile from './pages/Profile.js'
import SignupForm from './pages/SignupForm.js'
import LoginForm from './pages/LoginForm.js'
// import Auth from './utils/auth.js'


// function AuthElement( element: JSX.Element ): JSX.Element {
//   return Auth.loggedIn() ? element : <Navigate to="/login" replace />
// }

// const href = window.location.href;
// const date = href.split("/").pop();

// const isValidDate = date || Number.isNaN(Date.parse(date))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/signup',
        element: <SignupForm />
      },
      {
        path: '/login',
        element: <LoginForm />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

{/* <Routes>
<Route path="/" element={<Home />} />

<Route path="/:date" element={
  isValidDate ? <Search date={date} /> : <Home />
} />

<Route path="/about" element={<About />} />
<Route path="/you" element={<You />} />
</Routes> */}