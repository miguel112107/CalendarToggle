var ViewModel = function() {
   this.IsMale = ko.observable(true);

   this.IsMale.ForEditing = ko.computed({
        read: function() {
            return this.IsMale().toString();  
        },
        write: function(newValue) {
             this.IsMale(newValue === "true");
			 alert("true");
        },
        owner: this        
    });          
};

ko.applyBindings(new ViewModel());