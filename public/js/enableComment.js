const showCommentForm = () => {
        document.querySelector('#commentForm').style.display = "inline";
    console.log('test');
};

document.querySelector('#showCommentForm')
    .addEventListener('click', showCommentForm);