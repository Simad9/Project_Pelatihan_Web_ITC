const toggle = document.getElementById('toggle');
const list = document.getElementById('list-nav');
toggle.addEventListener("click", function () {
  if (toggle.classList.contains('active')) {
    console.log('berhasil');
    toggle.classList.remove('active');
    list.classList.add('list')
  } else {
    toggle.classList.add('active');
    list.classList.remove('list')
  }
  //bingung pake toggle masgq
})