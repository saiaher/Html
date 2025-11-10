// Highlight active links
let links = document.querySelectorAll('.bar');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Simple dropdown for "Services"
let service = links[2]; // "Services" link
let dropdown = document.createElement('ul');
dropdown.innerHTML = `
  <li><a href="#" class="bar">Web</a></li>
  <li><a href="#" class="bar">App</a></li>
  <li><a href="#" class="bar">SEO</a></li>
`;
dropdown.style.cssText = 'display:none; position:absolute; top:100%; left:0; background:black; padding:0; list-style:none;';
service.parentElement.style.position = 'relative';
service.parentElement.appendChild(dropdown);

// Show/hide dropdown on hover
service.addEventListener('mouseenter', () => dropdown.style.display = 'block');
service.addEventListener('mouseleave', () => dropdown.style.display = 'none');
dropdown.addEventListener('mouseenter', () => dropdown.style.display = 'block');
dropdown.addEventListener('mouseleave', () => dropdown.style.display = 'none');
