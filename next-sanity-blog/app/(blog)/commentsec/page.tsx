"use client"

import React, { useState, useEffect } from 'react';

const Commentsec = () => {
  interface Comment {
    id: number;
    username: string;
    comment: string;
  }

  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState('');
  const [userComment, setUserComment] = useState('');

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  // Save comments to localStorage whenever the comments state changes
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (username.trim() && userComment.trim()) {
      const newComment = {
        id: Date.now(),
        username,
        comment: userComment,
      };
      setComments([...comments, newComment]);
      setUsername('');
      setUserComment('');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Comment Section</h2>

      {/* Input Fields */}
      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your comment"
          rows={4}
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-b py-4">
              <h4 className="font-semibold">{comment.username}</h4>
              <p>{comment.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No comments yet. Be the first!</p>
        )}
      </div>
    </div>
  );
};

export default Commentsec;

