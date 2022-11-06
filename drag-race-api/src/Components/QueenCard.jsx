import style from './QueenCard.module.css';

function QueenCard({ queenName, openModal, queenImg }) {
	function onClick() {
		openModal(queenName);
	}
	return (
		<article className={style.card} onClick={onClick}>
			<img src={queenImg} className={style.qcImg} alt='' />
		</article>
	);
}

export default QueenCard;
