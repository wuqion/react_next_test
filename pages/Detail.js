import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function({url}){
    // const router = useRouter()

    const router = useRouter()
        
    console.log(router);
    
    return (
        <div>
            在控制台上看参数
        </div>
    )

}
