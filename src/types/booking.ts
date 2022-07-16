export type Booking  = {
	id: string;
	createdAt: string;
	status: string;
	travelDate: {
		arrival: string;
		departure: string;
	};
	clientData: {
		name: string;
		city: string;
		country: string;
		telephone: string;
		email: string;
		lenguage: string;
	};
	guests: number;
	rooms: string[];
	source: string;
	price: number;
	currency: string;
};

export default Booking;
