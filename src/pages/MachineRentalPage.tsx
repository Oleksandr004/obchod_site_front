import RentalDescriptionSection from '../widgets/RentalDescriptionSection/RentalDescriptionSection'
import HowDoesItWorkSection from '../widgets/HowDoesItWorkSection/HowDoesItWorkSection'
import AdvantagesSection from '../widgets/AdvantagesSection/AdvantagesSection'
import ContactSection from '../widgets/ContactSection/ContactSection'

const MachineRentalPage = () => {
	return (
		<>
			<RentalDescriptionSection />
			<HowDoesItWorkSection />
			<AdvantagesSection />
			<ContactSection title='	Formulář pro zpětnou vazbu' />
		</>
	)
}

export default MachineRentalPage
