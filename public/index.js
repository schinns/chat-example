var arr = [];

const socket = io();
var userName = '';

setUsername();

form.addEventListener('submit', handleSubmit);

socket.on('chat message', function(response) {
 const ul = document.getElementById('messages');
 const li = document.createElement('li');
 const message = document.createElement('span');
 const user = document.createElement('strong');
 const text = document.createTextNode(response.message);
 const userName = document.createTextNode(response.user + ': ');
 user.appendChild(userName);
 li.appendChild(user);
 message.appendChild(text);
 li.appendChild(message);
 ul.appendChild(li);
 updateScroll();
})


function handleSubmit(event) {
 const text = document.getElementById('input');
 event.preventDefault(); 
 
 arr.push(Math.round(Math.random() * 100)); 

 const altId = 'user ' + arr[0];

 const body = {
   user: userName || altId,
   message: text.value
 };

 socket.emit('chat message', body);
 text.value = '';
};

function setUsername() {
 const body = document.querySelector('body');
 const section = document.createElement('section');
 const input = document.createElement('input');
 const button = document.createElement('button');
 const form = document.createElement('form');
 body.appendChild(section);

 section.style.backgroundColor = 'white';
 section.style.width = '100vw';
 section.style.height = '100vh';
 section.style.position = 'fixed';
 section.style.display = 'flex';
 section.style.justifyContent = 'center';
 section.style.alignItems = 'center';

 const placeholder = document.createAttribute('placeholder');
 const autofocus = document.createAttribute('autofocus');
 placeholder.value = 'Enter your name';
 input.setAttributeNode(autofocus);
 input.setAttributeNode(placeholder);
 section.appendChild(form);
 form.appendChild(input);
 const buttonText = document.createTextNode('Submit');
 button.appendChild(buttonText);
 form.appendChild(button);

 form.addEventListener('submit', function(event) {
  event.preventDefault();
  userName = input.value;
  section.style.display = 'none';
  const attr = document.createAttribute('placeholder');
  attr.value = input.value;
  document.getElementById('input').setAttributeNode(attr);
  document.getElementById('input').focus();
 })
};

function updateScroll() {
  const container = document.querySelector('div');
  container.scrollTop = container.scrollHeight;
};
