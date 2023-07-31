
const enableDeletePost = async (event) => {
    event.preventDefault();
    document.querySelector('#deletePostChoice').style.display = "inline";
};

document.querySelector('#deletePost')
    .addEventListener('click', enableDeletePost);