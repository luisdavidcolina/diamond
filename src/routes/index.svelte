<script lang="ts">
	import type Booking from '../types/booking';
	import { onMount } from 'svelte';

	let bookings: Booking[] = [];
	let bookingSelect = {};
	onMount(async () => {
		const response = await fetch('/api/bookings');
		const data = await response.json();
		bookings = data;
		bookingSelect = bookings[0];
		console.log(bookings);
	});
</script>

<svelte:head>
	<title>L</title>
</svelte:head>
<div class="h-screen min-w-[1000px] bg-white text-black">
	<div>Visualizador de detalle de Reserva</div>
	<div class="grid grid-cols-2 gap-2 h-full w-full ">
		<div class="flex flex-col">
			<div class="flex-1">Filter Search</div>
			<div>
				<div class="overflow-x-auto w-full overflow-y-auto h-[90vh]">
					<table class="table w-full">
						<tbody>
							{#each bookings as booking}
								<tr>
									<th>
										<div>
											<h6>
												{booking.createdAt.split('T')[0]}
												{booking.createdAt.split('T')[1].split('.')[0]}
											</h6>
											<h4>
												{booking.travelDate.arrival.split('T')[0]} al {booking.travelDate.departure.split(
													'T'
												)[0]}
											</h4>
											<h5>
												{booking.clientData.name}, {booking.guests} huéspedes
											</h5>
											<h6>
												{booking.id_habitacion_tipo}
											</h6>
										</div>
									</th>
									<th>
										<h6>
											{booking.fuente_reserva_id}
										</h6>
										<h4>
											{booking.precio_total}
										</h4>
										<h5>otro</h5>
									</th>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div>b</div>
	</div>
</div>
