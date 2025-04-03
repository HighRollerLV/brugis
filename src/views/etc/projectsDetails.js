import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {FiArrowLeft, FiArrowRight, FiX} from 'react-icons/fi';

const ProjectDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showLightbox, setShowLightbox] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPostDetails = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://brugisbackend.lucid-websites.com/wp-json/wp/v2/posts/${id}?_embed`);
                const data = await response.json();
                setPost(data);

                // Extract images
                const contentImages = extractAllImages(data.content.rendered)
                    .map(img => img.replace(/-\d+x\d+\./, '.'));

                // Use featured image if available
                const featuredImg = data._embedded?.['wp:featuredmedia']?.[0]?.source_url;

                setImages(featuredImg
                    ? [featuredImg, ...contentImages]
                    : contentImages.length > 0
                        ? contentImages
                        : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80']
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchPostDetails();
    }, [id]);

    const extractStreet = (content) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const ielaElement = Array.from(doc.querySelectorAll('li')).find(li =>
            li.textContent.includes('Iela:')
        );

        if (ielaElement) {
            return ielaElement.textContent
                .replace('Iela:', '')
                .trim()
                .replace(/\s+/g, ' ');
        }
        return null;
    };

    const extractAllImages = (content) => {
        return [...content.matchAll(/<img[^>]+src="([^">]+)"/g)]
            .map(match => match[1])
            .filter(src => !src.includes('logo') && !src.includes('icon'));
    };

    const navigateImages = (direction) => {
        setCurrentImageIndex(prev => {
            if (direction === 'next') {
                return (prev + 1) % images.length;
            } else {
                return (prev - 1 + images.length) % images.length;
            }
        });
    };

    if (isLoading) return (
        <div className="min-h-screen bg-[#292929] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-600 border-t-gray-400 rounded-full animate-spin"></div>
        </div>
    );

    const street = extractStreet(post.content.rendered);
    const [mainImage, ...gallery] = images;

    return (
        <div className="min-h-screen bg-[#292929] text-white">
            {/* Project Header */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-100">
                        {post.title.rendered}
                    </h1>
                    {street && (
                        <div className="inline-flex items-center bg-[#1E1E1E] px-4 py-2 rounded-full">
                            <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span className="text-lg font-medium">{street}</span>
                        </div>
                    )}
                </div>

                {/* Main Image */}
                <div
                    className="mb-12 rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] transition-transform duration-300 hover:shadow-gray-700/50">
                    <div className="aspect-video w-full relative group cursor-pointer">
                        <img
                            src={`${mainImage}?w=1200&q=80`}
                            alt={post.title.rendered}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onClick={() => {
                                setCurrentImageIndex(0);
                                setShowLightbox(true);
                            }}
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                            <span className="text-white bg-black/60 px-3 py-1 rounded-md text-sm">
                                Click to enlarge
                            </span>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                {gallery.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-0.5 bg-gray-400 mr-4"></span>
                            Gallery
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {gallery.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative aspect-square bg-[#1e1e1e] rounded-lg overflow-hidden group cursor-pointer"
                                    onClick={() => {
                                        setCurrentImageIndex(i + 1);
                                        setShowLightbox(true);
                                    }}
                                >
                                    <img
                                        src={`${img}?w=600&q=80`}
                                        alt={`Gallery ${i + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white bg-black/60 px-3 py-1 rounded-md text-sm">
                                            View
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {showLightbox && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
                    <button
                        className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors"
                        onClick={() => setShowLightbox(false)}
                    >
                        <FiX className="w-8 h-8"/>
                    </button>

                    <div className="relative w-full max-w-6xl max-h-[90vh]">
                        <img
                            src={`${images[currentImageIndex]}?w=1600&q=90`}
                            alt={`Slide ${currentImageIndex + 1}`}
                            className="w-full h-full object-contain max-h-[80vh] rounded-lg"
                        />

                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImages('prev');
                            }}
                        >
                            <FiArrowLeft className="w-6 h-6"/>
                        </button>

                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImages('next');
                            }}
                        >
                            <FiArrowRight className="w-6 h-6"/>
                        </button>

                        <div className="absolute bottom-6 left-0 right-0 text-center">
                            <span className="inline-block bg-black/60 text-white px-3 py-1 rounded-md text-sm">
                                {currentImageIndex + 1} / {images.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;