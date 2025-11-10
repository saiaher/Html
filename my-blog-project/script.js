// Toggle Comments Section
document.querySelectorAll('.comment-toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const commentsSection = button.nextElementSibling;
        if (commentsSection.style.display === "none" || commentsSection.style.display === "") {
            commentsSection.style.display = "block";
        } else {
            commentsSection.style.display = "none";
        }
    });
});

// Submit Comment
document.getElementById('submit-comment').addEventListener('click', () => {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const commentList = document.querySelector('.comments-list');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = ""; // Clear the input field
    } else {
        alert("Please write a comment before submitting.");
    }
});
