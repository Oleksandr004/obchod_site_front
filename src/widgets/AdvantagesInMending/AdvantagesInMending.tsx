import styles from './AdvantagesInMending.module.scss'

const AdvantagesInMending = () => {
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<div>
					<p className={styles.name}>Proč si vybrat nás?</p>
					<p className={styles.description}>
						Profesionální servis s dlouholetými zkušenostmi Naši technici mají
						bohaté zkušenosti s opravami omítacích strojů různých značek. Díky
						odborným znalostem a specializovanému vybavení dokážeme rychle
						identifikovat problém a najít nejlepší řešení.
					</p>
				</div>
				<div>
					<p className={styles.name}>Rychlá diagnostika a oprava</p>
					<p className={styles.description}>
						Chápeme, že každý den nefunkčního stroje znamená ztrátu času a
						peněz. Proto provádíme rychlou diagnostiku a opravu v co nejkratší
						možné době, aby vaše zařízení bylo opět plně funkční. Používáme
						pouze kvalitní náhradní díly K opravám využíváme pouze originální
						nebo osvědčené kvalitní náhradní díly, což zajišťuje dlouhou
						životnost vašeho omítacího stroje a jeho spolehlivý provoz.
					</p>
				</div>
				<div>
					<p className={styles.name}>
						Transparentní ceny bez skrytých poplatků
					</p>
					<p className={styles.description}>
						Před zahájením opravy vám poskytneme jasnou cenovou nabídku. U nás
						neplatíte za žádné skryté poplatky – vždy víte, kolik oprava bude
						stát.
					</p>
				</div>
				<div>
					<p className={styles.name}>
						Individuální přístup ke každému zákazníkovi
					</p>
					<p className={styles.description}>
						Ke každému zákazníkovi přistupujeme individuálně a hledáme nejlepší
						řešení podle jeho potřeb. Ať už potřebujete drobnou opravu nebo
						kompletní servis, jsme tu pro vás.
					</p>
				</div>
				<div>
					<p className={styles.name}>
						Možnost expresního servisu a mobilního technika
					</p>
					<p className={styles.description}>
						Pokud potřebujete stroj opravit co nejrychleji, nabízíme možnost
						expresního servisu nebo výjezdu našeho mobilního technika přímo k
						vám.
					</p>
				</div>
				<div>
					<p className={styles.name}>Záruka na opravy</p>
					<p className={styles.description}>
						Na všechny opravy poskytujeme záruku, takže máte jistotu, že váš
						stroj bude po servisu fungovat bez problémů.
					</p>
				</div>
			</div>{' '}
			<p className={styles.link}>
				Máte problém se svým omítacím strojem? Kontaktujte nás a my se o vše
				postaráme!
			</p>
		</div>
	)
}

export default AdvantagesInMending
