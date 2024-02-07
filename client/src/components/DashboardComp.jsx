import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function DashboardComp() {
    const [ users, setUsers ] = useState([]);
    const [ comments, setComments ] = useState([]);
    const [ posts, setPosts ] = useState([]);
    const [ totalUsers, setTotalUsers ] = useState(0);
    const [ totalPosts, setTotalPosts ] = useState(0);
    const [ totalComments, setTotalComments ] = useState(0);
    const [ lasMonthUsers, setLastMonthUsers ] = useState(0);
    const [ lastMonthPosts, setLastMonthPosts ] = usesState(0);
    const [ lastMonthComments, setLastMonthComments ] = useState(0);
    return (
        <div>DashboardComp</div>
    );
}