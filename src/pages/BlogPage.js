import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for the Blog Page
const BlogWrapper = styled.section`
    padding: 4rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
`;

const HeroSection = styled.div`
    text-align: center;
    margin-bottom: 4rem; /* Increased margin for better spacing */
`;

const HeroTitle = styled.h1`
    font-size: 3.5rem; /* Increased size for more prominence */
    margin-bottom: 0.5rem;
    color: var(--deep-blue);
`;

const HeroSubtitle = styled.p`
    font-size: 1.5rem;
    color: var(--gray-tone);
`;

const FilterContainer = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const FilterButton = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-2px);
    }
`;

const BlogPostsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
`;

const PostCard = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
`;

const PostTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--deep-blue);
`;

const PostExcerpt = styled.p`
    font-size: 1rem;
    color: var(--gray-tone);
`;

const ReadMoreButton = styled.button`
    margin-top: 1rem;
    background-color: var(--bright-coral);
    color: var(--soft-white);
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-2px);
    }
`;

const BlogPage = () => {
    const [filter, setFilter] = useState('all');

    const blogPosts = [
        {
            id: 1,
            title: 'How to Choose the Right Career Path',
            excerpt: 'Explore different strategies for selecting a career that aligns with your skills and interests.',
            category: 'Career Advice',
            link: '#',
        },
        {
            id: 2,
            title: 'Top Skills in Demand for 2024',
            excerpt: 'Discover the skills that are trending in the job market and how to acquire them.',
            category: 'Skills',
            link: '#',
        },
        {
            id: 3,
            title: 'Networking Tips for Career Growth',
            excerpt: 'Learn effective networking strategies to enhance your career opportunities.',
            category: 'Networking',
            link: '#',
        },
        // Add more blog posts here
    ];

    const filteredPosts = filter === 'all' ? blogPosts : blogPosts.filter(post => post.category === filter);

    return (
        <BlogWrapper>
            <HeroSection>
                <HeroTitle>Welcome to the Trailblix Blog</HeroTitle>
                <HeroSubtitle>Your go-to source for career insights and advice</HeroSubtitle>
            </HeroSection>

            <FilterContainer>
                <FilterButton onClick={() => setFilter('all')}>All Posts</FilterButton>
                <FilterButton onClick={() => setFilter('Career Advice')}>Career Advice</FilterButton>
                <FilterButton onClick={() => setFilter('Skills')}>Skills</FilterButton>
                <FilterButton onClick={() => setFilter('Networking')}>Networking</FilterButton>
            </FilterContainer>

            <BlogPostsGrid>
                {filteredPosts.map((post) => (
                    <PostCard key={post.id}>
                        <PostTitle>{post.title}</PostTitle>
                        <PostExcerpt>{post.excerpt}</PostExcerpt>
                        <ReadMoreButton onClick={() => window.location.href = post.link}>Read More</ReadMoreButton>
                    </PostCard>
                ))}
            </BlogPostsGrid>
        </BlogWrapper>
    );
};

export default BlogPage;
