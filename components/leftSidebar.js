import Link from "next/link";
import { useRouter } from 'next/router'
import { ChevronDown, ChevronUp } from 'react-feather';

const navLink = (href, name, sublinks=null) =>{
    const router = useRouter();
    const orders_selected = router.pathname.split('/')[1] === "orders"
    const oneOfOrders = href.split('/')[1] === "orders"
    const selected = router.pathname === href
    const color = (selected && !orders_selected) || (oneOfOrders && orders_selected) ? 'bg-text_white' : '';
    return(
        <li className={`py-6 ${color}`}>
            <div className="flex justify-center">
                <Link href={href}><a>{name}</a></Link>
                {sublinks && (orders_selected ? <ChevronDown className="relative"/> : <ChevronUp className="relative"/>)}
            </div>
            {sublinks && (orders_selected ? (<ul>{sublinks.map((option)=>{
                const isSelected = option.href === router.asPath;
                return (
                    <li key={option.name} className={isSelected ? "text-primary":""}>
                        <Link href='/orders/[status]' as={option.href}><a> {option.name} </a></Link>
                    </li>
                )
            })}</ul>): null)}
        </li>
    )
}
export default function LeftSideBar() {
    const sublinks =  [
        {href:"/orders/pending", name:"pending"}, 
        {href:"/orders/fulfilled", name:"fulfilled"},
        {href:"/orders/cancelled", name:"cancelled"}
    ]

  return (
    <div class="bg-light_primary text-center fixed bottom-0 mt-navHeight top-0 left-0">
        <ul class="w-leftPanelWidth">
            {navLink("/requests", "Requests")}
            {navLink(sublinks[0].href, "Orders", sublinks)}
        </ul>
    </div>
  );
}