// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /*loop through a collection of all HTML elements:*/
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute("w3-include-html");

//     if (file) {
//       /*make an HTTP request using the attribute value as the file name:*/
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//           if (this.status == 200) {
//             elmnt.innerHTML = this.responseText;
//           }
//           if (this.status == 404) {
//             elmnt.innerHTML = "Page not found.";
//           }
//           /*remove the attribute, and call this function once more:*/
//           elmnt.removeAttribute("w3-include-html");
//           includeHTML();
//         }
//       };
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /*exit the function:*/
//       return;
//     }
//   }
// }

// includeHTML();














const includeHTML = () => {
  let z, i, elmnt, file, xhttp

  /*loop through a collection of all HTML elements:*/
  // els = document.getElementsByTagName("*");
  const els = document.querySelectorAll('[w3-include-html]')
  // console.log(els)
  

  els.forEach(el => {
    file = el.getAttribute("w3-include-html")
    // console.log(file)
    // })


  
    // for (i = 0; i < z.length; i++) {
    // elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    // file = elmnt.getAttribute("w3-include-html");

    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {

        if (this.readyState == 4) {
          this.status == 200 ? el.innerHTML = this.responseText : ''
          this.status == 404 ? el.innerHTML = "Page not found." : ''

          /*remove the attribute, and call this function once more:*/
          // elmnt.removeAttribute("w3-include-html");
          el.removeAttribute("w3-include-html");
          includeHTML()
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      
      return
    }

    // }
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
// console.log($nav)
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

$df = document.getElementsByTagName('df')
console.log($df)
// console.log($df.lastChildElement)