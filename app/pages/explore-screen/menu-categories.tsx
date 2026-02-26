'use client'

import React, { useRef, useEffect } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = { name: string }

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
    { name: 'Popular' },
    { name: 'Jollof Rice & Entrees' },
    { name: 'Swallow & Soups' },
    { name: 'Grills & Sides' },
    { name: 'Beverages' },
    { name: 'Desserts' },
]

// ─── SVGs ─────────────────────────────────────────────────────────────────────

const ChevronDownIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 text-gray-400">
        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ChevronUpIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 text-gray-400">
        <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

// ─── Component ────────────────────────────────────────────────────────────────

const MenuCategories = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selected, setSelected] = React.useState<string>('')
    const [inputValue, setInputValue] = React.useState('')
    const containerRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [])

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    const handleSelect = (categoryName: string) => {
        setSelected(categoryName)
        setInputValue(categoryName)
        setIsOpen(false)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        // Clear active selection if user types something custom
        if (selected && e.target.value !== selected) setSelected('')
        // Re-open dropdown when user types
        if (!isOpen) setIsOpen(true)
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-16"
        >
            {/* ── Search / trigger input ── */}
            <div
                className={`flex items-center gap-3 bg-white px-4 md:px-5 h-14 md:h-16 w-full shadow-lg transition-all duration-200
                    ${isOpen
                        ? 'rounded-t-xl md:rounded-t-2xl border border-b-0 border-gray-200'
                        : 'rounded-xl md:rounded-2xl border border-transparent'
                    }`}
            >
                <label htmlFor="menu-category-search" className="sr-only">
                    Search or select a menu category
                </label>
                <input
                    id="menu-category-search"
                    type="text"
                    role="combobox"
                    aria-expanded={isOpen}
                    aria-controls="category-listbox"
                    aria-autocomplete="list"
                    aria-label="Search or select a menu category"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Search or select a menu category"
                    className="flex-1 bg-transparent text-[14px] md:text-[15px] text-gray-800 placeholder:text-gray-400 outline-none leading-5"
                />

                <button
                    type="button"
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label={isOpen ? 'Close category menu' : 'Open category menu'}
                    className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF7A18]"
                >
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
            </div>

            {/* ── Dropdown panel ── */}
            <div
                id="category-listbox"
                role="listbox"
                aria-label="Menu categories"
                className={`absolute left-4 right-4 md:left-12 md:right-12 lg:left-16 lg:right-16 z-50
                    bg-white border border-t-0 border-gray-200 rounded-b-xl md:rounded-b-2xl shadow-lg
                    overflow-hidden transition-all duration-200 origin-top
                    ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
            >
                {/* Header row */}
                <div className="px-4 py-3 border-b border-gray-100">
                    <p
                        className="text-gray-900 font-medium text-sm"
                       
                    >
                        Menu Categories
                    </p>
                </div>

                {/* Category list */}
                <ul className="py-1" role="presentation">
                    {CATEGORIES.map((category) => {
                        const isActive = selected === category.name
                        return (
                            <li key={category.name} role="option" aria-selected={isActive}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(category.name)}
                                    className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150
                                        focus-visible:outline-none focus-visible:bg-orange-50
                                        hover:bg-orange-50
                                        ${isActive ? 'bg-primary-orange/60 text-gray-900 font-medium' : 'text-gray-700 font-normal'}`}
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    {category.name}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default MenuCategories