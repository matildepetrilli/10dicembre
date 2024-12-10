const form=document.getElementById('myform');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const name=document.getElementById('name').value;
    
    const formData={
        name:name
    };

    localStorage.setItem('formData',JSON.stringify(formData));
    
    })
