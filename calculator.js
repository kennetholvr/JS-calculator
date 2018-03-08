$(document).ready(function() {
	$("#form").onCLick(function(e){
    e.preventDefault();
	currentValue = $("#display").val();//double check this. It was blank in the other function
    $("#display").val(currentValue);
});


const calculator = {
	sum: 0, //initialized to 0 may be a problem in the other methods of this object. 
            //Is this intended to be a prototype and the sum property to be overwritten when a new object is created from this prototype?
	add: function(value) {
        this.sum += value;
    },
    subtract: function(value) {
		this.sum -= value;
    },
    multiply: function(value) {
		this.sum *= value;//will always be 0 unless sum is overwritten
    },
    divide: function(value) {
		this.sum /= value;//also problematic 0/value unless overwrite?
	},
    clear: function() {
		this.sum = 0;
		$("#display").val(currentValue)//again was blank in the other function
    },
    equals: function() {
		return this.sum;
    }
}
