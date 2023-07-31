// function t handle editing a blogpost by id
const editBlogPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#editBlogPost-title').value.trim();
    const body = document.querySelector('#editBlogPost-body').value.trim();
    const id = document.querySelector('#editBlogPost-post_id').value.trim();
    
    if (title && body) {
        const response = await fetch(`/api/newblogpost/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, body, id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to edit post.');
        }
    }
};

document
    .querySelector('.editBlogPost-form')
    .addEventListener('submit', editBlogPostHandler);