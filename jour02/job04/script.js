    let textarea = document.querySelector('#keylogger');


    window.addEventListener("keydown", (e) =>{
        if(e.key.length == 1){
    textarea.innerHTML += e.key;
        }
    })

    textarea.addEventListener('focus', (e) => {
        document.addEventListener("keydown", (e) =>{
            if(e.key.length == 1){
        textarea.innerHTML += e.key;
            }
        })
        })


   
