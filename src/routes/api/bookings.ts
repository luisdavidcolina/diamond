import pool from './pool';
import type Booking from '../../types/booking';

export async function get() {
	const schema = 'hotel_hoteltumpis';
	const queryBookings = 'SELECT * FROM ' + schema + '.tbl_reservas ORDER BY "id" desc LIMIT 20;';
	const queryCustomers = 'SELECT * FROM ' + schema + '.tbl_clientes ORDER BY "id";';
	const responseBookings = await pool.query(queryBookings);
	const bookings: Booking[] = responseBookings.rows.map((booking) => {
		return {
			id: booking.id,
			createdAt: booking.created_at,
			status: '',
			travelDate: {
				arrival: booking.check_in_fecha,
				departure: booking.check_out_fecha
			},
			clientData: {
				name: '',
				city: '',
				country: '',
				telephone: '',
				email: '',
				lenguage: ''
			},
			guests: booking.huespedes_cantidad,
			rooms: [],
			source: '',
			price: booking.precio_total ?? 0,
			currency: ''
		};
	});
	return {
		body: bookings
	};
}
