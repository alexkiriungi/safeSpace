import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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

        };
        if (currentUser.isAdmin) {
            fetchUsers();
            fetchPosts();
            fetchComments();
        }
    }, [currentUser]);

    return (
        <div>DashboardComp</div>
    );
}