export const navigation = () => {
    const formNav = document.querySelector('.form-menu');
  const listNav = document.querySelector('.list-menu');
  const contactNav = document.querySelector('.contact-menu');
  const list = document.querySelector('.books');
  const cont = document.querySelector('.contact');
  const form = document.querySelector('.form');
  
  formNav.addEventListener('click', () => {
  form.classList.add('active');
  list.classList.remove('active');
  cont.classList.remove('active');
  formNav.classList.add('test');
  contactNav.classList.remove('test');
  listNav.classList.remove('test');
  });
  
  listNav.addEventListener('click', () => {
  list.classList.add('active');
  form.classList.remove('active');
  cont.classList.remove('active');
  listNav.classList.add('test');
  contactNav.classList.remove('test');
  formNav.classList.remove('test');
  });
  
  contactNav.addEventListener('click', () => {
  cont.classList.add('active');
  list.classList.remove('active');
  form.classList.remove('active');
  contactNav.classList.add('test');
  formNav.classList.remove('test');
  listNav.classList.remove('test');
  });
  }