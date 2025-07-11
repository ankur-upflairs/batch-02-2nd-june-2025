import React from 'react'

function AddBlog() {
  return (
    <div>
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
                        name="content"
                        rows="5"
                        value={currentPost.content}
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
    </div>
  )
}

export default AddBlog