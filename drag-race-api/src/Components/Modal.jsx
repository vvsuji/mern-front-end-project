import style from './Modal.module.css';
// import { useEffect } from 'react';

function Modal({ queenName, closeModal, queenImg }) {
	return (
		<div className={style.modalContainer} onClick={closeModal}>
			<div id={style.modal}>
				<div className={style.modalGuts}>
					<img src={queenImg} id={style.splash} alt='' />
					<h3 id={style.queenName}>{queenName.name}</h3>
					<p id={style.quote}>Quote: {queenName.quote}</p>
					{/* <p id={style.tags}>{queenName.tags.join(`, `)}</p>
					<p id={style.blurb}>{queenName.blurb}</p> */}
				</div>
			</div>
		</div>
	);
}

export default Modal;
