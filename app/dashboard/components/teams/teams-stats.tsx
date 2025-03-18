import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ListChecksIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'

export default function TeamsStats() {
	return (
		<>
			<div className='grid lg:grid-cols-3 gap-4'>
				<Card>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base'>Total teams</CardTitle>
					</CardHeader>
					<CardContent className='flex justify-between items-center'>
						<div className='flex gap-2'>
							<UsersIcon />
							<span className='text-5xl font-bold'>8</span>
						</div>
						<div>
							<Button size={'xs'} asChild>
								<Link href='/dashboard/teams'>View all</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base'>Team leaders</CardTitle>
					</CardHeader>
					<CardContent></CardContent>
				</Card>
				<Card>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base'>Team distribution</CardTitle>
					</CardHeader>
					<CardContent className='flex gap-2 items-center'></CardContent>
				</Card>
			</div>
			<Card className='my-4'>
				<CardHeader>
					<CardTitle className=' text-lg flex gap-2 items-center'>
						<ListChecksIcon />
						<span>Support tickets resolver</span>
					</CardTitle>
				</CardHeader>
				<CardContent className='pl-0'>line graph</CardContent>
			</Card>
		</>
	)
}
