import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from './layout/Main';
import Post from './components/Post/Post';
import Reports from './components/Reports/Reports';
import Modal1 from './components/Modal/Modal1';
import Example from './components/Modal/Modal1';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Post></Post >
        },
        {
          path: "/reports",
          element: <Reports></Reports>
        },
        {
          path: "*",
          element: <div>404</div>,
        },

      ],
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
