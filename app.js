const isScrolling =()=>{
    const headerE1 = document.querySelector('.headerSectionStart')
    let windowPosition = window.scrollY>250
    headerE1.classList.toggle('active', windowPosition)
}
 window.addEventListener ('scroll', isScrolling)

 var swiper = new Swiper(".carousel", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	},
  });

//  const headerEl = document.querySelector('.headerSectionStart')

// const isScrolling = () => {
// 	const windowPosition = window.scrollY > 50
// 	headerEl.classList.toggle('header--active', windowPosition)
// }

// window.addEventListener('scroll', isScrolling)