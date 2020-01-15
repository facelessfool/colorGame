var colors=["rgb(168, 50, 50)",
			"rgb(87, 168, 50)",
			"rgb(50, 56, 168)",
			"rgb(168, 50, 166)",
			"rgb(168, 111, 50)",
			"rgb(107, 107, 107)"
			]


var squares=document.querySelectorAll(".square");
var pickedColor= picked();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.background=colors[i];
	//add click listeners to squares

	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor=this.style.background;

		if(clickedColor==pickedColor){
			for(var j=0;j<squares.length;j++){
				squares[j].style.background=pickedColor;

			}
			messageDisplay.textContent="WINNER!";
		}
		else{
			messageDisplay.textContent="sorry, try again ";
			this.style.background= "rgb(35,35,35)"
			

		}
	})	

}


function picked(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];

}