import { useEffect } from "react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/useSession";
import { supabase } from "@/lib/supabase";

// Guards every /admin page: signed-out visitors are sent to the login screen.
export default function AdminLayout() {
  const session = useSession();

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  if (session === undefined) return <div className="py-24 text-center">Loading...</div>;
  if (!session) return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">
          <Link to="/admin" className="text-lg font-bold">
            Mantra Miles Admin
          </Link>
          <nav className="order-3 flex w-full gap-1 sm:order-none sm:w-auto">
            {[
              { to: "/admin", label: "Manage Trips", end: true },
              { to: "/admin/trips/new", label: "Add Trip", end: true },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 text-sm font-medium ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground underline">
              View website
            </a>
            <Button variant="outline" size="sm" onClick={() => supabase?.auth.signOut()}>
              <LogOut className="mr-2 h-4 w-4" /> Sign out
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
