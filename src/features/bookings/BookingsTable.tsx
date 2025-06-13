interface BookingsTableProps {
  bookings: any[];
  loading: boolean;
  onLogout: () => void;
}

export default function BookingsTable({ bookings, loading, onLogout }: BookingsTableProps) {
  const totalBookings = bookings?.length || 0;
  const todayBookings = bookings?.filter(b => {
    const today = new Date().toISOString().slice(0, 10);
    return b.slotId?.date === today;
  }).length || 0;

  const styles = {
    container: {
      minHeight: "100vh",
      background: "#f8fafc",
      padding: "40px 20px",
    },
    main: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      background: "white",
      borderRadius: "16px",
      padding: "32px",
      marginBottom: "32px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e2e8f0",
    },
    headerTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
    },
    title: {
      fontSize: "32px",
      fontWeight: 700,
      color: "#1e293b",
      margin: "0",
    },
    logoutBtn: {
      background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      padding: "12px 24px",
      fontWeight: 600,
      fontSize: "14px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      boxShadow: "0 2px 4px rgba(239, 68, 68, 0.2)",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "24px",
    },
    statCard: {
      background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      borderRadius: "12px",
      padding: "24px",
      color: "white",
      textAlign: "center" as const,
    },
    statNumber: {
      fontSize: "28px",
      fontWeight: 700,
      marginBottom: "8px",
      margin: "0 0 8px 0",
    },
    statLabel: {
      fontSize: "14px",
      opacity: 0.9,
      margin: "0",
    },
    tableContainer: {
      background: "white",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e2e8f0",
    },
    tableHeader: {
      background: "#f8fafc",
      padding: "24px 32px",
      borderBottom: "1px solid #e2e8f0",
    },
    tableTitle: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#1e293b",
      margin: "0",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
    },
    th: {
      padding: "16px 24px",
      background: "#f8fafc",
      fontWeight: 600,
      fontSize: "14px",
      color: "#374151",
      textAlign: "left" as const,
      borderBottom: "1px solid #e2e8f0",
      textTransform: "uppercase" as const,
      letterSpacing: "0.05em",
    },
    td: {
      padding: "16px 24px",
      fontSize: "14px",
      color: "#374151",
      borderBottom: "1px solid #f1f5f9",
    },
    emptyState: {
      textAlign: "center" as const,
      padding: "64px 32px",
      color: "#64748b",
    },
    emptyIcon: {
      width: "64px",
      height: "64px",
      margin: "0 auto 16px auto",
      opacity: 0.5,
    },
    loadingState: {
      textAlign: "center" as const,
      padding: "64px 32px",
      color: "#6366f1",
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <div style={styles.header}>
          <div style={styles.headerTop}>
            <h1 style={styles.title}>Admin Dashboard</h1>
            <button
              onClick={onLogout}
              style={styles.logoutBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(239, 68, 68, 0.2)";
              }}
            >
              Sign Out
            </button>
          </div>
          
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <h3 style={styles.statNumber}>{totalBookings}</h3>
              <p style={styles.statLabel}>Total Bookings</p>
            </div>
            <div style={{ ...styles.statCard, background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}>
              <h3 style={styles.statNumber}>{todayBookings}</h3>
              <p style={styles.statLabel}>Today's Bookings</p>
            </div>
            <div style={{ ...styles.statCard, background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" }}>
              <h3 style={styles.statNumber}>{bookings?.filter(b => new Date(b.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length || 0}</h3>
              <p style={styles.statLabel}>This Week</p>
            </div>
          </div>
        </div>

        <div style={styles.tableContainer}>
          <div style={styles.tableHeader}>
            <h2 style={styles.tableTitle}>All Bookings</h2>
          </div>
          
          {loading ? (
            <div style={styles.loadingState}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 32A16 16 0 1 1 16 0a16 16 0 0 1 0 32zM16 4a12 12 0 1 0 0 24 12 12 0 0 0 0-24z" opacity="0.25"/>
                <path d="M16 0a16 16 0 0 1 16 16h-4a12 12 0 0 0-12-12V0z"/>
              </svg>
              <p style={{ margin: "16px 0 0 0" }}>Loading bookings...</p>
            </div>
          ) : bookings && bookings.length > 0 ? (
            <div style={{ overflowX: "auto" }}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Customer</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Time</th>
                    <th style={styles.th}>Booked At</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={booking._id} style={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                      <td style={styles.td}>
                        <div style={{ fontWeight: 600 }}>{booking.name}</div>
                      </td>
                      <td style={styles.td}>{booking.email}</td>
                      <td style={styles.td}>
                        <span style={{
                          background: "#dbeafe",
                          color: "#1e40af",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}>
                          {booking.slotId?.date}
                        </span>
                      </td>
                      <td style={styles.td}>
                        <span style={{
                          background: "#dcfce7",
                          color: "#166534",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}>
                          {booking.slotId?.time}
                        </span>
                      </td>
                      <td style={styles.td}>
                        {new Date(booking.createdAt).toLocaleDateString()} {new Date(booking.createdAt).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={styles.emptyState}>
              <svg style={styles.emptyIcon} viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30 30-13.4 30-30S48.6 2 32 2zm0 54C17.7 56 6 44.3 6 32S17.7 8 32 8s26 11.7 26 24-11.7 24-26 24z"/>
                <path d="M32 16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/>
              </svg>
              <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: 600 }}>No bookings yet</h3>
              <p style={{ margin: "0", fontSize: "14px" }}>Bookings will appear here once customers start scheduling appointments.</p>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        svg[style*="currentColor"] {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
