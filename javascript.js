const form = document.querySelector('#amir');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
 
form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkinputs();
  alert('a');
})

const checkinputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === ''){
    error(email,'write email!');
  }else{
    success(email);
  }

  if (passwordlValue === ''){
    error(password,'write password!');
  }else{
    success(password);
  }
}

const error = (input,message) => {
  const inputBox=input.parentElemnt;
  const small = inputBox.querySelector('small');
  
  inputBox.className='input-box error';
  small.innerText = message;
}

const success = (input) => {
  const inputBox=input.parentElemnt;
  inputBox.className = 'input-box success';
}