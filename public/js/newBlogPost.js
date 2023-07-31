const newBlogPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newBlogPost-title').value.trim();
    const body = document.querySelector('#newBlogPost-body').value.trim();
    const posted_by = document.querySelector('#newBlogPost-posted_by').value.trim();

    if (title && body) {
        const response = await fetch('/api/newblogpost', {
            method: 'POST',
            body: JSON.stringify({ title, body, posted_by }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to create post.');
        }
    }
};

console.log('test');
document
    .querySelector('.newBlogPost-form')
    .addEventListener('submit', newBlogPostHandler);