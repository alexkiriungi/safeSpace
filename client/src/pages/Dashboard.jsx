import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";


export default function Dashboard() {
  const location = useLocation();
  const [ tab, setTab ] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search])
  return (
    <div>
      <div className="">
        {/* sidebar */}
        <DashSidebar />
      </div>
      <div className="">
        {/* Right Side Profile info */}
        {tab === 'profile' && <DashProfile />}
      </div>
    </div>
  )
}
