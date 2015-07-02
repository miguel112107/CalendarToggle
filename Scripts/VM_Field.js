var available = true;
var arrAvail = [
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
		];
		calendarToggle(arrAvail);
// Overall viewmodel for this screen, along with initial state
function ScheduleViewModel() {
	
    var self = this;
	
    
	
    //array used to push values to UI
    self.availablePosition = ko.observableArray([
		{ timeSlot: "0-5"},
        { timeSlot: "5-10"},
        { timeSlot: "10-15"},
        { timeSlot: "15-20"},
        { timeSlot: "20-25"},
		{ timeSlot: "25-30"},
		{ timeSlot: "30-35"},
        { timeSlot: "35-40"},
        { timeSlot: "40-45"},
        { timeSlot: "45-50" },
        { timeSlot: "50-55" },
		{ timeSlot: "55-60"},
    ]);

}

	function myFunction() 
	{
		
		var x;
				for(var i = 0; i < arrAvail.length; i++)
				{
					if(x = document.getElementById("myCheck"+String(i)).checked)
					{
						document.getElementById("availCheck"+String(i)).innerHTML = "No";
						arrAvail[i]= false;
						
						//alert(i);//debugging
					}

					else
					{
						document.getElementById("availCheck"+String(i)).innerHTML ="Yes";
					
						//alert(i);//debugging
						arrAvail[i]= true;

					}
					
				}
		calendarToggle(arrAvail);
	}


function calendarToggle(avail) {
	availability = avail;
		

		var myData = [
		{divide:10},
		{divide:10},
		{divide:10},
		{divide:10},
		{divide:10},
		{divide:10},
		{divide:10},
		{divide:10},
		{divide:10},
		{divide:10},
		{divide:10},
		{divide:10}
		];
		
		//number of divisions
		function getTotal(){
		var myTotal = 0;
		for (var j = 0; j < myData.length; j++) {
		myTotal += (typeof myData[j].divide == 'number') ? myData[j].divide : 0;
		}
			return myTotal;
		}

		function plotData() {
			var canvas;
			var ctx;
			var lastend = -1.6;
			var myTotal = getTotal();
			
			canvas = document.getElementById("canvas");
			ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
				
				for (var i = 0; i < myData.length; i++) {
				
				//debugging code
					
				
				//////////////////////////////////////////////end debug
				
					if(availability[i] == true){
						ctx.fillStyle = "green";
					
					}
					else if(availability[i] == false){
						ctx.fillStyle = "red";
					}
					
				ctx.beginPath();
				ctx.moveTo(200,150);
				ctx.arc(200,150,150,lastend,lastend+
				  (Math.PI*2*(myData[i].divide/myTotal)),false);
				ctx.lineTo(200,150);
				ctx.fill();
				lastend += Math.PI*2*(myData[i].divide/myTotal);
				
				var c=document.getElementById("canvas");
				var ctx=c.getContext("2d");
				ctx.beginPath();
				ctx.fillStyle = "white";
				ctx.arc(200,150,125,0,2*Math.PI);
				ctx.stroke();
				ctx.fill();

					}
					
					
		}
	
		plotData();
	}
	
		function q(event) {
    event = event || window.event;

    var canvas = document.getElementById('canvas'),
        x = event.pageX - canvas.offsetLeft,
        y = event.pageY - canvas.offsetTop;

    alert(x + ' ' + y);
}

ko.applyBindings(new ScheduleViewModel());