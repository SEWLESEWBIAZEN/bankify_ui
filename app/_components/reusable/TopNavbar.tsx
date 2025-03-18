import Link from 'next/link';
import React from 'react'
type TopNavbarProps={
    name:string;
    icon:any;
    to:string;
}

const TopNavbar = ({navbarItems}:{navbarItems:TopNavbarProps[]}) => {
  return (
    <div className="ms-6 flex flex-wrap items-center gap-6 text-slate-500 px-4 py-2 text-primary-foreground  dark:text-slate-100">
    {navbarItems.map(({ name, icon: Icon, to }) => (
      <Link key={name} href={to} className="flex items-center gap-2 hover:text-primary transition">
        <Icon size={18} className="text-slate-700 dark:text-slate-100" />
        <span className="text-sm font-medium">{name}</span>
      </Link>
    ))}
  </div>
  )
}
export default TopNavbar