import { useState } from "react";
import { useLoginMutation } from "../../store";

export function useAdminAuth() {
  const [token, setToken] = useState(() => localStorage.getItem("admin_token") || "");
  const [login, { isLoading }] = useLoginMutation();
  const [error, setError] = useState("");

  const handleLogin = async (email: string, password: string) => {
    setError("");
    try {
      const res = await login({ email, password }).unwrap();
      localStorage.setItem("admin_token", res.token);
      setToken(res.token);
    } catch (e: any) {
      setError(e?.data?.error || "Login failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken("");
  };

  return { token, login: handleLogin, logout: handleLogout, isLoading, error };
}
