var observers = function (panel) {
	
	var panel = panel;		

	function secondsBar() {
		return (panel.state.getSeconds() % 2 == 0) ? "Y" : "O";
	}

	function fiveHour() {
		return getLamps(4, getOnDiv(panel.state.getHours()), "R");
	}
	
	function singleHour() {
		return getLamps(4, getOnMod(panel.state.getHours()), "R");
	}
		
	function fiveMinute() {
		return getLamps(11, getOnDiv(panel.state.getMinutes()), "Y").replace(/YYY/g, "YYR");
	}

	function singleMinute() {
		return getLamps(4, getOnMod(panel.state.getMinutes()), "Y")
	}

	function getOnDiv(number) {
		return Math.floor(number / 5);
	}

	function getOnMod(number) {
		return Math.floor(number % 5);
	}

	function getLamps(lamps, on, colour) {

		var result = "";

		for (var i = 0; i < on; i++) {
			result += colour;
		}

		for (var i = 0; i < lamps - on; i++) {
			result += "O";
		}

		return result;
	}

	return {
		seconds : function() {
			return secondsBar;
		},
		fiveHour : function() {
			return fiveHour;
		},
		singleHour : function() {
			return singleHour;
		},
		fiveMinute : function() {
			return fiveMinute;
		},
		singleMinute : function() {
			return singleMinute;
		}
	}	
};

var Panel = (function () {

	function Panel() {
		this.observers = [];
	}
	
	Panel.prototype.attach = function(observer) {
		this.observers.push(observer);
	}
	
	Panel.prototype.setState = function(state) {
		this.state = state;
		this.update();
	}
	
	Panel.prototype.update = function() {
		for (observer in this.observers) {
			console.log(this.observers[observer]());
		}
	}
	
	return Panel;
})();

function engine() {

	var panel = new Panel();
	var observers = observers(panel);

	panel.attach(observers.seconds());
	panel.attach(observers.fiveHour());
	panel.attach(observers.singleHour());
	panel.attach(observers.fiveMinute());
	panel.attach(observers.singleMinute());

	console.log(new Date());

	setInterval(function() { panel.setState(new Date()); }, 1000);
}

//engine(); 