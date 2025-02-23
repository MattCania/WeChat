import Dropdown from "../components/dropdown";

export default function CaptureHeader() {
  const dropdownData = [
    {
      label: "Features",
      content: ["Real Time Messaging", "Secured Groupchats", "Real Time Calls"],
    },
    {
      label: "Products",
      content: ["Premium Privileges", "Banking Tool"],
    },
    {
      label: "About Us",
      content: ["Contacts", "FAQ", "Our Company"],
    },
  ];

  return (
    <header className='flex h-10 w-full justify-center items-center bg-cyan-600 fixed'>
      <nav className='flex justify-center items-center h-full w-3/4 gap-32'>
		<a 
			className="flex justify-center items-center w-32 h-8 p-2 rounded-md text-white bg-cyan-800"
			href=""
		>
			WeChat
		</a>

        {dropdownData.map((item, index) => (
          <Dropdown
            key={index}
            label={item.label}
            content={item.content}
          />
        ))}
      </nav>
    </header>
  );
}
