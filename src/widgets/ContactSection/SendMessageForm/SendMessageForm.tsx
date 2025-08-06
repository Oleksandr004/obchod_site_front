import styles from './SendMessageForm.module.scss'

const SendMessageForm = () => {
	return (
		<div className={styles.container}>
			<div style={{ padding: 30, width: '100%' }}>
				<h2 className={styles.title}>Kontaktujte nás</h2>
				<div style={{ display: 'flex', gap: 25, marginBottom: 25 }}>
					<input
						className={styles.inputs}
						type='text'
						placeholder='Zadejte své jméno'
					/>
					<input
						className={styles.inputs}
						type='text'
						placeholder='Zadejte svůj e-mail'
					/>
				</div>
				<div style={{ display: 'flex', gap: 25 }}>
					<input className={styles.inputs} type='text' placeholder='Příjmení' />
					<input className={styles.inputs} type='text' placeholder='Telefon' />
				</div>
				<textarea
					placeholder='Zadejte svůj e-mail'
					className={styles.textarea}
				/>
				<button className={styles.btn}>Odeslat zprávu</button>
			</div>
		</div>
	)
}

export default SendMessageForm
