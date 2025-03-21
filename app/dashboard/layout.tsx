'use client'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import MainMenu from './components/main-menu'
import MenuTitle from './components/menu-title'
import { MenuIcon } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useState } from 'react'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const isDesktop = useMediaQuery('(min-width: 768px)')
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<div className='md:grid md:grid-cols-[250px_1fr] h-screen'>
			<MainMenu className='hidden md:flex' />
			{!isDesktop && (
				<div className='p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border'>
					<MenuTitle />
					<Drawer
						direction='right'
						open={isMenuOpen}
						onClose={() => setIsMenuOpen(false)}
						onOpenChange={open => setIsMenuOpen(open)}
					>
						<DrawerTrigger>
							<MenuIcon />
						</DrawerTrigger>
						<DrawerContent>
							<MainMenu />
						</DrawerContent>
					</Drawer>
				</div>
			)}
			<div className='overflow-auto py-2 px-4'>
				<h1 className='pb-4'>Welcome back, Ruslan!</h1>
				{children}
			</div>
		</div>
	)
}
