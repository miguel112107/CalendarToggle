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
	function ScheduleViewModel() 
	{	
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
			}
			else
			{
				document.getElementById("availCheck"+String(i)).innerHTML ="Yes";
				arrAvail[i]= true;

			}
		}
		calendarToggle(arrAvail);
	}


	function calendarToggle(avail) 
	{
		availability = avail;
		
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var startAngle = 0;
		var intervals = 12;
		var segmentWidth = 360 / intervals;
		
		var endAngle = segmentWidth;
		
		var x = canvas.width / 2;
		var y = canvas.height / 2;
		
			
		function plotData() 
		{   
			
			
			for(var i = 0; i < intervals; i++)
			{         
				context.beginPath();
				context.moveTo(x,y);
				context.arc(x, y, 200, ((startAngle * Math.PI / 180)+(1.5*Math.PI)), (endAngle * Math.PI / 180)+(1.5*Math.PI), false);
			  
			  
			  
				 if(availability[i] == true)
				{
					context.fillStyle = "white";
						
				}
				else
				{
					context.fillStyle = "red";
				}
					
				context.lineTo(x,y);		
				context.stroke();
				context.fill();
				  

				// increase per segment        
				startAngle += segmentWidth;
				endAngle += segmentWidth ;
			  
			}
		}
			
			plotData();
			
			
	}
	
	
	 function q( clickEvent ) 
	{
	
		
		clickEvent = event || window.event;
		
		var canvas = document.getElementById('canvas'),
		mouseX = event.pageX - canvas.offsetLeft,
		mouseY = event.pageY - canvas.offsetTop;
		x = canvas.width / 2;
		y = canvas.height / 2;
		//alert("Check two");
		
		
		// Was the click inside the pie chart?
		var xFromCentre = mouseX - x;
		var yFromCentre = mouseY - y;
		var distanceFromCentre =Math.sqrt( (Math.pow( Math.abs( xFromCentre ), 2 )) + (Math.pow( Math.abs( yFromCentre ), 2 ) ));
		
		//alert(startAngle);
		/* canvas.mousedown(function()
		{ */
			if ( distanceFromCentre <= 200 ) 
			{
				
					var clickAngle = Math.atan2( yFromCentre, xFromCentre ) * 57.2957;
					  
					switch(true)
						  //First Slice
					{
						case clickAngle < -60 && clickAngle > -90:
							if(availability[0] == false){(availability[0] = true);calendarToggle(availability); }
							else {(availability[0] = false);calendarToggle(availability); } 
							
							break;
					  
					  
					  //Second Slice
					  
						case clickAngle < -30 && clickAngle > -60:
							if(availability[1] == false){(availability[1] = true);calendarToggle(availability); }
							else {(availability[1] = false);calendarToggle(availability); } 
							
							break;
					  
					  
					  //Third Slice
					  
						case clickAngle < 0 && clickAngle > -30:
							if(availability[2] == false){(availability[2] = true);calendarToggle(availability); }
							else {(availability[2] = false);calendarToggle(availability); } 
							
							break;
					  
					  //Fourth Slice
					  
						case clickAngle < 30 && clickAngle > 0:
							if(availability[3] == false){(availability[3] = true);calendarToggle(availability); }
							else {(availability[3] = false);calendarToggle(availability); } 
							
							break;
					  
					  //Fifth Slice
					  
						case clickAngle < 60 && clickAngle > 30:
							if(availability[4] == false){(availability[4] = true);calendarToggle(availability); }
							else {(availability[4] = false);calendarToggle(availability); } 
							
							break;
					  
					  //Sixth Slice
					  
						case clickAngle < 90 && clickAngle > 60:
							if(availability[5] == false){(availability[5] = true);calendarToggle(availability); }
							else {(availability[5] = false);calendarToggle(availability); } 
							
							break;
					  
					  //Seventh Slice
					  
						case clickAngle < 120 && clickAngle > 90:
							if(availability[6] == false){(availability[6] = true);calendarToggle(availability); }
							else {(availability[6] = false);calendarToggle(availability); } 
							
							break;
					  
					  //Eighth Slice
					  
						case clickAngle < 150 && clickAngle > 120:
							if(availability[7] == false){(availability[7] = true);calendarToggle(availability); }
							else {(availability[7] = false);calendarToggle(availability); } 
							
							break;
					  
					  //Ninth Slice
					  
						case clickAngle < 180 && clickAngle > 150:
							if(availability[8] == false){(availability[8] = true);calendarToggle(availability); }
							else {(availability[8] = false);calendarToggle(availability); } 
							
							break;
					  
					  //Tenth Slice
					  
						case clickAngle < -150 && clickAngle > -180:
							if(availability[9] == false){(availability[9] = true);calendarToggle(availability); }
							else {(availability[9] = false);calendarToggle(availability); } 
							
							break;
					  
					  //Eleventh Slice
					  
						case clickAngle < -120 && clickAngle > -150:
							if(availability[10] == false){(availability[10] = true);calendarToggle(availability); }
							else {(availability[10] = false);calendarToggle(availability); } 
							
							break;
					  
					  //Last Slice
					  
						case clickAngle < -90 && clickAngle > -120:
							if(availability[11] == false){(availability[11] = true);calendarToggle(availability); }
							else {(availability[11] = false);calendarToggle(availability); } 
							
							break;
					}
						  

			}	   
				
		/* }); */
	}
   
ko.applyBindings(new ScheduleViewModel());
