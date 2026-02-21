import type { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { I18nProvider } from "./I18nProvider";

type AppProvidersProps = {
   children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
   return (
      <ThemeProvider>
         <I18nProvider>{children}</I18nProvider>
      </ThemeProvider>
   );
}
