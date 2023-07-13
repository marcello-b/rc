$(window).ready(function () {
		 $('.menu-bg-wrap').css('background-color','rgba(29, 32, 36, 0.1)');
});

 $(window).scroll(function () {
		if ($(window).scrollTop() >= 100) {
			$('.menu-bg-wrap').css('background-color','rgba(29, 32, 36, 1)');
		} else {
			$('.menu-bg-wrap').css('background-color','rgba(29, 32, 36, 0.1)');
		}
});

// fetch("./header.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("header").innerHTML = data;
//   });

fetch("footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
