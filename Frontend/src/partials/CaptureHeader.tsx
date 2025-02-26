import { Link } from "react-router-dom";
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
      <nav className='flex justify-between items-center h-full w-3/4'>
        <div
          className='flex justify-start items-center w-1/3 h-full p-2 rounded-md gap-4'
        >
        <a
          className='flex justify-center items-center w-32 h-8 p-2 rounded-md text-cyan-800 text-xl font-bold'
          href=''
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
        </div>

        <div
          className='flex justify-end items-center w-1/3 h-full p-2 rounded-md gap-4'
        >
          <Link
						to="/"
						className="flex justify-center items-center w-32 h-full gap-2 font-medium text-white rounded-lg outline-none hover:bg-cyan-800 hover:text-white transition-all duration-500"
					>
						Contact Us
					</Link>
					<Link
						to="/crossroad/register"
						className="flex justify-center items-center w-32 h-full gap-2 font-bold bg-cyan-800 text-white rounded-full border border-cyan-950 outline-none focus:outline-1 hover:bg-cyan-200 hover:text-cyan-800 hover:outline-white transition-all duration-300"
					>
						Try it now
					</Link>
        </div>

      </nav>
    </header>
  );
}
