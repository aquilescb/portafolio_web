import { Outlet } from "react-router-dom";
import { Navbar } from "../../shared/ui/navegation/Navbar";
import { Footer } from "../../shared/ui/navegation/Footer";

export function RootLayout() {
   return (
      <div className="min-h-dvh bg-[var(--bg)] text-[var(--text)]">
         <Navbar />
         <main className="mx-auto w-full max-w-6xl px-4 py-8">
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
