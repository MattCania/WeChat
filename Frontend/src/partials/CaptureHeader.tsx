import Dropdown from "../components/dropdown"

export default function CaptureHeader() {

	const dropdownData = [
		{
		  label: "Services",
		  content: ["Transaction Records", "Inventory", "Transaction Analytics"],
		},
		{
		  label: "Products",
		  content: ["Premium Privileges", "Banking Tool"],
		},
		{
		  label: "About Us",
		  content: ["Contacts", "FAQ", "Our Company"],
		},
	]

	return (

		<header
			className="flex h-10 w-full justify-center items-center bg-cyan-600 fixed"
		>
			<nav
				className="flex justify-center items-center h-full w-3/4 "
			>
				<Dropdown items={dropdownData} />





			</nav>
		</header>

	)

}