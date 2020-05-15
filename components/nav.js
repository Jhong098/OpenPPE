import Link from "next/link";
import Button from "components/button"
import {useState} from "react"
import { Bell } from 'react-feather';
import {toolbarConstants} from "components/rightSidebar";

const links = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse" },
  { href: "/requests", label: "Requests" },
];

const orderSublinks =  [
  {href:"/orders/pending", name:"pending"}, 
  {href:"/orders/fulfilled", name:"fulfilled"},
  {href:"/orders/cancelled", name:"cancelled"}
]
  
export default function Nav({auth = true, toolbarOptions}) {
  const [profileSelected, setProfileSelected] = useState(false)
  const [ordersSelected, setOrdersSelected] = useState(false)
  const {handleToolbarOpen} = toolbarOptions;
  
  const editProfile = () =>{
    setProfileSelected(false);
    handleToolbarOpen(toolbarConstants.EDIT_PROFILE)
  }

  const rightNav = () => {
    if (auth){
      return (
        <div class="flex justify-center items-center">
          <Bell/>
          <div class="relative pl-8">
            <button onClick={()=>setProfileSelected(!profileSelected)} class="relative h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
              <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar"/>
            </button>
            { profileSelected ? (
              <>
                <button onClick={()=>setProfileSelected(false)} class="fixed inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
                <div class="absolute z-10 right-0 mt-2 py-2 w-48 bg-primary rounded-lg shadow-xl">
                  <a href="#" onClick={editProfile} class="block px-4 py-2 hover:bg-dark_primary">Account settings</a>
                  <a href="#" class="block px-4 py-2 hover:bg-dark_primary">Sign out</a>
                </div>
              </>
            ):null}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Button onClick='#'>Signup</Button>
          <Button onClick='#'>Login</Button>
        </div>
      )
    }
  }
  return (
    <nav className="flex flex-wrap justify-between items-center text-white bg-dark_primary px-8 h-16">
      <ul className="flex items-center">
        {links.map((link)=>(
            <li key={link.label} className="px-4">
                <Link href={link.href}>
                    <a>{link.label}</a>
                </Link>
            </li>
        ))}
        <li className="px-4 relative cursor-pointer" onClick={()=>setOrdersSelected(!ordersSelected)}>
          Orders
          { ordersSelected ? (
            <>
              <button onClick={()=>setOrdersSelected(false)} class="fixed z-10 inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
              <div class="absolute z-20 left-0 mt-2 py-2 w-48 bg-primary rounded-lg shadow-xl">
                <>
                  {orderSublinks.map((option)=>(
                    <Link key={option.name} href='/orders/[status]' as={option.href}><a href="#" class="block px-4 py-2 hover:bg-dark_primary">{option.name}</a></Link>
                  ))}
                </>
              </div>
            </>
          ):null}
        </li>
      </ul>
      {rightNav()}
    </nav>
  );
}
