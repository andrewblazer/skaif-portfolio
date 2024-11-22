import { lazy, StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import LatihanResponsive2nd from './LatihanResponsive2nd.jsx';
import LatihanResponsive from './LatihanResponsive.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/course/responsive",
    element: <LatihanResponsive />,
  },
],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}
    />
  </StrictMode>,
)
