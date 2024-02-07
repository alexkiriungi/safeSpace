import { TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
    const location = useLocation();
    const [ sidebarData, setSidebarData ] = useState({
        searchTerm: '',
        sort: 'desc',
        category: 'uncategorized'
    });
    const [ posts, setPosts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ showMore, setShowMore ] = useState(false);

    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        const sortFromUrl = urlParams.get('sort');
        const categoryFromUrl = urlParams.get('category');
        if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
            setSidebarData({
                ...sidebarData,
                searchTerm: searchTermFromUrl,
                sort: sortFromUrl,
                category: categoryFromUrl,
            });
        }

        const fetchPosts = async () => {
            setLoading(true);
            const searchQuery = urlParams.toString();
            const res = await fetch(`/api/post/getposts?${searchQuery}`);
            if (!res.ok) {
                setLoading(false);
                return;
            }
            if (res.ok) {
                const data = await res.json();
                setLoading(false);
                setPosts(data.posts);
                if (data.posts.length === 9) {
                    setShowMore(true);
                } else {false}
            }
        };
        fetchPosts();
    }, [location.search]);

    const handleChange = (e) => {
        if (e.target.id === 'searchTerm') {
            setSidebarData({ ...sidebarData, searchTerm: e.target.value });
        }
        if (e.target.id === 'sort') {
            const order = e.target.value || 'desc';
            setSidebarData({ ...sidebarData, sort: order });
        }
        if (e.target.value) {
            const category = e.targey.value || 'uncategorized';
            setSidebarData({ ...sidebarData, category });
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
                <form className="flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                        <label className="whitespace-nowrap font-semibold">
                            Search Term:
                        </label>
                        <TextInput placeholder="Search..." 
                        id='searchTerm' type='text' 
                        value={sidebarData.searchTerm}
                        onChange={handleChange}/>
                    </div>
                    <div className="">
                        <label className="font-semibold ">Sort:</label>
                    </div>
                </form>
            </div>
        </div>
    );
}