"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react'

import { modularScale, size, fluidRange, between } from 'polished'

const icStyles = {
  ...size(modularScale(4))
}

const logoStyles = {
  ...size(between('96px', '120px', '640px', '1280px'))
}

export default function Nav() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Icon icon="bpmn:intermediate-event-catch-signal" style={logoStyles} />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-12">
          <Link href="/about" className="hover:text-gray-900">About</Link>
          <Link href="/blog" className="hover:text-gray-900">Blog</Link>
          <Link href="/store" className="hover:text-gray-900">Store</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <Icon icon="ph:shopping-cart-duotone" style={icStyles} />
      </div>
    </header>
  )
}
