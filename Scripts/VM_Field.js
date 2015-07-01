var available = true;

// Overall viewmodel for this screen, along with initial state
function ScheduleViewModel() {
	
    var self = this;
	
    
	
    //array used to push values to UI
    self.availablePosition = ko.observableArray([
		{ timeSlot: "0-5", available},
        { timeSlot: "5-10", available},
        { timeSlot: "10-15", available },
        { timeSlot: "15-20", available },
        { timeSlot: "20-25", available},
		{ timeSlot: "25-30", available},
		{ timeSlot: "30-35", available },
        { timeSlot: "35-40", available },
        { timeSlot: "40-45", available },
        { timeSlot: "45-50", available },
        { timeSlot: "50-55", available },
		{ timeSlot: "55-60", available },
    ]);
	
	
	
	
	
	
	
	
	
	//debugging purposes/////////////////////////////////////////////////////////////////
self.availablePlayers = [
        { timeSlot: "0-5", available},
        { timeSlot: "5-10", available},
        { timeSlot: "10-15", available },
        { timeSlot: "15-20", available},
        { timeSlot: "20-25", available },
		{ timeSlot: "25-30", available },
		{ timeSlot: "30-35", available},
        { timeSlot: "35-40", available },
        { timeSlot: "40-45", available },
        { timeSlot: "45-50", available },
        { timeSlot: "50-55", available},
		{ timeSlot: "55-60", available}
    ];
		
    
    
       
       
        
  
/////////////////////////////end debug///////////////////////////////////////
	
	self.myFunction = function() {
	
    var x;
		if(x = document.getElementById("myCheck").checked){
		document.getElementById("demo").innerHTML = true;
		available= true;
		alert(available);
		rosterSpot(available);
		}

		else{
		document.getElementById("demo").innerHTML = false;
		available = false;
		alert(available);
		rosterSpot(available);
		}
		
	}
	
	
	
	
}
function rosterSpot(avail) {
	availablePlayers = avail;
		

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
		
		
		/*var ToF = prompt("Please Enter if Available")
			if(ToF == "false"){
				availablePlayers[i].available = false;
				
			}
			
			else{
				availablePlayers[i].available = true;
			}*/
		
		if(availablePlayers == true){
		ctx.fillStyle = "green";
		
		}
		else{
		ctx.fillStyle = "red";
		

		}
		ctx.beginPath();
		ctx.moveTo(200,150);
		ctx.arc(200,150,150,lastend,lastend+
		  (Math.PI*2*(myData[i].divide/myTotal)),false);
		ctx.lineTo(200,150);
		ctx.fill();
		lastend += Math.PI*2*(myData[i].divide/myTotal);
		
		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");
		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.arc(200, 150, 120, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();

		
		
		}
		}

		plotData();
	}

ko.applyBindings(new ScheduleViewModel());