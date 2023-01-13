function linkedinActive(){
    var linkedin = document.querySelector('#linkedin');

    linkedin.innerHTML = '<a onmouseleave="linkedinInActive()" id="linkedinActive" href="https://www.linkedin.com/in/daniel-ekeleme/" target="_blank"><img height="64px" width="64px" src="./images/Icons/icons8-linkedin-circled-100 (1).png"> <div><p>My LinkedIn</p></div></a>';
    
    
}

function linkedinInActive(){
    var linkedin = document.querySelector('#linkedin');

    linkedin.innerHTML = '<a onmouseover="linkedinActive()" id="linkedinInActive" href="https://www.linkedin.com/in/daniel-ekeleme/" target="_blank"><img height="64px" width="64px" src="./images/Icons/icons8-linkedin-circled-100.png"></a>';
    
}

var menuOn = false;

function revealMenu(){
    if(menuOn === false)
    {
        var drop = document.getElementById('dropDown');
        drop.style.display = 'block';
        menuOn = true
    }else if(menuOn === true)
    {
        var drop = document.getElementById('dropDown');
        drop.style.display = 'none';
        menuOn = false;
    }
    // var hide = document.querySelector('.mobile-menu');

    // hide.innerHTML = '<div class="btns"> <button type="button" onclick="hideMenu()"><img src="./images/Icons/icons8-xbox-menu-100.png"/></button> </div> <div id="dropDown" > <div><a href="#portfolio">Portfolio</a></div> <div><a href="#resume">Resume</a></div> <div><a href="#work">Work</a></div></div>'
    
}

function hideMenu(){
    var drop = document.getElementById('dropDown');
    drop.style.display = 'none';
    menuOn = false;
}