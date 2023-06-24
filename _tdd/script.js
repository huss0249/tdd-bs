/**
 * HTML FILE INCLUDE
 * Modified from the original w3schools code
 */
const includeHTML = () => {
  /*loop through a collection of all HTML elements:*/
  const els = document.querySelectorAll('[w3-include-html]')

  els.forEach(el => {
    let file = el.getAttribute("w3-include-html")
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {

        if (this.readyState == 4) {
          // OUTER instead of INNER HTML
          this.status == 200 ? el.outerHTML = this.responseText : ''
          this.status == 404 ? el.outerHTML = "Page not found." : ''

          /*remove the attribute, and call this function once more:*/
          el.removeAttribute("w3-include-html");
          includeHTML()
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return
    }
  });
}
includeHTML();



/* 
================================================
 */

// const $nav = document.querySelector('.navbar')
// window.addEventListener('scroll', () => {
// 	if(window.scrollY >= 60) {
// 		// $nav.classList.add('navbar-scrolled')
// 		$nav.classList.add('scrolled')
// 	} else if (window.scrollY <= 60) {
// 		// $nav.classList.remove('navbar-scrolled')
// 		$nav.classList.remove('scrolled')
// 	}
// })

const $nav = document.querySelector('#nav')
console.log($nav)
window.addEventListener('scroll', () => {
  if (window.scrollY >= 60) {
    console.log($nav)
    console.log('scroll')
		// $nav.classList.add('navbar-scrolled')
		// $nav.classList.remove('bg-transparent')
		// $nav.classList.add('bg-dark')
		// $nav.classList.add('transition-3')
		// $nav.classList.toggle('nav-scroll')
		// $nav.classList.toggle('transition-3')
		// $nav.classList.add('scrolled')
	} else if (window.scrollY <= 60) {
    // $nav.classList.toggle('nav-scroll')
		// $nav.classList.toggle('transition-3')
    console.log('scroll up')
    // $nav.classList.remove('navbar-scrolled')
		// $nav.classList.remove('bg-dark')
		// $nav.classList.remove('scrolled')
		// $nav.classList.remove('transition-3')
		// $nav.classList.add('bg-transparent')
	}
})
//--------------------------------------------------------------

const $tmp = document.getElementsByTagName('editor-card')
console.log($tmp)
console.log($tmp[0])