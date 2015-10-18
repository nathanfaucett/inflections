var tape = require("tape"),
    Inflector = require("inflector"),
    inflections = require("..");


tape("inflection", function(assert) {
    var inflector;

    inflector = inflections("en");

    assert.equal(inflector instanceof Inflector, true, "should return inflector or create new one if not present");
    assert.end();
});

tape("#setDefaultLocale(locale : String)", function(assert) {
    var inflector;

    inflections.setDefaultLocale("es");
    inflector = inflections();

    assert.equal(inflector instanceof Inflector, true, "should set the default locale");
    assert.end();
});
