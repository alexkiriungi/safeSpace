import { useEffect, useState } from "react";
import moment from 'moment';


export default function Comment({comment}) {
    const [ user, setUser ] = useState({});
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(`/api/user/${comment.userId}`);
                const data = await res.json();
                if (res.ok) {
                    setUser(data);
                }
            } catch (error) {
                console.log(error.message)
            }
        };
        getUser();
    }, [comment]);
    return (
        <div>
            <div className="">
                <img className='w-10 h-10 rounded-full bg-gray-200'
                src={user.profilePicture} alt={user.username} />
            </div>
            <div className="">
                <div className="">
                    <span className="font-bold mr-1 text-xs truncate">
                        {user ? `@${user.username}` : "anonymous user"}
                    </span>
                    <span>
                        {moment(comment.createdAt).fromNow()}
                    </span>
                </div>
            </div>
        </div>
    );
}
