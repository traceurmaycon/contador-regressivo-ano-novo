import { useState, useEffect } from "react";

const ElementoTempo = ({ tempo, nomeTempo }) => {
	return (
		<p className="flex flex-col text-5xl items-center">
			{tempo + " "}
			<span className="text-2xl">{nomeTempo}</span>
		</p>
	);
};

export default function Home() {
	const [diasState, setDias] = useState();
	const [horasState, setHoras] = useState();
	const [minutosState, setMinutos] = useState();
	const [segundosState, setSegundos] = useState();

	useEffect(() => {
		setInterval(() => {
			const dataAtual = new Date();
			const proximoAno = dataAtual.getFullYear() + 1;
			const dataFinal = new Date(proximoAno + "-01-01");
			let diferencaTempo = Math.abs(
				(dataFinal.getTime() - dataAtual.getTime()) / 1000
			);
			let diferencaDias = Math.floor(diferencaTempo / 3600 / 24);
			let diferencaHoras = Math.floor(diferencaTempo / 3600) % 24;
			let diferencaMinutos = Math.floor(diferencaTempo / 60) % 60;
			let diferencaSegundos = Math.floor(diferencaTempo) % 60;

			const dias = diferencaDias;
			const horas = diferencaHoras;
			const minutos = diferencaMinutos;
			const segundos = diferencaSegundos;

			setDias(dias);
			setHoras(horas);
			setMinutos(minutos);
			setSegundos(segundos);
		}, 1000);
	}, []);

	return (
		<>
			<div className="container mx-auto h-screen flex items-center align-middle justify-center">
				<div className="flex w-full justify-evenly">
					<ElementoTempo tempo={diasState} nomeTempo={"dias"} />
					<ElementoTempo tempo={horasState} nomeTempo={"horas"} />
					<ElementoTempo tempo={minutosState} nomeTempo={"minutos"} />
					<ElementoTempo
						tempo={segundosState}
						nomeTempo={"segundos"}
					/>
				</div>
			</div>
		</>
	);
}
