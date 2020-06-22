window.onload = () => {
	let pics = document.getElementById('show_pics').children;
	let dots = document.getElementById('dots').children;

	function siblings(elem) {//获取所有兄弟元素
		var r = [];
		var n = elem.parentNode.firstChild;
		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				r.push(n);
			}
		}
		return r;
	}
	var i = 0;
	 setInterval(() => {
		if (i < 3) {
			pics[i].setAttribute('class', 'active');
			dots[i].setAttribute('class', 'active');
			if(i != 0){
				pics[i].previousElementSibling.setAttribute('class', '');
				dots[i].previousElementSibling.setAttribute('class', '');
			}
			i++;			
		}else{
			i = 0;
			pics[pics.length-1].setAttribute('class', '');
			dots[pics.length-1].setAttribute('class', '');
		}
	}, 1500)  /**/
	 /*console.log(pics); */
	
}