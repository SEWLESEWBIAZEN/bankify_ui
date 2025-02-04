import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { BreadCrumbs } from '@/lib/defnitions'
import { lusitana } from '@/app/_components/fonts'
const Breadcrumb = ({ breadcrumbs }: { breadcrumbs: BreadCrumbs[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="hidden mt-3 md:block ml-2">
      <ol className={clsx(lusitana.className, 'flex text-md')}>
        {breadcrumbs.map((items, index) => (
          <li
            key={items.to}
            aria-current={items.active}
            className={clsx(
              items.active ? 'text-primary text-md' : 'text-gray-900 text-md',
            )}
          >
            <Link href={items.to}>{items.label}</Link>
            {index < breadcrumbs?.length - 1 ? (
              <span className="mx-2 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
