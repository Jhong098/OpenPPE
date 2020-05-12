import Link from "next/link";
import { useRouter } from 'next/router'
import { ChevronDown, ChevronUp } from 'react-feather';

const navLink = (href, name, sublinks=null) =>{
    const router = useRouter();
    const selected = router.pathname === href
    const color = selected ? 'bg-primary_text' : '';
    return(
        <li class={`py-6 ${color}`}>
            <div class="flex justify-center">
                <Link href={href}><a>{name}</a></Link>
                {sublinks && (selected ? <ChevronDown class="relative"/> : <ChevronUp class="relative"/>)}
            </div>
            {sublinks && (selected ? (<ul>{sublinks.map((option)=>(
                <li><Link href={option.href}><a> {option.name} </a></Link></li>
            ))}</ul>): null)}
        </li>
    )
}
export default function LeftSideBar() {
    const sublinks =  [
        {href:"/orders?status=pending", name:"pending"}, 
        {href:"/fulfilled?status=fulfilled", name:"fulfilled"},
        {href:"/cancelled?status=cancelled", name:"cancelled"}
    ]

  return (
    <div class="bg-light_primary text-center fixed bottom-0 mt-16 top-0 left-0">
        <ul class="w-32">
            {navLink("/requests", "Requests")}
            {navLink("/orders", "Orders", sublinks)}
        </ul>
    </div>
  );
}