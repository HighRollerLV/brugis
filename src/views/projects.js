import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [posts, setPosts] = useState([]);

    // Fetch posts data from the API
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://brugisbackend.lucid-websites.com/wp-json/wp/v2/posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    // Function to extract street name (Iela) from content
    const extractStreet = (content) => {
        // Match the content that comes after the label "Iela:"
        const match = content.match(/<label>Iela:<\/label>\s*([^<]+)/);
        return match ? match[1].trim() : 'Street not available';
    };

    // Function to extract the first image from content
    const extractImage = (content) => {
        const match = content.match(/<img[^>]+src="([^">]+)"/); // Regex to find the first image src
        return match ? match[1] : 'https://via.placeholder.com/150'; // Default image if no image found
    };

    return (
        <div className="mx-auto p-6 bg-[#292929] w-full h-screen font-serif">
            <h2 className="text-3xl text-center mb-6 text-white font-serif tracking-wide">Our Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {posts.map((post) => {
                    const street = extractStreet(post.content.rendered);
                    const image = extractImage(post.content.rendered);

                    return (
                        <div key={post.id} className="bg-[#2D2D2D] shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                            <img src={image} alt={post.title.rendered} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white">{post.title.rendered}</h3>
                                <p className="text-white mt-2">{street}</p>
                            </div>
                            <div className="p-4 bg-[#1E1E1E]">
                                {/* Link to the individual project page */}
                                <Link to={`/projekti/${post.id}`} className="text-white hover:text-gray-400 font-semibold ">
                                    View Project
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;

