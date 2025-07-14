# PowerShell Script to Create Blog CRUD React Application
# Run this script in your desired directory

param(
    [string]$ProjectName = "blog-crud-app",
    [switch]$Help
)

if ($Help) {
    Write-Host "Blog CRUD React App Generator" -ForegroundColor Green
    Write-Host "Usage: .\create-blog-app.ps1 [-ProjectName <name>] [-Help]" -ForegroundColor Yellow
    Write-Host "  -ProjectName: Name of the project directory (default: blog-crud-app)" -ForegroundColor White
    Write-Host "  -Help: Show this help message" -ForegroundColor White
    exit
}

# Function to write colored output
function Write-Step {
    param([string]$Message, [string]$Color = "Green")
    Write-Host "✅ $Message" -ForegroundColor $Color
}

function Write-Info {
    param([string]$Message)
    Write-Host "ℹ️  $Message" -ForegroundColor Cyan
}

function Write-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

# Start script
Write-Host "🚀 Creating Blog CRUD React Application..." -ForegroundColor Magenta
Write-Host "=" * 50 -ForegroundColor Magenta

try {
    # Create project directory
    if (Test-Path $ProjectName) {
        Write-Error "Directory '$ProjectName' already exists!"
        $confirm = Read-Host "Do you want to overwrite it? (y/N)"
        if ($confirm -ne "y" -and $confirm -ne "Y") {
            Write-Host "Operation cancelled." -ForegroundColor Yellow
            exit
        }
        Remove-Item -Recurse -Force $ProjectName
    }

    New-Item -ItemType Directory -Path $ProjectName | Out-Null
    Set-Location $ProjectName
    Write-Step "Created project directory: $ProjectName"

    # Create src directory structure
    $directories = @(
        "src",
        "src/components",
        "src/components/Header",
        "src/components/ActionButtons",
        "src/components/BlogForm",
        "src/components/PostsList",
        "src/components/PostRow",
        "src/components/PostsTable",
        "src/components/LoadingSpinner",
        "src/components/EmptyState",
        "src/components/Footer",
        "src/hooks",
        "src/services",
        "public"
    )

    foreach ($dir in $directories) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    Write-Step "Created directory structure"

    # Create package.json
    $packageJson = @"
{
  "name": "$ProjectName",
  "version": "1.0.0",
  "description": "Blog CRUD application with React and Bootstrap",
  "main": "src/index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "bootstrap": "^5.3.0"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
"@
    Set-Content -Path "package.json" -Value $packageJson
    Write-Step "Created package.json"

    # Create public/index.html
    $indexHtml = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog CRUD App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
</body>
</html>
"@
    Set-Content -Path "public/index.html" -Value $indexHtml
    Write-Step "Created public/index.html"

    # Create src/index.js
    $indexJs = @"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"@
    Set-Content -Path "src/index.js" -Value $indexJs
    Write-Step "Created src/index.js"

    # Create API Service Hook
    $apiServiceHook = @"
import { useState } from 'react';

const useApiService = () => {
  const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const mockPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      content: 'React is a powerful JavaScript library for building user interfaces. In this post, we will explore the basics of React and how to create your first component.',
      author: 'John Doe',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Understanding State Management',
      content: 'State management is crucial in React applications. Learn about useState, useEffect, and other hooks that help manage component state effectively.',
      author: 'Jane Smith',
      date: '2024-01-20'
    },
    {
      id: 3,
      title: 'Building Responsive UIs',
      content: 'Creating responsive user interfaces is essential for modern web applications. Discover techniques and best practices for responsive design.',
      author: 'Mike Johnson',
      date: '2024-01-25'
    }
  ];

  const fetchPosts = async () => {
    try {
      // Using mock data since JSONPlaceholder doesn't return our custom fields
      return mockPosts;
      
      // Real API call would look like this:
      // const response = await fetch(API_BASE_URL);
      // const data = await response.json();
      // return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return mockPosts;
    }
  };

  const createPost = async (post) => {
    try {
      const newPost = {
        ...post,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
      };
      
      // Real API call:
      // const response = await fetch(API_BASE_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newPost)
      // });
      // const data = await response.json();
      // return data;
      
      return newPost;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  };

  const updatePost = async (id, updatedPost) => {
    try {
      // Real API call:
      // const response = await fetch(`${API_BASE_URL}/${id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updatedPost)
      // });
      // const data = await response.json();
      // return data;
      
      return { ...updatedPost, id };
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  };

  const deletePost = async (id) => {
    try {
      // Real API call:
      // await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
      
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  };

  return {
    fetchPosts,
    createPost,
    updatePost,
    deletePost
  };
};

export default useApiService;
"@
    Set-Content -Path "src/hooks/useApiService.js" -Value $apiServiceHook
    Write-Step "Created API Service Hook"

    # Create Header Component
    $headerComponent = @"
import React from 'react';

const Header = () => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="bg-primary text-white p-4 rounded-3 shadow">
          <h1 className="display-4 mb-0">📝 Blog Manager</h1>
          <p className="lead mb-0">Create, read, update, and delete blog posts</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
"@
    Set-Content -Path "src/components/Header/Header.js" -Value $headerComponent
    Set-Content -Path "src/components/Header/index.js" -Value "export { default } from './Header';"
    Write-Step "Created Header component"

    # Create ActionButtons Component
    $actionButtonsComponent = @"
import React from 'react';

const ActionButtons = ({ showForm, onToggleForm, onRefresh, loading }) => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="d-flex gap-2 flex-wrap">
          <button
            className="btn btn-success btn-lg"
            onClick={onToggleForm}
          >
            <i className="bi bi-plus-circle me-2"></i>
            {showForm ? 'Cancel' : 'Add New Post'}
          </button>
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={onRefresh}
            disabled={loading}
          >
            <i className="bi bi-arrow-clockwise me-2"></i>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
"@
    Set-Content -Path "src/components/ActionButtons/ActionButtons.js" -Value $actionButtonsComponent
    Set-Content -Path "src/components/ActionButtons/index.js" -Value "export { default } from './ActionButtons';"
    Write-Step "Created ActionButtons component"

    # Create BlogForm Component
    $blogFormComponent = @"
import React from 'react';

const BlogForm = ({ currentPost, isEditing, loading, onSubmit, onCancel, onChange }) => {
  const handleSubmit = () => {
    if (currentPost.title.trim() && currentPost.content.trim() && currentPost.author.trim()) {
      onSubmit();
    }
  };

  return (
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                  name="content"
                  rows="5"
                  value={currentPost.content}
                  onChange={onChange}
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
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
"@
    Set-Content -Path "src/components/BlogForm/BlogForm.js" -Value $blogFormComponent
    Set-Content -Path "src/components/BlogForm/index.js" -Value "export { default } from './BlogForm';"
    Write-Step "Created BlogForm component"

    # Create LoadingSpinner Component
    $loadingSpinnerComponent = @"
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2 text-muted">Loading posts...</p>
    </div>
  );
};

export default LoadingSpinner;
"@
    Set-Content -Path "src/components/LoadingSpinner/LoadingSpinner.js" -Value $loadingSpinnerComponent
    Set-Content -Path "src/components/LoadingSpinner/index.js" -Value "export { default } from './LoadingSpinner';"
    Write-Step "Created LoadingSpinner component"

    # Create EmptyState Component
    $emptyStateComponent = @"
import React from 'react';

const EmptyState = () => {
  return (
    <div className="text-center py-5">
      <i className="bi bi-file-earmark-text display-1 text-muted"></i>
      <p className="mt-3 text-muted">No blog posts found. Create your first post!</p>
    </div>
  );
};

export default EmptyState;
"@
    Set-Content -Path "src/components/EmptyState/EmptyState.js" -Value $emptyStateComponent
    Set-Content -Path "src/components/EmptyState/index.js" -Value "export { default } from './EmptyState';"
    Write-Step "Created EmptyState component"

    # Create PostRow Component
    $postRowComponent = @"
import React from 'react';

const PostRow = ({ post, onEdit, onDelete }) => {
  return (
    <tr>
      <td>
        <span className="badge bg-secondary">{post.id}</span>
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
          {post.content}
        </p>
      </td>
      <td>
        <div className="btn-group" role="group">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => onEdit(post)}
            title="Edit post"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(post.id)}
            title="Delete post"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PostRow;
"@
    Set-Content -Path "src/components/PostRow/PostRow.js" -Value $postRowComponent
    Set-Content -Path "src/components/PostRow/index.js" -Value "export { default } from './PostRow';"
    Write-Step "Created PostRow component"

    # Create PostsTable Component
    $postsTableComponent = @"
import React from 'react';
import PostRow from '../PostRow';

const PostsTable = ({ posts, onEdit, onDelete }) => {
  return (
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
          {posts.map((post) => (
            <PostRow 
              key={post.id} 
              post={post} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
"@
    Set-Content -Path "src/components/PostsTable/PostsTable.js" -Value $postsTableComponent
    Set-Content -Path "src/components/PostsTable/index.js" -Value "export { default } from './PostsTable';"
    Write-Step "Created PostsTable component"

    # Create PostsList Component
    $postsListComponent = @"
import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import EmptyState from '../EmptyState';
import PostsTable from '../PostsTable';

const PostsList = ({ posts, loading, onEdit, onDelete }) => {
  const renderContent = () => {
    if (loading) {
      return <LoadingSpinner />;
    }
    
    if (posts.length === 0) {
      return <EmptyState />;
    }
    
    return <PostsTable posts={posts} onEdit={onEdit} onDelete={onDelete} />;
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-header bg-white border-bottom">
            <h5 className="mb-0">📚 Blog Posts ({posts.length})</h5>
          </div>
          <div className="card-body p-0">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
"@
    Set-Content -Path "src/components/PostsList/PostsList.js" -Value $postsListComponent
    Set-Content -Path "src/components/PostsList/index.js" -Value "export { default } from './PostsList';"
    Write-Step "Created PostsList component"

    # Create Footer Component
    $footerComponent = @"
import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
"@
    Set-Content -Path "src/components/Footer/Footer.js" -Value $footerComponent
    Set-Content -Path "src/components/Footer/index.js" -Value "export { default } from './Footer';"
    Write-Step "Created Footer component"

    # Create Main App Component
    $appComponent = @"
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import BlogForm from './components/BlogForm';
import PostsList from './components/PostsList';
import Footer from './components/Footer';
import useApiService from './hooks/useApiService';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({ id: null, title: '', content: '', author: '', date: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiService = useApiService();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await apiService.fetchPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to load posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async () => {
    setLoading(true);
    try {
      const newPost = await apiService.createPost(currentPost);
      setPosts([...posts, newPost]);
      resetForm();
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePost = async () => {
    setLoading(true);
    try {
      const updatedPost = await apiService.updatePost(currentPost.id, currentPost);
      setPosts(posts.map(post => post.id === currentPost.id ? updatedPost : post));
      resetForm();
    } catch (error) {
      console.error('Failed to update post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setLoading(true);
      try {
        await apiService.deletePost(id);
        setPosts(posts.filter(post => post.id !== id));
      } catch (error) {
        console.error('Failed to delete post:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = () => {
    if (isEditing) {
      handleUpdatePost();
    } else {
      handleCreatePost();
    }
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleToggleForm = () => {
    if (showForm) {
      resetForm();
    } else {
      setShowForm(true);
    }
  };

  const resetForm = () => {
    setCurrentPost({ id: null, title: '', content: '', author: '', date: '' });
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
        <Header />
        
        <ActionButtons 
          showForm={showForm}
          onToggleForm={handleToggleForm}
          onRefresh={loadPosts}
          loading={loading}
        />

        {showForm && (
          <BlogForm
            currentPost={currentPost}
            isEditing={isEditing}
            loading={loading}
            onSubmit={handleSubmit}
            onCancel={resetForm}
            onChange={handleInputChange}
          />
        )}

        <PostsList
          posts={posts}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDeletePost}
        />

        <Footer />
      </div>
    </div>
  );
};

export default App;
"@
    Set-Content -Path "src/App.js" -Value $appComponent
    Write-Step "Created main App component"

    # Create README.md
    $readme = @"
# Blog CRUD Application

A modern, responsive Blog CRUD (Create, Read, Update, Delete) application built with React and Bootstrap.

## Features

- ✅ **Full CRUD Operations**: Create, read, update, and delete blog posts
- 🎨 **Beautiful UI**: Modern Bootstrap design with responsive layout
- 📱 **Mobile Friendly**: Works seamlessly on desktop and mobile devices
- 🔧 **Modular Architecture**: Well-organized components for maintainability
- 🌐 **API Ready**: Structured to easily integrate with real APIs

## Project Structure

```
$ProjectName/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── ActionButtons/
│   │   ├── BlogForm/
│   │   ├── PostsList/
│   │   ├── PostRow/
│   │   ├── PostsTable/
│   │   ├── LoadingSpinner/
│   │   ├── EmptyState/
│   │   └── Footer/
│   ├── hooks/
│   │   └── useApiService.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## API Integration

The application is structured to work with real APIs. To connect to your backend:

1. Update the `API_BASE_URL` in `src/hooks/useApiService.js`
2. Uncomment the real API calls in the service methods
3. Adjust the data structure to match your API response

## Components Overview

- **Header**: Application title and description
- **ActionButtons**: Add post and refresh functionality
- **BlogForm**: Create and edit post form
- **PostsList**: Container for displaying posts
- **PostsTable**: Table layout for posts
- **PostRow**: Individual post row component
- **LoadingSpinner**: Loading state indicator
- **EmptyState**: No posts message
- **Footer**: Application footer

## Technologies Used

- **React 18**: Frontend framework
- **Bootstrap 5**: UI framework
- **Bootstrap Icons**: Icon library
- **Modern ES6+**: JavaScript features

## License

This project is open source and available under the MIT License.
"@
    Set-Content -Path "README.md" -Value $readme
    Write-Step "Created README.md"

    # Create .gitignore
    $gitignore = @"
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production build
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt

# Storybook build outputs
.out
.storybook-out
"@
    Set-Content -Path ".gitignore" -Value $gitignore
    Write-Step "Created .gitignore"

    # Success message
    Write-Host ""
    Write-Host "🎉 Blog CRUD React Application created successfully!" -ForegroundColor Green
    Write-Host "=" * 50 -ForegroundColor Green
    Write-Host ""
    Write-Info "Project created in: $(Get-Location)"
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. cd $ProjectName" -ForegroundColor White
    Write-Host "2. npm install" -ForegroundColor White
    Write-Host "3. npm start" -ForegroundColor White
    Write-Host ""
    Write-Host "Happy coding! 🚀" -ForegroundColor Magenta

} catch {
    Write-Error "An error occurred: $($_.Exception.Message)"
    Write-Host "Please check the error and try again." -ForegroundColor Red
}