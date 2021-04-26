document.addEventListener('DOMContentLoaded', function() {
    let memeForm = document.querySelector('#memeForm')
    let container = document.querySelector('#container');
    let submit = document.querySelector('#submit');

    submit.addEventListener('click', function (e) {
    e.preventDefault();

    var memeContainer = document.createElement('div');

    let topText = document.querySelector('#topText');
    let topTextDiv = document.createElement('div');
    topTextDiv.innerText = topText.value;
    topTextDiv.classList.add('topTextFont');


    let urlInput = document.querySelector('#url').value,
    src = urlInput,
    img = document.createElement('img');
    img.src = src; 

    let bottomText = document.querySelector('#bottomText');
    let bottomTextDiv = document.createElement('div');
    bottomTextDiv.innerText = bottomText.value;
    bottomTextDiv.classList.add('topTextFont');
    

      

        container.appendChild(memeContainer);
        memeContainer.appendChild(topTextDiv);
        memeContainer.appendChild(img);
        memeContainer.appendChild(bottomTextDiv);
   



  
    
})



});