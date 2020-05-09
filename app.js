const { hash } = window.location;

console.log(atob(hash.replace('#', '')));

const haveMessage = atob(hash.replace('#', ''));
const messageShow = document.querySelector('#message-show');
if(haveMessage){
    document.querySelector('#message-form').classList.add('hide');
    messageShow.classList.remove('hide');

    document.querySelector('h1').innerHTML = haveMessage;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const messageForm = document.querySelector('#message-form');
    const linkForm = document.querySelector('#link-form');

    messageForm.classList.add('hide');
    linkForm.classList.remove('hide');
     
    const inputMessage = document.querySelector('#message-input');
    const encrypted = btoa( inputMessage.value);

    const inputLink = document.querySelector('#link-input');

    inputLink.value = `${window.location}#${encrypted}`;

    inputLink.select();
});


