/* global describe, it, expect */

(function () {
	'use strict';

	describe('Check ', function() {
		beforeEach(module('atApp'));
		  var $controller;

		  var input = {
		      	"-KFsI4cwKoHzoZ64eju9":{"a":{"En Arduino är:":"Ett programspråk","En if-sats är till för att:":"Välja väg i programmet och upptäcka händelser","En loop är till för att:":"Repetera kod flera gånger","Ett program läses:":"Uppifrån och ned","Jag förstår vad programmering är och hur det används (1 stämmer inte alls - 4 stämmer helt)":"4","Jag har programmerat förut":"Sant","Jag vill lära mig mer programmering (1 stämmer inte alls - 4 stämmer helt)":"4"},"date":1461233408685,"fid":123},
		      	"-KFsI6un3YS9BwJDFbaF":{"a":{"En Arduino är:":"Endast en kontakt för att koppla komponenter till datorn","En if-sats är till för att:":"Välja väg i programmet och upptäcka händelser","En loop är till för att:":"Repetera kod flera gånger","Ett program läses:":"Grisen gal i granens topp","Jag förstår vad programmering är och hur det används (1 stämmer inte alls - 4 stämmer helt)":"3","Jag har programmerat förut":"Falskt","Jag vill lära mig mer programmering (1 stämmer inte alls - 4 stämmer helt)":"2"},"date":1461233417997,"fid":123},
		      	"-KFsI98BtG2vu2feOHKL":{"a":{"En Arduino är:":"Ett programspråk","En if-sats är till för att:":"Repetera kod flera gånger","En loop är till för att:":"Välja väg i programmet och upptäcka händelser","Ett program läses:":"Uppifrån och ned","Jag förstår vad programmering är och hur det används (1 stämmer inte alls - 4 stämmer helt)":"3","Jag har programmerat förut":"Sant","Jag vill lära mig mer programmering (1 stämmer inte alls - 4 stämmer helt)":"2"},"date":1461233426332,"fid":123},
		      	"-KFsIAU2IFsWvOplo9Ut":{"a":{"En Arduino är:":"En minidator","En if-sats är till för att:":"Repetera kod flera gånger","En loop är till för att:":"Repetera kod flera gånger","Ett program läses:":"Uppifrån och ned","Jag förstår vad programmering är och hur det används (1 stämmer inte alls - 4 stämmer helt)":"2","Jag har programmerat förut":"Falskt","Jag vill lära mig mer programmering (1 stämmer inte alls - 4 stämmer helt)":"4"},"date":1461233431756,"fid":123},
		      	"-KFsIAeN3DcYtuSrB7gp":{"a":{"En Arduino är:":"Ett programspråk","Jag förstår vad programmering är och hur det används (1 stämmer inte alls - 4 stämmer helt)":"2","Jag har programmerat förut":"Falskt","Jag vill lära mig mer programmering (1 stämmer inte alls - 4 stämmer helt)":"4"},"date":1461233433506,"fid":123}
		  		}

		  beforeEach(inject(function(_$controller_){
		    // The injector unwraps the underscores (_) from around the parameter names when matching
		    $controller = _$controller_;
		  }));

		  describe('controller', function() {
		    it('statCtrl', function() {
		      var $scope = {};
		      var controller = $controller('statCtrl', { $scope: $scope });
		  	var retValue = $scope.getResult(input);
		      expect(retValue["En Arduino är:"]["Ett programspråk"]).toEqual(3);
		      expect(retValue["En Arduino är:"]["Endast en kontakt för att koppla komponenter till datorn"]).toEqual(1);
		      expect(retValue["En Arduino är:"]["En minidator"]).toEqual(1);
		      expect(retValue["En Arduino är:"]["total"]).toEqual(5); //Denna ger ifrån sig fel...
		      console.log(retValue["En Arduino är:"])
		    });
		  });
	});

}());


