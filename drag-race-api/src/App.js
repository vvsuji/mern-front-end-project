import { useEffect, useState } from 'react';
import QueenCard from './Components/QueenCard';
import style from './App.module.css';
import Modal from './Components/Modal';

const url = `https://api-json-project-production.up.railway.app/queens`;

function App() {
	const [queens, setQueens] = useState([]);
	const [selectedQueens, setSelectedQueens] = useState();
	const [open, setOpen] = useState(false);

	async function fetchQueens() {
		try {
			const response = await (await fetch(url)).json();
			setQueens(response);
			// console.log(response[0].name);
		} catch (err) {
			console.log('err', err);
		}
	}

	function openModal(queenName) {
		setSelectedQueens(queens[queenName]);
		setOpen(true);
	}

	function closeModal() {
		setOpen(false);
	}

	useEffect(() => {
		fetchQueens();
	}, []);

	return (
		<div className='App'>
			<header>
				<h1>Drag Queens!</h1>
			</header>

			{open && <Modal queenName={selectedQueens} closeModal={closeModal} />}

			<div className={style.container}>
				{queens.map((queenObj) => (
					<QueenCard
						key={queenObj.name}
						queenName={queenObj.name}
						queenImg={queenObj.image_url}
						onClick={() => setOpen(true)}
						openModal={openModal}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
