import { Alert } from "@material-ui/lab";
import { MovieBookingCard } from "./MovieBookingCard";

export function MovieBookingList({ bookings = [] }) {
  return (
    <div className="grid place-content-center grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {bookings &&
        bookings.map((booking) => {
          return <MovieBookingCard booking={booking} />;
        })}
      {bookings.length === 0 && (
        <Alert severity="warning">No Bookings found</Alert>
      )}
    </div>
  );
}
