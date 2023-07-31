const deleteBlogPostHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#deleteBlogPost-post_id').value.trim();

    var deleteConfirm = confirm('Are you sure?');
    if (deleteConfirm === false) {
        return;
    } else {
        const response = await fetch(`/api/newblogpost/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers:{ 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to delete post.');
        }
    }
};

document
    .querySelector('.deletePost')
    .addEventListener('submit', deleteBlogPostHandler);