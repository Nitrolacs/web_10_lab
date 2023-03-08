window.onload = function () {
	var imgArr = document.getElementsByClassName('my__img');

	var modalWindow = document.getElementById('my__modal');
	var modalImg = document.getElementById('img01');
	var caption =document.getElementById('caption');
	var modalBlock = document.getElementById('modal__block');

	for(i=0; i<imgArr.length; i++){
		var picture = imgArr[i];
		picture.addEventListener("click", function(){
			openImg(this);
		}, false)
	}

	function openImg(pic){
		modalWindow.style.display='block';
		modalBlock.style.transform = 'translateY(0%)';
		modalImg.src = pic.src;
		modalImg.alt = pic.alt;
		caption.innerHTML = modalImg.alt;
	}

	function close(){
		modalWindow.style.display ='none';
	}

	modalWindow.addEventListener("click", close, false);
}