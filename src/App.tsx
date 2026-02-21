import { RouterProvider } from "react-router-dom";
import { router } from "../src/app/router/routes";
import { AppProviders } from "../src/app/providers/AppProviders";

export function App() {
   return (
      <AppProviders>
         <RouterProvider router={router} />
      </AppProviders>
   );
}
