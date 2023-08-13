const LokacijaPage = ({ params }) => {
	const id = params.id;
	console.log("params", params);
	const locations = {
		id: 1,
		lat: 44.115243,
		lng: 19.290845,
		title: "Ratna bolnica",
		content: `Ratna bolnica je bila jedna od najznačajnijih tačaka u životu Srebreničana, pogotovo u periodu do proglašenja Srebrenice kao "Zaštićene zone UN-a"`,
		videos: [
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/nAXmucn0uq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		],
	};
	return (
		<div>
			<h1>{locations.title}</h1>
			<p>{locations.content}</p>
			{locations.videos.length > 0 &&
				locations.videos.map((video, index) => (
					<div
						key={index}
						dangerouslySetInnerHTML={{ __html: video }}
					></div>
				))}
		</div>
	);
};

export default LokacijaPage;
