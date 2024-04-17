import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();

    const postStyle = {
        border: "2px solid yellow",
        padding: "5px",
        borderRadius: "20px"

    };

    const handleShowDetails = () => {
        navigate(`/post/${id}`)

    }
    return (
        <div style={postStyle}>
            <h3 className="text-4xl">Post of id : {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button className="btn">Show Details</button></Link>
            <button onClick={handleShowDetails}> Click Me</button>
        </div>
    );
};

export default Post;