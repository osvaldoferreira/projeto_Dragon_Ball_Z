var imagens = document.querySelectorAll('.small_img')
var modal = document.querySelector('.modal')
var modalImg = document.querySelector('#modal_img')
var btClose = document.querySelector('#bt_close')
let srcVal = ""

for (let i=0; i<imagens.length; i++) {
    imagens[i].addEventListener('click', function(){
        //alert(i)
        srcVal = imagens[i].getAttribute('src')
        modalImg.setAttribute('src', srcVal)
        modal.classList.toggle('modal_active')
    })
}

btClose.addEventListener('click', function() {
    modal.classList.toggle('modal_active')
})