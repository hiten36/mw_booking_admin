import LoginForm from "../features/auth/LoginForm";
import BookingsTable from "../features/bookings/BookingsTable";
import { useGetBookingsQuery } from "../store";
import { useAdminAuth } from "../features/auth/useAdminAuth";

export default function AdminDashboard() {
  const { token, login, logout, isLoading, error } = useAdminAuth();
  const { data: bookings, isLoading: bookingsLoading } = useGetBookingsQuery(undefined, { skip: !token });

  if (!token) {
    return <LoginForm onLogin={login} loading={isLoading} error={error} />;
  }

  return <BookingsTable bookings={bookings || []} loading={bookingsLoading} onLogout={logout} />;
}
