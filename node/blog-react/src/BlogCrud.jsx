import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BlogCRUD = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = 
  useState({ id: null, title: '', body: '', author: '', date: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // Dummy API base URL
  const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  // Mock data for demo purposes
  const mockPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      body: 'React is a powerful JavaScript library for building user interfaces. In this post, we will explore the basics of React and how to create your first component.',
      author: 'John Doe',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Understanding State Management',
      body: 'State management is crucial in React applications. Learn about useState, useEffect, and other hooks that help manage component state effectively.',
      author: 'Jane Smith',
      date: '2024-01-20'
    },
    {
      id: 3,
      title: 'Building Responsive UIs',
      body: 'Creating responsive user interfaces is essential for modern web applications. Discover techniques and best practices for responsive design.',
      author: 'Mike Johnson',
      date: '2024-01-25'
    }
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      // Using mock data since JSONPlaceholder doesn't return our custom fields
      const res =await axios.get('http://localhost:3000/blogs/')
      console.log(res.data)
      setPosts(res.data.blogs);
      // Real API call would look like this:
      // const response = await fetch(API_BASE_URL);
      // const data = await response.json();
      // setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Fallback to mock data
      setPosts(mockPosts);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (post) => {
    setLoading(true);
    try {
      const newPost = {
        ...post,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
      };
      const res = axios.post('http://localhost:3000/blogs',newPost)
      // Real API call:
      // const response = await fetch(API_BASE_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newPost)
      // });
      // const data = await response.json();
      // setPosts([...posts, data]);
      
      // Mock implementation
      setPosts([...posts, newPost]);
      resetForm();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (id, updatedPost) => {
    setLoading(true);
    try {
      // Real API call:
      // const response = await fetch(`${API_BASE_URL}/${id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updatedPost)
      // });
      // const data = await response.json();
      // setPosts(posts.map(post => post.id === id ? data : post));
      
      // Mock implementation
      setPosts(posts.map(post => post.id === id ? { ...updatedPost, id } : post));
      resetForm();
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setLoading(true);
      try {
        // Real API call:
        // await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
        
        // Mock implementation
        setPosts(posts.filter(post => post.id !== id));
      } catch (error) {
        console.error('Error deleting post:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = () => {
    if (currentPost.title.trim() && currentPost.body.trim() && currentPost.author.trim()) {
      if (isEditing) {
        updatePost(currentPost.id, currentPost);
      } else {
        createPost(currentPost);
      }
    }
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
    setShowForm(true);
  };

  const resetForm = () => {
    setCurrentPost({ id: null, title: '', body: '', author: '', date: '' });
    setIsEditing(false);
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost({ ...currentPost, [name]: value });
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="container py-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="bg-primary text-white p-4 rounded-3 shadow">
              <h1 className="display-4 mb-0">📝 Blog Manager</h1>
              <p className="lead mb-0">Create, read, update, and delete blog posts</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex gap-2 flex-wrap">
              <button
                className="btn btn-success btn-lg"
                onClick={() => setShowForm(!showForm)}
              >
                <i className="bi bi-plus-circle me-2"></i>
                {showForm ? 'Cancel' : 'Add New Post'}
              </button>
              <button
                className="btn btn-outline-primary btn-lg"
                onClick={fetchPosts}
                disabled={loading}
              >
                <i className="bi bi-arrow-clockwise me-2"></i>
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="row mb-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    {isEditing ? '✏️ Edit Post' : '➕ Create New Post'}
                  </h5>
                </div>
                <div className="card-body">
                  <div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="title" className="form-label fw-bold">Title</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="title"
                          name="title"
                          value={currentPost.title}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter post title"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="author" className="form-label fw-bold">Author</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="author"
                          name="author"
                          value={currentPost.author}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter author name"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="content" className="form-label fw-bold">Content</label>
                      <textarea
                        className="form-control"
                        id="content"
                        name="body"
                        rows="5"
                        value={currentPost.body}
                        onChange={handleInputChange}
                        required
                        placeholder="Write your blog post content here..."
                      ></textarea>
                    </div>
                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        disabled={loading}
                        onClick={handleSubmit}
                      >
                        {loading ? (
                          <span className="spinner-border spinner-border-sm me-2"></span>
                        ) : (
                          <i className={`bi ${isEditing ? 'bi-check-circle' : 'bi-plus-circle'} me-2`}></i>
                        )}
                        {isEditing ? 'Update Post' : 'Create Post'}
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg"
                        onClick={resetForm}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-white border-bottom">
                <h5 className="mb-0">📚 Blog Posts ({posts.length})</h5>
              </div>
              <div className="card-body p-0">
                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2 text-muted">Loading posts...</p>
                  </div>
                ) : posts.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-file-earmark-text display-1 text-muted"></i>
                    <p className="mt-3 text-muted">No blog posts found. Create your first post!</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Author</th>
                          <th scope="col">Date</th>
                          <th scope="col">Preview</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((post,index) => (
                          <tr key={index}>
                            <td>
                              <span className="badge bg-secondary">{index+1}</span>
                            </td>
                            <td>
                              <h6 className="mb-0">{post.title}</h6>
                            </td>
                            <td>
                              <span className="text-muted">👤 {post.author}</span>
                            </td>
                            <td>
                              <small className="text-muted">📅 {post.date}</small>
                            </td>
                            <td>
                              <p className="mb-0 text-truncate" style={{ maxWidth: '200px' }}>
                                {post.body}
                              </p>
                            </td>
                            <td>
                              <div className="btn-group" role="group">
                                <button
                                  className="btn btn-outline-primary btn-sm"
                                  onClick={() => handleEdit(post)}
                                  title="Edit post"
                                >
                                  <i className="bi bi-pencil"></i>
                                </button>
                                <button
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => deletePost(post.id)}
                                  title="Delete post"
                                >
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="text-center text-muted">
              <p className="mb-0">
                <i className="bi bi-info-circle me-1"></i>
                This is a demo CRUD application. API calls are mocked for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Icons CDN */}
     
    </div>
  );
};

export default BlogCRUD;