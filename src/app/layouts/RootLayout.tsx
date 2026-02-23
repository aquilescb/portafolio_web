import { Outlet } from "react-router-dom";
import { Navbar } from "../../shared/ui/navigation/Navbar";
import { Footer } from "../../shared/ui/navigation/Footer";

export function RootLayout() {
   return (
      <div className="relative isolate min-h-dvh bg-[var(--bg)] text-[var(--text)]">
         {/* Background glow global */}
         <div
            className="pointer-events-none fixed inset-0 z-0 blur-3xl opacity-30"
            style={{
               background:
                  "radial-gradient(circle at 28% 10%, var(--primary-soft), transparent 55%), radial-gradient(circle at 80% 5%, var(--secondary-soft), transparent 40%), radial-gradient(circle at 50% 90%, var(--secondary-soft), transparent 55%)",
            }}
         />

         {/* App content */}
         <div className="relative z-10">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl px-4 py-8">
               <Outlet />
            </main>
            <Footer />
         </div>
      </div>
   );
}
