import style from './Modal.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Modal({ queenName, closeModal }) {
	const [queen, setQueen] = useState('');

	useEffect(() => {
		const fetchImg = async () => {
			let response = await axios.get(
				`https://api-json-project-production.up.railway.app/queens/name/${queenName}`,
			);
			setQueen(response.data[0]);
		};
		fetchImg();
	}, []);

	return (
		<div className={style.modalContainer} onClick={closeModal}>
			<div id={style.modal}>
				<div className={style.modalGuts}>
					<img src={queen.image_url} id={style.portrait} alt='' />
					<h3 id={style.queenName}>{queen.name}</h3>
					<p id={style.quote}>Quote: {queen.quote}</p>
				</div>
			</div>
		</div>
	);
}

export default Modal;
