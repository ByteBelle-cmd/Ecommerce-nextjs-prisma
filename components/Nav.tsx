'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"

interface NavProps {
    children: React.ReactNode
}

export function Nav({ children }: NavProps) {
    return (
        <nav className="w-full top-0 h-[60px] fixed backdrop-blur-sm bg-neutral-200 shadow-lg flex items-center gap-x-7 text-black font-medium justify-center">
            {children}
        </nav>
    )
}

export function NavLink(props: ComponentProps<typeof Link>) {
    const pathname = usePathname();
    const isActive = pathname === props.href;

    return (
        <Link
            {...props}
            className={cn(
                "block py-2 px-4 text-lg font-semibold text-zinc-700 hover:bg-zinc-200",
                isActive && "bg-neutral-500 text-white"
            )}
        />
    );
}