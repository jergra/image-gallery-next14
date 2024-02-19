import Navbar from "@/components/Navbar"
import { supabaseServer } from "@/lib/supabase/server"
import Image from "next/image"

type Props = {
  params: { id: string }
}

export default async function page({ params: { id } }: Props) {

  const supabase = supabaseServer()

	const {data}: any = await supabase
		.from ('posts')
		.select()
		.eq('id', id)

	const imageUrlHost = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/`;

  const image = data[0].post_by + '/' + data[0].id + '/' + data[0].name

 
  return (
    <div>
        <Navbar />
        <div className='flex flex-col md:flex-row ml-5 mt-10 mb-10'>
            <Image
            src={imageUrlHost + image}
            width={700}
            height={700}
            alt=""
            />
            <div className='md:ml-20 md:w-1/3'>
            <div className='my-4 md:mb-4 md:mt-0'>{data[0].description}</div>
            </div>
        </div> 
    </div>
  )
}
