// 屏蔽鼠标右键
document.oncontextmenu = function() {
	createTiShi()
	return false;
}
// 禁止调试
document.onkeydown = function() {
	var e = window.event || arguments[0];
	var tishi = document.getElementById("tishi")
	let flag = false;
	if (e.keyCode == 123) {
		// f12
		flag = true;
	} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
		// i
		flag = true;
	} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 74)) {
		// j
		flag = true;
	} else if ((e.ctrlKey) && (e.keyCode == 85)) {
		// u
		flag = true;
	} else if ((e.ctrlKey) && (e.keyCode == 83)) {
		// s
		flag = true;
	}
	if (flag) {
		createTiShi()
		return false;
	}
}

function createTiShi() {
	if (createTiShi.only == true) return
	// 节流标识
	createTiShi.only = true
	let tishi = document.getElementById('tishi')
	if (!tishi) {
		tishi = document.createElement('div')
		tishi.setAttribute(
			'style',
			`
					position: fixed;
					top: 50%;
					color: red;
					left: 50%;
					padding: 20px 40px;
					background: black;
					border-radius: 10px;
					transform: translate(-50%,-50%) scale(0);
					transition: all .5s;
					`
		)
		tishi.setAttribute('id', 'tishi')
		tishi.innerText = '已被禁用，自己思考！！！'
		document.querySelector('body').append(tishi)
	}
	requestAnimationFrame(() => {
		tishi.style.transform = 'translate(-50%, -50%) scale(1)'
	})
	setTimeout(() => {
		tishi.style.transform = 'translate(-50%, -50%) scale(0)'
		createTiShi.only = false
	}, 2000)
}

// 移动端等比例大小
function mobileAdapter() {
	const WIDTH = 1400
	const isPc = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)
	if (isPc) return;
	let scale = window.screen.width / WIDTH
	let content = `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`
	let meta = document.querySelector('meta[name=viewport]')
	if (!meta) {
		meta = document.createElement('meta')
		meta.setAttribute('name', 'viewport')
		document.head.appendChild(meta)
	}
	meta.setAttribute('content', content)
	console.log(meta)
}
mobileAdapter()