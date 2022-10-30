const openBtn = document.getElementById("open");
openBtn.addEventListener('click',openForm);

function openForm(){
    if(openBtn.textContent.includes('Open Form')){
        openBtn.textContent = 'Close Form';
    }
    else{
        openBtn.textContent = 'Open Form';
    }
    const dropdownMenu=document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('dropdown-menu-active');
}