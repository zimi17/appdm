import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { debounce } from "./utils/debounce";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// TypeScript interfaces
interface MenuItem {
    name: string;
    href: string;
}

interface Size {
    width: number;
    height: number;
}

// Custom hook untuk ResizeObserver
export function useResizeObserver(
    ref: React.RefObject<HTMLElement> | React.MutableRefObject<HTMLElement | undefined>,
    onResize?: ResizeObserverCallback
): Size {
    const [size, setSize] = useState<Size>({ width: 0, height: 0 });

    useEffect(() => {
        const element = "current" in ref ? ref.current : ref;
        if (!element) return;

        let subscribed = true;

        const handleResize: ResizeObserverCallback = (entries) => {
            if (!subscribed) return;

            const contentRect = entries[0]?.contentRect;
            if (contentRect) {
                setSize({
                    width: contentRect.width,
                    height: contentRect.height
                });
            }

            onResize?.(entries, observer);
        };

        const debouncedResize = debounce(handleResize, 150);
        const observer = new ResizeObserver(debouncedResize);
        observer.observe(element);

        return () => {
            subscribed = false;
            observer.unobserve(element);
        };
    }, [ref, onResize]);

    return size;
}

// Fungsi untuk mendapatkan indeks item yang muat
export function getFittingItemsIndex(
    totalWidth: number,
    itemsWidth: number[],
    moreItemWidth?: number
): number {
    let widthLeft = Math.floor(totalWidth);

    const moreIndex = itemsWidth.findIndex((itemWidth) => {
        if (itemWidth) {
            widthLeft = widthLeft - itemWidth;
            return widthLeft <= 0;
        }
        return false;
    });

    if (moreIndex === -1) {
        return itemsWidth.length;
    }

    // Pastikan masih ada ruang untuk tombol "Lainnya"
    const lastItemWidth = itemsWidth[moreIndex];
    if (
        moreItemWidth &&
        lastItemWidth &&
        widthLeft + lastItemWidth < moreItemWidth
    ) {
        return moreIndex - 1;
    }

    return moreIndex;
}

// Komponen Header
const Header: React.FC = () => {
    const headerRef = useRef<HTMLElement>(null);
    const menuContainerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<SVGSVGElement>(null);
    const logoWordmarkRef = useRef<SVGTextElement>(null);
    const breadcrumbRef = useRef<HTMLDivElement>(null);

    const { width: menuContainerWidth } = useResizeObserver(menuContainerRef);

    // Daftar menu
    const menuItems: MenuItem[] = [
        { name: 'Program Sarjana', href: '#' },
        { name: 'Program Pascasarjana', href: '#' },
        { name: 'Penerimaan Mahasiswa', href: '#' },
        { name: 'Kehidupan Kampus', href: '#' },
        { name: 'Riset & Publikasi', href: '#' },
        { name: 'Alumni', href: '#' },
        { name: 'Berita & Acara', href: '#' }
    ];

    const [visibleItems, setVisibleItems] = useState<MenuItem[]>([]);
    const [hiddenItems, setHiddenItems] = useState<MenuItem[]>([]);
    const [moreButtonWidth, setMoreButtonWidth] = useState(80); // Default width

    // Efek untuk mengatur menu berdasarkan lebar container
    useEffect(() => {
        if (!menuContainerRef.current) return;

        // Hitung lebar setiap item menu
        const tempMenu = document.createElement('ul');
        tempMenu.style.visibility = 'hidden';
        tempMenu.style.position = 'absolute';
        tempMenu.style.display = 'flex';
        tempMenu.style.gap = '24px'; // space-x-6 -> 24px
        tempMenu.className = 'text-sm font-medium';

        document.body.appendChild(tempMenu);

        const itemsWidth = menuItems.map(item => {
            const li = document.createElement('li');
            li.textContent = item.name;
            tempMenu.appendChild(li);
            return li.offsetWidth;
        });

        // Hitung lebar tombol "Lainnya"
        const moreButton = document.createElement('button');
        moreButton.innerHTML = 'Lainnya <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>';
        moreButton.style.display = 'flex';
        moreButton.style.alignItems = 'center';
        moreButton.style.gap = '4px';
        moreButton.className = 'text-sm font-medium';
        tempMenu.appendChild(moreButton);
        setMoreButtonWidth(moreButton.offsetWidth);

        document.body.removeChild(tempMenu);

        // Hitung indeks item yang muat
        const fittingIndex = getFittingItemsIndex(
            menuContainerWidth,
            itemsWidth,
            moreButtonWidth
        );

        setVisibleItems(menuItems.slice(0, fittingIndex));
        setHiddenItems(menuItems.slice(fittingIndex));
    }, [menuContainerWidth, menuItems, moreButtonWidth]);

    // Efek untuk animasi header dengan GSAP
    useEffect(() => {
        if (!headerRef.current || !logoRef.current || !logoWordmarkRef.current || !breadcrumbRef.current) return;

        const header = headerRef.current;
        const logo = logoRef.current;
        const logoWordmark = logoWordmarkRef.current;
        const breadcrumb = breadcrumbRef.current;

        // Setup ScrollTrigger
        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "+=120", // 120px
            scrub: 1,
            onToggle: self => {
                if (self.isActive) {
                    header.classList.add("shadow-md");
                } else {
                    header.classList.remove("shadow-md");
                }
            },
            animation: gsap.timeline()
                .to(header, {
                    height: "3.25rem",
                    duration: 0.3,
                    ease: "power2.out"
                })
                .to(logo, {
                    height: "2.5rem",
                    duration: 0.3,
                    ease: "power2.out"
                }, "<")
                .to(logoWordmark, {
                    opacity: 0,
                    duration: 0.2,
                    ease: "power2.out"
                }, "<")
                .to(breadcrumb, {
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                    paddingBottom: 0,
                    border: "none",
                    duration: 0.3,
                    ease: "power2.out"
                }, "<"),
            invalidateOnRefresh: true
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <header
                ref={headerRef}
                className="sticky top-0 text-white flex items-center p-4 h-24 bg-gray-900 z-40"
            >
                {/* Logo */}
                <div className="w-1/4 flex-shrink-0">
                    <a href="/" aria-label="Beranda STIE Dwimulya">
                        <svg
                            ref={logoRef}
                            className="h-16 w-auto"
                            viewBox="0 0 150 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="40" height="40" rx="8" fill="#F3F4F6" />
                            <text
                                ref={logoWordmarkRef}
                                x="50"
                                y="25"
                                fontFamily="Inter, sans-serif"
                                fontSize="14"
                                fontWeight="bold"
                                fill="#F3F4F6"
                            >
                                DWIMULYA
                            </text>
                        </svg>
                    </a>
                </div>

                {/* Konten Utama */}
                <div className="w-3/4 h-full flex flex-col justify-center pl-6 overflow-hidden">
                    {/* Breadcrumb */}
                    <div
                        ref={breadcrumbRef}
                        className="border-b border-gray-700 pb-1 mb-2"
                    >
                        <h2 className="text-xl font-semibold tracking-wider">Akademik</h2>
                    </div>

                    {/* Menu Lokal Dinamis */}
                    <nav
                        ref={menuContainerRef}
                        className="relative flex items-center justify-start w-full"
                    >
                        <ul className="flex items-center space-x-6 text-sm font-medium text-gray-300">
                            {visibleItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {hiddenItems.length > 0 && (
                            <div className="relative ml-6 group">
                                <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white">
                                    <span>Lainnya</span>
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <ul className="absolute top-full right-0 hidden group-hover:block bg-gray-800 min-w-[200px] rounded-lg shadow-lg py-2 z-10">
                                    {hiddenItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </nav>
                </div>

                {/* Tombol Aksi */}
                <div className="absolute top-2 right-0 h-9 flex items-center pr-6 space-x-4">
                    <a
                        href="#"
                        className="hidden md:inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-md text-sm transition-colors"
                    >
                        Daftar
                    </a>
                    <button
                        aria-label="Cari"
                        className="p-2 rounded-full hover:bg-gray-700"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        aria-label="Buka menu utama"
                        className="p-2 rounded-full hover:bg-gray-700"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Konten Utama dengan padding top */}
            <main className="pt-[7.5rem] p-8">
                <h1 className="text-3xl font-bold mb-6">Implementasi Header Canggih</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-3">Fitur Utama</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>ResizeObserver untuk menu dinamis</li>
                            <li>GSAP untuk animasi perubahan tinggi header</li>
                            <li>Menu adaptif berdasarkan lebar yang tersedia</li>
                            <li>ScrollTrigger untuk sticky header</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-3">Detail Implementasi</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Header tinggi awal: 6.25rem (100px)</li>
                            <li>Header setelah scroll: 3.25rem (52px)</li>
                            <li>Padding top konten: 7.5rem (120px)</li>
                            <li>Animasi menggunakan easing power2.out</li>
                        </ul>
                    </div>
                </div>

                <div className="h-[2000px] bg-gradient-to-b from-blue-50 to-gray-100 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Scroll untuk Melihat Animasi</h3>
                    <p className="text-gray-600 mb-4">
                        Scroll ke bawah untuk melihat efek animasi perubahan tinggi header yang mulus.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ResizeObserver</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">GSAP</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">ScrollTrigger</span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Responsif</span>
                    </div>

                    <div className="space-y-4 max-w-2xl">
                        <div className="h-4 bg-blue-200 rounded-full animate-pulse"></div>
                        <div className="h-4 bg-blue-200 rounded-full animate-pulse w-5/6"></div>
                        <div className="h-4 bg-blue-200 rounded-full animate-pulse w-4/6"></div>
                        <div className="h-4 bg-blue-200 rounded-full animate-pulse w-3/4 mt-6"></div>
                        <div className="h-4 bg-blue-200 rounded-full animate-pulse w-2/3"></div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Header;