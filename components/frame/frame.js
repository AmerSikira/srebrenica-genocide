export default function Frame({ location }) {
	return (
		<>
			<div className="bg-white p-4 px-6">
				<h3>{location.title}</h3>
				<p>Taken by {location.content}</p>
			</div>
		</>
	);
}
