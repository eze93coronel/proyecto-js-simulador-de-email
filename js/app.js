// variables 
 const Btnenviar = document.querySelector('#enviar');
  const formulario = document.querySelector('#enviar-mail');
  // variables para campos

  const email = document.querySelector('#email');
  
  const asunto = document.querySelector('#asunto');
  
  const mensaje = document.querySelector('#mensaje');

  const er = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


eventListeners();
function eventListeners(){
   // cuando la app arranca
    document.addEventListener('DOMContentLoaded',iniciarAPP);
   

    // campos del formulario
   email.addEventListener('blur',validarformulario);
   asunto.addEventListener('blur',validarformulario);
   mensaje.addEventListener('blur',validarformulario);

 // enviar email
 formulario.addEventListener('submit',enviaremail);
 
 
}


// funciones

function iniciarAPP(){
    
   
} 
// valida el formulario 
   
 
function validarformulario(e){
    console.log(e.target.type);

     // elimina los errores 
     const error = document.querySelector('p.error');
     if(error){
        error.remove();
    }
    
    if(e.target.value.lenght > 0){
        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
       // console.log('si hay algo');

    } else {
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');

        mostrarError('todos los campos so obligatorios');
    }
    if(e.target.type === 'email'){
         
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            error.remove();
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');
        } else {
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');

            mostrarError('email no valido');
            
           
        }

    }

    if( er.test (email.value) !== '' && asunto.value !== '' && mensaje.value !== ''){
       Btnenviar.disabled = false;
       Btnenviar.classList.remove('cursor-not-allowed','opacity-50');
    } 
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center');
     
    const errores = document.querySelectorAll('.error');
      
    if(errores.length === 0){
     
    formulario.appendChild(mensajeError);
    }


}
//
function enviaremail(e){
    e.preventDefault();
     console.log('enviando');

     // mostrar el spinnerr aste correctamn
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'flex';

     // despues de 3 seg ocultar spinner y mostrar el  mensj
     setTimeout(() => {

         spinner.style.display = 'none';

         // mensakje de aviso 
         const parrafo = document.createElement('p');
         parrafo.textContent = 'lo enviaste correctamente';
         parrafo.classList.add('text-center','my-10','p-6','bg-red-600','text-white','font-size-15');
         // incerta el parrafo antes del spinner
         formulario.insertBefore(parrafo, spinner);
         setTimeout(() =>{
        
            parrafo.remove(); // elimina el mensaje de exito
           resetearformulario();
        },5000 )
     }, 5000);
}

// function q resetea el formulario
function resetearformulario(){
    formulario.reset();
};