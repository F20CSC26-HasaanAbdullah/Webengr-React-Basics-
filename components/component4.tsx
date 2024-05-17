import { error } from 'console'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
 
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
 
const Component4 = () => {
    const [data, setData] = useState<Post | null>(null);
    const [postId, setPostId]= useState(1);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json()) // it gets the response but response is not readable
            .then(data => { setData(data) })
            .catch((error) => console.log(error))
 
    }, [postId])
    return (
        <div className=' flex flex-col  gap-5'>
            <div className=' w-[500px]  bg-slate-200 rounded-lg p-10 shadow-lg border border-black/25'>
                
                <h1 className='font-bold text-xl border border-gray-300'>{data?.title}</h1>
                <h2 className='flex text-sm'>{data?.body}</h2>
            </div>
            <div className='flex justify-between'>
                <Button className= 'invisible' onClick={() => {if (postId<=1) return; setPostId(prev => prev-1)}}> Previous</Button>
                <Button onClick={() => setPostId(prev => prev+1)}>Next</Button>
            </div>
 
 
        </div>
    )
}
 
export default Component4