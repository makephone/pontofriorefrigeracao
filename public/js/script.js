var x = $(document);
x.ready(carregar);
function carregar() {
	$(".navbar li").hover(aparecer, sumir);

	function aparecer() {
		$(this).find('.subitem').css("display", "block");
		$(this).find('.subitem').css("opacity", "1");
	}

	function sumir() {
		$(this).find('.subitem').css("display", "none");
		$(this).find('.subitem').css("opacity", "0");
	}

	function slide(i) {
		var imagemBarner = [
			'url("https://firebasestorage.googleapis.com/v0/b/chat-1e2a0.appspot.com/o/barner2.jpg?alt=media&token=0c2fad7b-3307-4af7-9920-55165b42845b")',
			'url("https://firebasestorage.googleapis.com/v0/b/chat-1e2a0.appspot.com/o/barner1.jpg?alt=media&token=a825b20b-0475-48b0-b00c-603a534e5959")',
			'url("https://firebasestorage.googleapis.com/v0/b/chat-1e2a0.appspot.com/o/barner3.jpg?alt=media&token=71f3fd3c-9ac4-4fe1-94b7-8a6ebaacc7c3")',
			'url("https://firebasestorage.googleapis.com/v0/b/chat-1e2a0.appspot.com/o/barner4.jpg?alt=media&token=b69f73bb-283d-4455-9d97-01c879951a0e")'
		]
		setTimeout(function () {
			$(".barner").css('background-image', imagemBarner[i]);
			$(".barner .listaSlide li").eq(i).css("color", "red");
			i++;
			if (i > 3) {
				setTimeout(function () {
 				$(".barner .listaSlide li").css("color", "white");

					slide(0);

				}, 5000);
			} else {
				slide(i);
				console.log(i)
			}
		}, 5000);
	}
	slide(0);
}