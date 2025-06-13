import { useState } from "react";
import logo from "../../assets/react.svg";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  loading: boolean;
  error: string;
}

export default function LoginForm({ onLogin, loading, error }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    card: {
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      padding: "48px",
      width: "100%",
      maxWidth: "420px",
    },
    header: {
      textAlign: "center" as const,
      marginBottom: "32px",
    },
    logo: {
      width: "64px",
      height: "64px",
      margin: "0 auto 16px auto",
      display: "block",
    },
    title: {
      fontSize: "28px",
      fontWeight: 700,
      color: "#1e293b",
      marginBottom: "8px",
      margin: "0 0 8px 0",
    },
    subtitle: {
      color: "#64748b",
      fontSize: "16px",
      margin: "0",
    },
    form: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "24px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "8px",
    },
    label: {
      fontWeight: 600,
      color: "#374151",
      fontSize: "14px",
      margin: "0",
    },
    input: {
      padding: "16px",
      border: "2px solid #e2e8f0",
      borderRadius: "12px",
      fontSize: "16px",
      background: "#fafafa",
      transition: "all 0.2s ease",
    },
    errorMessage: {
      background: "#fef2f2",
      border: "1px solid #fecaca",
      color: "#dc2626",
      padding: "12px 16px",
      borderRadius: "8px",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    button: {
      background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      color: "white",
      padding: "16px 24px",
      borderRadius: "12px",
      fontWeight: 600,
      fontSize: "16px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginTop: "8px",
    },
    spinner: {
      animation: "spin 1s linear infinite",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <h1 style={styles.title}>Admin Login</h1>
          <p style={styles.subtitle}>Welcome back! Please sign in to your account.</p>
        </div>
        
        <form onSubmit={e => { e.preventDefault(); onLogin(email, password); }} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={styles.input}
              autoFocus
              required
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          {error && (
            <div style={styles.errorMessage}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM7 3v6h2V3H7zm0 8v2h2v-2H7z"/>
              </svg>
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={!email || !password || loading}
            style={{
              ...styles.button,
              opacity: (!email || !password || loading) ? 0.7 : 1,
              cursor: (!email || !password || loading) ? "not-allowed" : "pointer",
            }}
          >
            {loading ? (
              <>
                <svg style={styles.spinner} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM8 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" opacity="0.25"/>
                  <path d="M8 0a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6V0z"/>
                </svg>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
