$(document).ready(function() {
	$("#form").onCLick(function(e){
    e.preventDefault();
	currentValue = $("#display").val();
  $("#display").val(currentValue);
});


const calculator = {
		sum: 0,
		add: function(value) {
      this.sum += value;
    },
    subtract: function(value) {
			this.sum -= value;
    },
    multiply: function(value) {
			this.sum *= value;
    },
    divide: function(value) {
			this.sum /= value;
		},
    clear: function() {
			this.sum = 0;
			$("#display").val(currentValue)
    },
    equals: function() {
			return this.sum;
    }
}
