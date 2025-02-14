'use client'

import { useState } from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './tooltip'
import { MoonIcon, SunIcon } from 'lucide-react'

type Props = {
	className?: string
}

export default function LightDarkToggle({ className }: Props) {
	const [isDarkMode, setIstDarkMode] = useState(true)
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					className={className}
					asChild
					onClick={() => {
						setIstDarkMode(prevState => !prevState)
						document.body.classList.toggle('dark')
					}}
				>
					{isDarkMode ? <MoonIcon /> : <SunIcon />}
				</TooltipTrigger>
				<TooltipContent>
					{isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
