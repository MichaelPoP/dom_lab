window.addEventListener("load", function () {
//#1....................(using .addEventListener -- changes the greeting)

	
	document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";




//#2....................(using .onload -- changes the background color )

//window.onload = foo;


var back = document.getElementById("essentials").style.backgroundColor = "orange";
console.log(back);



//#3 + #4.....................(using event.target -- adds class 'selected' to an <li> when it is clicked; changes the image to match the selected <li>)

function addClass(event) {

	event.target.setAttribute("class", "selected");
	//querySelector selects the first instance of whatever you are looking for, while querySelectorAll will grab all instances
	document.querySelector("img").setAttribute("src", "./images/" + event.target.innerHTML+ ".jpeg");
	console.log(img);
}

 var selector = document.getElementsByTagName("li");
 console.log(selector);
  
   for (var i=0; i < selector.length; i++) {

       selector[i].addEventListener("click", addClass);
       

}

//#5...........................(removes the selected class from each <li> and changes image to 'panic.jpeg')

//document.querySelector("li").setAttribute("class", "unselected");
//document.event.target.removeAttribute("class", "selected");
document.getElementsById("reset").addEventListener("click", reset);
  

  function reset() {
  	console.log("Is it working");
    
    var unselector = document.getElementsByTagName("li");
	 for (var j=0; j < unselector.length; j++) {
         
         unselector[j].className = "reset";
         
         }

         document.querySelector("img").setAttribute("src", "./images/panic.jpeg");
       //addEventListener("click", removeClass);
 }

	//DOESNT WORK!!!!!!


    

});