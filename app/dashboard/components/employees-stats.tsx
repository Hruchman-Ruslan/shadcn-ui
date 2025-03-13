import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	AlertTriangleIcon,
	BadgeCheck,
	PartyPopperIcon,
	UserCheck2Icon,
	UserIcon,
	UserRoundXIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import cm from '@/public/images/cm.jpg'

export default function EmployeesStats() {
	const totalEmployees = 100
	const employeesPresent = 80
	const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100

	return (
		<div className='grid lg:grid-cols-3 gap-4'>
			<Card>
				<CardHeader className='pb-2'>
					<CardTitle className='text-base'>Total employees</CardTitle>
				</CardHeader>
				<CardContent className='flex justify-between items-center'>
					<div className='flex gap-2'>
						<UserIcon />
						<span className='text-5xl font-bold'>{totalEmployees}</span>
					</div>
					<div>
						<Button size={'xs'} asChild>
							<Link href='/dashboard/employees'>View all</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className='pb-2'>
					<CardTitle className='text-base'>Employees present</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='flex gap-2'>
						{employeesPresentPercentage > 75 ? (
							<UserCheck2Icon />
						) : (
							<UserRoundXIcon />
						)}
						<span className='text-5xl font-bold'>{employeesPresent}</span>
					</div>
				</CardContent>
				<CardFooter>
					{employeesPresentPercentage > 75 ? (
						<span className='text-xs text-green-500 flex gap-1 items-center'>
							<BadgeCheck />
							{employeesPresentPercentage}% of employees are present
						</span>
					) : (
						<span className='text-xs text-red-500 flex gap-1 items-center'>
							<AlertTriangleIcon />
							Only {employeesPresentPercentage}% of employees are present
						</span>
					)}
				</CardFooter>
			</Card>
			<Card className='border-pink-500 flex flex-col'>
				<CardHeader className='pb-2'>
					<CardTitle className='text-base'>Employee of the month</CardTitle>
				</CardHeader>
				<CardContent className='flex gap-2 items-center'>
					<Avatar>
						<Image src={cm} alt='Employee of the month avatar' />
						<AvatarFallback>CM</AvatarFallback>
					</Avatar>
					<span className='text-2xl'>Colin Murray!</span>
				</CardContent>
				<CardFooter className='flex gap-2 items-center text-xs text-muted-foreground mt-auto'>
					<PartyPopperIcon className='text-pink-500' />
					<span>Congratulations, Colin!</span>
				</CardFooter>
			</Card>
		</div>
	)
}
