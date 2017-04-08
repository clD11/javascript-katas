describe("when panel state updates observers", function() {
        
        beforeEach(function() {
                this.date = new Date();
                this.panel = new Panel();
        });

        it("should return yellow for even seconds", function() {                
                this.date.setSeconds(2);                
                this.panel.setState(this.date);                
                var seconds = observers(this.panel).seconds();                
                expect(seconds()).toEqual("Y");
        });

        it("should return red for every five hours", function() {
                this.date.setHours(15);
                this.panel.setState(this.date);
                var fiveHours = observers(this.panel).fiveHour();
                expect(fiveHours()).toEqual("RRRO");
        });

        it("should return red for every single hour", function() {
                this.date.setHours(17);
                this.panel.setState(this.date);
                var singleHour = observers(this.panel).singleHour();
                expect(singleHour()).toEqual("RROO");
        });

        it("should return yellow for every five minutes and red for each quarter", function() {
                this.date.setMinutes(20);
                this.panel.setState(this.date);
                var fiveMinutes = observers(this.panel).fiveMinute();
                expect(fiveMinutes()).toEqual("YYRYOOOOOOO"); 
        });
        
        it("should return yellow for every single minute", function() {
                this.date.setMinutes(17);
                this.panel.setState(this.date);
                var singleMinute = observers(this.panel).singleMinute();
                expect(singleMinute()).toEqual("YYOO"); 
        });
});

describe("when Panel state updates", function() {

        var panel, observer;

        beforeEach(function() {
                panel = new Panel();
                
                observer = {
                        timeFunc : function(){}
                };
        });

        it("should call all the attached observers", function() {
                spyOn(observer, "timeFunc");
                
                panel.attach(observer.timeFunc);               
                panel.update();

                expect(observer.timeFunc).toHaveBeenCalled();
        });
});