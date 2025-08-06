import ContactSection from '../widgets/ContactSection/ContactSection'
import RepairDescriptionSection from '../widgets/RepairDescriptionSection/RepairDescriptionSection'
import AdvantagesInMending from '../widgets/AdvantagesInMending/AdvantagesInMending'
const MachineRepairPage = () => {
	return (
		<>
			<RepairDescriptionSection />
			<AdvantagesInMending />
			<ContactSection title='Formulář pro zpětnou vazbu' />
		</>
	)
}

export default MachineRepairPage
