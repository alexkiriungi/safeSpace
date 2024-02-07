import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HiArrowNarrowUp, HiOutlineUserGroup } from 'react-icons/hi';

export default function DashboardComp() {
    const [ users, setUsers ] = useState([]);
    const [ comments, setComments ] = useState([]);
    const [ posts, setPosts ] = useState([]);
    const [ totalUsers, setTotalUsers ] = useState(0);
    const [ totalPosts, setTotalPosts ] = useState(0);
    const [ totalComments, setTotalComments ] = useState(0);
    const [ lasMonthUsers, setLastMonthUsers ] = useState(0);
    const [ lastMonthPosts, setLastMonthPosts ] = useState(0);
    const [ lastMonthComments, setLastMonthComments ] = useState(0);
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const res = await fetch('/api/user/getusers?limit=5');
            const data = await res.json();
            if (res.ok) {
                setUsers(data.users);
                setTotalUsers(data.totalUsers);
                setLastMonthUsers(data.lasMonthUsers);
            }
        } catch (error) {
            console.log(error.message);
        }};
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/post/getposts?limit=5');
                const data = await res.json();
                if (res.ok) {
                    setPosts(data.posts);
                    setTotalPosts(data.totalPosts);
                    setLastMonthPosts(data.lastMonthPosts);
                }
            } catch (error) {
                console.log(error.message);
            }

        };
        const fetchComments = async () => {
            const res = await fetch('/api/comment/getcomments?limit=5');
            const data = await res.json();
            if (res.ok) {
                setComments(data.comments);
                setTotalComments(data.totalComments);
                setLastMonthComments(data.lastMonthComments);
            }
        };
        if (currentUser.isAdmin) {
            fetchUsers();
            fetchPosts();
            fetchComments();
        }
    }, [currentUser]);

    return (
        <div className='p-3 md:mx-auto'>
            <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
                <div className="flex justify-between">
                    <div className="">
                        <h3 className='text-gray-500 text-md uppercase'>Total Users</h3>
                        <p className='text-2xl'>{totalUsers}</p>
                    </div>
                    <HiOutlineUserGroup className='bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg'/>
                </div>
                <div className="flex gap-2 text-sm">
                    <span className='text-grenn-500 flex items-center'>
                        <HiArrowNarrowUp />
                        {setLastMonthUsers}
                    </span>
                    <div className="text-gray-500">Last month</div>
                </div>
            </div>
        </div>
    );
}