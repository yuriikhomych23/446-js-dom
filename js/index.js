var link = document.querySelector('a');
link.textContent = 'Programming Mentor';
link.href = 'https://sj42.prigrammingmentor.com';

const sect = document.querySelector('section');
const para = document.creareElement('p');
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);
text = document.createTextNode(' — the premier source for web development knowledge.');

para.classList.add('selected');

const button = document.createElement('button');
button.innerText = 'Click Me!';
sect.appendChild(button);
button.addEventListener('click', () => alert ('Hello!') );
