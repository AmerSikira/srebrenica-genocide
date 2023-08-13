import Modal from "@/components/modal/modal";

const Lokacija = () => {
	const id = 2;
	const locations = [
		{
			id: 1,
			lat: 44.115243,
			lng: 19.290845,
			title: "Ratna bolnica",
			content: `Ratna bolnica je bila jedna od najznačajnijih tačaka u životu Srebreničana, pogotovo u periodu do proglašenja Srebrenice kao "Zaštićene zone UN-a"`,
		},

		{
			id: 2,
			lat: 44.1171821,
			lng: 19.2895582,
			title: "Vezionica",
			content: `U Vezionici je bila Bravo četa Holandskog bataljona`,
		},

		{
			id: 3,
			lat: 44.1487059,
			lng: 19.2846734,
			title: "Fabrika akumulatora",
			content: `U Fabrici akumulatora je bila smještena komanda Dutchbata`,
		},
	];

	return <Modal>{locations[id].content}</Modal>;
};

export default Lokacija;
