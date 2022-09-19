const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span ");

form.onsubmit = (e) => {
   e.preventDefault();
   statusTxt.style.color = "#1a66f1b1";
   statusTxt.style.display = "inline-block";

   let xhr = new XMLHttpRequest();
   xhr.open("POST", "message.php", true);
   xhr.onload = () =>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
           if(response.indexOf("Invalid email address!")  || response.indexOf("Failed to send your message"))
            {
            statusTxt.style.color = "#ff4c29";
    
            }
            else{
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 3000);  
                 
            }
            statusTxt.innerText = response;
        }
   }
   let formData = new FormData(form);
   xhr.send(formData);

}

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});

