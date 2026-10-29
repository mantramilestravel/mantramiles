import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/hooks/useSession";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const session = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ text: string; error: boolean } | null>(null);

  if (session) return <Navigate to="/admin" replace />;

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return setMessage({ text: "Supabase is not configured.", error: true });
    setBusy(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage({ text: "Incorrect email or password.", error: true });
    setBusy(false);
  };

  const forgot = async () => {
    if (!supabase || !email) return setMessage({ text: "Enter your email above first.", error: true });
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/login`,
    });
    setMessage(
      error
        ? { text: error.message, error: true }
        : { text: "If that email has an account, a reset link has been sent.", error: false }
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Mantra Miles Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={signIn} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {message && <p className={`text-sm ${message.error ? "text-red-600" : "text-green-700"}`}>{message.text}</p>}
            <Button type="submit" className="w-full" disabled={busy}>
              {busy ? "Signing in..." : "Sign in"}
            </Button>
            <button type="button" onClick={forgot} className="w-full text-center text-sm text-muted-foreground underline">
              Forgot password?
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
