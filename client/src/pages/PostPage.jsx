import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const { postSlug } = useParams();

    useEffect(() => {

    }, [postSlug]);
  return (
    <div>PostPage</div>
  )
}
