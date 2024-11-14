import React, { useState } from 'react';

const Commentsection = () => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [editingComment, setEditingComment] = useState(null);
  const [editingText, setEditingText] = useState('');

  
  const handleAddComment = () => {
    if (newComment.trim() === '') return

    const newCommentObject = {
      id: Date.now(),
      text: newComment,
    };

    setComments([...comments, newCommentObject]);
    setNewComment('')
  };

  
  const handleEditComment = (id, text) => {
    setEditingComment(id)
    setEditingText(text);
  };

  
  const handleSaveEdit = (id) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: editingText } : comment
    );

    setComments(updatedComments)
    setEditingComment(null)
    setEditingText('')
  };

  
  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id)
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Comment Section</h2>
      
      <div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {editingComment === comment.id ? (
              <div>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(comment.id)}>Save</button>
                <button onClick={() => setEditingComment(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{comment.text}</span>
                <button onClick={() => handleEditComment(comment.id, comment.text)}>Edit</button>
                <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Commentsection;
