import styles from './Header.module.scss'
import logo from '../../assets/logo-black.png'
import greyRectangle from '../../assets/grey_rectangle.png'
import blackRectangle from '../../assets/black-grey_rectangle.png'
import phoneIcon from '../../assets/icons/phone.svg'
import emailIcon from '../../assets/icons/email.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
// import globeIcon from '../../assets/icons/globe.png'
// import arrow from '../../assets/icons/arrow-down.png'
import facebookIcon from '../../assets/icons/facebook.svg'
import searchIcon from '../../assets/icons/search.svg'
// import likesIcon from '../../assets/icons/likes.png'
import logoFirmy from '../../assets/logo_firmy.svg'
// import profileIcon from '../../assets/icons/profile.png'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.bg_container}>
				<div className={styles.yellow} />
				<img src={greyRectangle} className={styles.gray} />
				<img src={blackRectangle} className={styles.black_gray} />
			</div>
			<div className={styles.container}>
				<div className={styles.row} style={{ display: 'flex' }}>
					<Link to='/'>
						<img className={styles.logo} src={logo} alt='logo img' />
					</Link>
					<div
						style={
							{
								// display: 'flex',
								// flexDirection: 'column',
								// gap: 22,
							}
						}
					>
						<div className={styles.top_line}>
							<div className={styles.info}>
								<div className={styles.info_element}>
									<div>
										<img src={phoneIcon} alt='phone icon' />
									</div>
									<p>+420 774 675 115</p>
								</div>
								<div className={styles.info_element} style={{ width: 163 }}>
									<div>
										<img src={emailIcon} alt='email icon' />
									</div>
									<p>omitky-m@seznam.cz</p>
								</div>
								<div className={styles.info_element}>
									<div>
										<img src={calendarIcon} alt='calendar icon' />
									</div>
									<p>Pon - Sob 7:00–16:30 </p>
								</div>
							</div>
							<div
								style={{
									marginLeft: 130,
									display: 'flex',
									alignItems: 'center',
									gap: 5,
								}}
							>
								{/* <div className={styles.globe}>
									<img src={globeIcon} alt='globe icon' />
								</div>
								<p className={styles.language}>CZ</p>
								<div className={styles.arrow}>
									<img src={arrow} alt='arrow-down icon' />
								</div> */}
							</div>
							<Link to='/'>
								<img src={facebookIcon} alt='facebook icon' />
							</Link>
							<div>
								<Link to='/'>
									<img
										style={{ marginLeft: 28 }}
										src={logoFirmy}
										alt='logo firmy'
									/>
								</Link>
							</div>
						</div>
						<div className={styles.bottom_line}>
							<nav className={styles.nav}>
								<Link to='/machine-rental'>Pronájem strojů</Link>
								<Link to='/machine-repair'>Oprava strojů</Link>
								<Link to='/kategorie'>Katalog produktů</Link>
								<Link to='/contact'>Kontakty</Link>
							</nav>
							<Link to='/kategorie' className={styles.search}>
								<img src={searchIcon} alt='seacth icon' />
							</Link>
							{/* <div className={styles.likes}>
								<img src={likesIcon} alt='likes icon' />
							</div> */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 9,
								}}
							>
								{/* <p className={styles.prorile_name}>Yuliia</p>
								<div>
									<img src={profileIcon} alt='profile icon' />
								</div> */}
								{/* <div className={styles.arrow}>
									<img src={arrow} alt='arrow icon' />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
