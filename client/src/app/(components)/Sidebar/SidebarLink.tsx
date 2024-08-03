import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps{
    href:string;
    icon: LucideIcon;
    label:string;
    isSidebarCollapse:boolean;
}

const SidebarLink = ({href, icon:Icon, label, isSidebarCollapse}:SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
    return (
        <Link href={href}>
            <div className={`cursor-pointer py-4 flex items-center ${isSidebarCollapse ? "justify-center":"justify px-8"}
            hover:text-sky-600 hover:bg-sky-200 gap-3 transition-colors ${isActive ? "bg-sky-200 text-white":""}
            `}>
            <Icon className="size-6 !text-slate-700"/>
            <span className={` ${isSidebarCollapse ? "hidden":"block"} font-medium tracking-wide text-slate-700`}>{label}</span>
            </div>
        </Link>
  )
}

export default SidebarLink;
