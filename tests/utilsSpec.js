describe("Utilities Suite", function() {

    it("utilities sub-namespace defined", function() {
        expect( myMemGame.utils ).toBeTruthy();
        expect( myMemGame.utils ).not.toBeNull();
    });

    it("testing isEmptyVal Method", function() {
        expect(  myMemGame.utils.isEmptyVal()      ).toBeTruthy();
        expect(  myMemGame.utils.isEmptyVal("")    ).toBeTruthy();
        expect(  myMemGame.utils.isEmptyVal(null)  ).toBeTruthy();
        expect(  myMemGame.utils.isEmptyVal([])    ).toBeFalsy();
        expect(  myMemGame.utils.isEmptyVal({})    ).toBeFalsy();
        expect(  myMemGame.utils.isEmptyVal(0)     ).toBeFalsy();
        expect(  myMemGame.utils.isEmptyVal(true)  ).toBeFalsy();
        expect(  myMemGame.utils.isEmptyVal(false) ).toBeFalsy();
    });

    it("testing exists Method", function() {
        expect(  myMemGame.utils.exists()      ).toBeFalsy();
        expect(  myMemGame.utils.exists(null)  ).toBeFalsy();
        expect(  myMemGame.utils.exists("")    ).toBeTruthy();
        expect(  myMemGame.utils.exists([])    ).toBeTruthy();
        expect(  myMemGame.utils.exists({})    ).toBeTruthy();
        expect(  myMemGame.utils.exists(0)     ).toBeTruthy();
        expect(  myMemGame.utils.exists(true)  ).toBeTruthy();
        expect(  myMemGame.utils.exists(false) ).toBeTruthy();
    });

    /*
        Commented out, 
        I will need to plugin phantomJS or something like that to test further

    it("addEvent Method", function() {
        //addEvent : function(el, ev, fn)
        var el = document.createDocumentFragment(),
            ev = 'click',
            fn = function(){ return "foo" };
    });
    */

});