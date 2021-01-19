import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm 
      onSubmit={(title, content) => {
        editBlogPost(title, content, id, () => {
          navigation.pop();
        });
      }}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      labels={{ title: 'Edit Title:', content: 'Edit Content', button: 'Edit Blog Post' }}
    />
  );
}

export default CreateScreen;