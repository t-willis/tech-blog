const newCommentHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#newCommentBody').value.trim();
    const commented_by = document.querySelector('#newComment-commented_by').value.trim();
    const commented_on = document.querySelector('#newComment-commented_on').value.trim();

    if (body && commented_by && commented_on) {
        const response = await fetch('/api/newcomment', {
            method: 'POST',
            body: JSON.stringify({ body, commented_by, commented_on }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/blogpost/${commented_on}`);
        } else {
            alert('failed to create comment');
        }
    }
};

document
    .querySelector('.newComment-form')
    .addEventListener('submit', newCommentHandler);