import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ImArrowLeft, ImArrowRight} from "react-icons/im";

const Projects = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://brugisbackend.lucid-websites.com/wp-json/wp/v2/posts');
                const data = await response.json();
                setPosts(data);

                data.forEach(post => {
                    const img = new Image();
                    img.src = extractImage(post.content.rendered).replace(/-\d+x\d+(\.\w+)/, '$1') + '?w=800';
                    img.onload = () => {
                        setLoadedImages(prev => ({...prev, [post.id]: true}));
                    };
                });
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const extractStreet = (content) => {
        const match = content.match(/<label>Iela:<\/label>\s*([^<]+)/);
        return match ? match[1].trim() : '';
    };

    const extractImage = (content) => {
        const match = content.match(/<img[^>]+src="([^">]+)"/);
        return match ? match[1] : 'https://via.placeholder.com/800x600.webp?text=BRUGIS';
    };

    const projectsPerPage = 8;
    const totalProjects = posts.length;
    const maxPage = Math.ceil(totalProjects / projectsPerPage);
    const paginatedPosts = posts.slice(
        (currentPage - 1) * projectsPerPage,
        currentPage * projectsPerPage
    );

    return (
        <div className="mx-auto p-6 bg-[#292929] w-full min-h-screen flex flex-col">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
                        Objekti
                    </span>
                </h2>
                <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
            </div>

            {/* Loading Skeleton - Enhanced */}
            {isLoading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-[#2D2D2D] rounded-xl overflow-hidden h-[420px] animate-pulse">
                            <div className="aspect-[4/3] bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a]"></div>
                            <div className="p-6 space-y-4">
                                <div className="h-6 bg-[#1e1e1e] rounded-full w-3/4"></div>
                                <div className="h-4 bg-[#1e1e1e] rounded-full w-1/2"></div>
                                <div className="mt-6 h-10 bg-[#1e1e1e] rounded-lg"></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Projects Grid - Enhanced */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
                {paginatedPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-[#2D2D2D] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full group"
                    >
                        {/* Image Container */}
                        <div
                            className="relative aspect-[4/3] bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] overflow-hidden">
                            {!loadedImages[post.id] && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="w-10 h-10 border-4 border-[#555] border-t-gray-400 rounded-full animate-spin"></div>
                                </div>
                            )}
                            <img
                                src={extractImage(post.content.rendered).replace(/-\d+x\d+(\.\w+)/, '$1') + '?w=800'}
                                alt={post.title.rendered}
                                className={`absolute h-full w-full object-cover object-top transition-all duration-500 ${loadedImages[post.id] ? 'opacity-100 group-hover:scale-105' : 'opacity-0'}`}
                                loading="lazy"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x600.webp?text=BRUGIS';
                                    e.target.className += ' object-contain';
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title.rendered}</h3>
                            {extractStreet(post.content.rendered) && (
                                <p className="text-gray-300 mb-6 line-clamp-1">
                                    {extractStreet(post.content.rendered)}
                                </p>
                            )}

                            <Link
                                to={`/projekti/${post.id}`}
                                className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-[#1E1E1E] text-white rounded-lg hover:bg-[#333] transition-colors duration-300 group-hover:bg-[#333]"
                            >
                                Apskatīt Objektu
                                <svg
                                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M14 5l7 7-7 7M5 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination - Enhanced */}
            {totalProjects > projectsPerPage && (
                <div className="mt-12 py-6 flex justify-center">
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] text-white rounded-full disabled:opacity-50 hover:bg-[#333] transition-colors duration-300"
                            aria-label="Previous page"
                        >
                            <ImArrowLeft className="text-sm"/>
                        </button>

                        <div className="flex space-x-2">
                            {Array.from({length: Math.min(5, maxPage)}, (_, i) => {
                                const page = currentPage <= 3
                                    ? i + 1
                                    : currentPage >= maxPage - 2
                                        ? maxPage - 4 + i
                                        : currentPage - 2 + i;
                                return page > 0 && page <= maxPage ? (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-12 h-12 flex items-center justify-center rounded-full ${currentPage === page ? 'bg-gray-400 text-[#1E1E1E] font-bold' : 'bg-[#1E1E1E] text-white hover:bg-[#333]'} transition-colors duration-300`}
                                    >
                                        {page}
                                    </button>
                                ) : null;
                            })}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, maxPage))}
                            disabled={currentPage === maxPage}
                            className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] text-white rounded-full disabled:opacity-50 hover:bg-[#333] transition-colors duration-300"
                            aria-label="Next page"
                        >
                            <ImArrowRight className="text-sm"/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;