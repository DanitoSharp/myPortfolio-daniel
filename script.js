function linkedinActive(){
    var linkedin = document.querySelector('#linkedin');

    linkedin.innerHTML = '<a onmouseleave="linkedinInActive()" id="linkedinActive" href="https://www.linkedin.com/in/daniel-ekeleme/" target="_blank"><img height="64px" width="64px" src="./images/Icons/icons8-linkedin-circled-100 (1).png"> <div><p>Go to Profile</p></div></a>';
    
    
}

function linkedinInActive(){
    var linkedin = document.querySelector('#linkedin');

    linkedin.innerHTML = '<a onmouseover="linkedinActive()" id="linkedinInActive" href="https://www.linkedin.com/in/daniel-ekeleme/" target="_blank"><img height="64px" width="64px" src="./images/Icons/icons8-linkedin-circled-100.png"></a>';
    
}