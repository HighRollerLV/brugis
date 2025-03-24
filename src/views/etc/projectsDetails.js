import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams(); // Get the project id from the URL
    const [post, setPost] = useState(null);

    // Fetch individual project data based on the project ID
    useEffect(() => {
        const fetchPostDetails = async () => {
            const response = await fetch(`https://brugisbackend.lucid-websites.com/wp-json/wp/v2/posts/${id}`);
            const data = await response.json();
            setPost(data);
        };
        fetchPostDetails();
    }, [id]);

    // Function to extract street name (Iela) from content
    const extractStreet = (content) => {
        const match = content.match(/Iela:(.*?)(<\/li>)/);
        return match ? match[1].trim() : 'Street not available';
    };

    if (!post) return <div>Loading...</div>; // Show loading state if the post hasn't been fetched yet

    const street = extractStreet(post.content.rendered);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center mb-6">{post.title.rendered}</h2>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Project Image */}
                <img src={post.featured_media_url} alt={post.title.rendered} className="w-full h-64 object-cover transition-opacity duration-500 opacity-100" />
                <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Project Details</h3>
                    <p className="text-gray-600 mt-2"><strong>Street:</strong> {street}</p>
                    <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
