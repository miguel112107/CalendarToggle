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
self.availability = [
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
			for(var i = 0; i<12; i++)
			{
			if(x = document.getElementById("myCheck").checked)
			{
			//document.getElementById("availCheck"+String(i)).innerHTML = true;
			available= false;
			//alert(available);//debugging
			calendarToggle(available);
			}

			else{
			//document.getElementById("availCheck"+String(i)).innerHTML = false;
			available = true;
			//alert(available);//debugging
			calendarToggle(available);
			}
		}
	}

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
		
		
		/*var ToF = prompt("Please Enter if Available")
			if(ToF == "false"){
				availability[i].available = false;
				
			}
			
			else{
				availability[i].available = true;
			}*/
		
		if(availability == true){
		ctx.fillStyle = "green";
		
		}
		else if(availability == false){
		ctx.fillStyle = "orange";
		}
		
		ctx.beginPath();
		ctx.moveTo(200,150);
		ctx.arc(200,150,150,lastend,lastend+
		  (Math.PI*2*(myData[i].divide/myTotal)),false);
		ctx.lineTo(200,150);
		ctx.fill();
		lastend += Math.PI*2*(myData[i].divide/myTotal);
		
		

		
		
		}
		}

		plotData();
	}

ko.applyBindings(new ScheduleViewModel());