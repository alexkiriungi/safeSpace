import { useEffect } from "react"


export default function Comment({comment}) {
    useEffect(() => {
        const getUser = async () => {
            try {
                
            } catch (error) {
                console.log(error.message)
            }
        };
        getUser();
    }, [comment]);
    return (
        <div>Comment</div>
  )
}
