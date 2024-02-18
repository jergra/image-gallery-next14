import DeletePost from '@/components/DeletePost'
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import Uploader from '@/components/Uploader'
import { supabaseServer } from '@/lib/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function page() {

	const supabase = supabaseServer()

	const {data} = await supabase
		.from ('posts')
		.select('*,profiles(display_name)')
		.order('created_at', {ascending: false})

	const imageUrlHost = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/`;

	const posts = data?.map((post) => {
		return {
			image: `${post.post_by}/${post.id}/${post.name}`, 
			...post,
		}
	})

	return (
		<div>
			<div className='flex w-full justify-between items-center pb-5'>
				<Navbar />
				<Profile />
			</div>
			<div className='flex flex-wrap'>
				{posts?.map((post) => {
					return (
						<div key={post.id} className='relative m-5'>
							<Link href={`/image/${post.id}`}>
								<div className='relative'>
									<Image 
										src={imageUrlHost + post.image}
										alt={post.description || ''}
										width={343}
										height={343}
										className='object-cover object-center'
									/>
								</div>
								<DeletePost post_by={post.post_by} image={post.image} />
							</Link>
						</div>
					)
				})}
			</div>
			
			<Uploader />
		</div>
	)
}
