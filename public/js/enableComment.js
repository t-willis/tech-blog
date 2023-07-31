// function to show the add comment form in /blogpost/:id
const showCommentForm = () => {
        document.querySelector('#commentForm').style.display = "inline";
    console.log('test');
};

document.querySelector('#showCommentForm')
    .addEventListener('click', showCommentForm);