import Link from "next/link";
import { useRouter } from 'next/router'
import { ChevronDown, ChevronUp } from 'react-feather';

const navLink = (href, name, sublinks=null) =>{
    const router = useRouter();
    const orders_selected = router.pathname.split('/')[1] === "orders"
    const oneOfOrders = href.split('/')[1] === "orders"
    const selected = router.pathname === href
    const color = (selected && !orders_selected) || (oneOfOrders && orders_selected) ? 'bg-primary_text' : '';
    return(
        <li class={`py-6 ${color}`}>
            <div class="flex justify-center">
                <Link href={href}><a>{name}</a></Link>
                {sublinks && (orders_selected ? <ChevronDown class="relative"/> : <ChevronUp class="relative"/>)}
            </div>
            {sublinks && (orders_selected ? (<ul>{sublinks.map((option)=>{
                const isSelected = option.href === router.asPath;
                return (
                    <li class={isSelected ? "text-primary":""}>
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
    <div class="bg-light_primary text-center fixed bottom-0 mt-16 top-0 left-0">
        <ul class="w-32">
            {navLink("/requests", "Requests")}
            {navLink(sublinks[0].href, "Orders", sublinks)}
        </ul>
    </div>
  );
}