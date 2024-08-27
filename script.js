document.getElementById("contact-form").addEventListener('submit', function(event){

    event.preventDefault();
    


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if( name === '' || email === '' || message ==='') {
        alert('please fill in the fields');
        return;
    } 

    alert(`thank you for your message, ${name}! We will contact you, ${email}.`);

    document.getElementById('contact-form').reset();
    


    
});