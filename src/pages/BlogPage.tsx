import React, { useState, useEffect } from 'react';
import { Text } from 'src/components/atoms';
import { Layout } from 'src/components/Layout';
import { fetchBlog } from 'src/services/dataService';

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

export const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchBlog().then(setBlogPosts).catch(console.error);
  }, []);

  return (
    <Layout>
      <Text variant="h1" className="text-3xl font-bold text-emerald-900 mb-6 text-center">
        Blog
      </Text>
      {blogPosts.map((post) => (
        <div key={post.id} className="mb-8">
          <Text variant="h2" className="text-2xl font-semibold text-emerald-700 mb-2">{post.title}</Text>
          <Text className="text-gray-700 leading-relaxed">{post.content}</Text>
        </div>
      ))}
    </Layout>
  );
};
