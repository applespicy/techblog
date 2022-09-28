const newFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#user-login').value;
    const password = document.querySelector('#password-login').value;

    await fetch(`/api/post`, {
        method: 'POST',
          body: JSON.stringify({ title, body }),
          headers: { 'Content-Type': 'application/json' },
        });

        document.location.replace('/dashboard');

    };

document
    .querySelector('btn btn-primary')
    .addEventListener('click', newFormHandler);