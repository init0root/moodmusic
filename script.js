var r = 255
var g = 255
var b = 255
var a = 1

function motion(){
	if(g >= 0){
		g = g - 1
		if(g == 0){
			g = 255
		}
	}


}


function motion2(){
	if(b >= 112){
		b = b - 1
		if(b == 112){
			b = 255
		}
	}

	


}

var body = document.getElementsByTagName('body')[0]


function changecolor(){
	body.style = 	 "background: radial-gradient(circle, rgba(255" + "," + g + "," + b + "," + "1) 0%, rgba(255,255,255,1) 100%);" 

}

setInterval(motion, 100)
setInterval(motion2, 100)
setInterval(changecolor,100)