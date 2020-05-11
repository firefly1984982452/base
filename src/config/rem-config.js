export default function() {
	//首先取得当得屏幕宽度
	var width = window.screen.width;
	var scaleSize = 100,
		designSize = 1920;
		//用当得宽度除以（设计尺寸除以缩放尺寸）
	var size = width / (designSize / scaleSize);
	//设置font-size
	document.getElementsByTagName('html')[0].style.fontSize = (size) + 'px';
}