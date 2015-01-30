var assert = require("assert"),
    Inflector = require("inflector"),
    inflections = require("../src/index");


describe("inflection", function() {
    it("should return inflector or create new one if not present", function() {
        var inflector;

        inflector = inflections("en");

        assert.equal(inflector instanceof Inflector, true);
    });

    describe("#setDefaultLocale(locale : String)", function() {
        it("should set the default locale", function() {
            var inflector;

            inflections.setDefaultLocale("es");
            inflector = inflections();

            assert.equal(inflector instanceof Inflector, true);
        });
    });
});
