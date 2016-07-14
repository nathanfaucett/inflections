var tape = require("tape"),
    Inflector = require("@nathanfaucett/inflector"),
    inflections = require("..");


tape("inflection", function(assert) {
    var enInflector = inflections("en");

    assert.equal(enInflector instanceof Inflector, true, "should return en inflector or create new one if not present");
    assert.equal(enInflector === inflections("en"), true, "should return same inflector");
    assert.end();
});

tape("#setDefaultLocale(locale : String)", function(assert) {
    var inflector;

    inflections.setDefaultLocale("es");
    inflector = inflections();

    assert.equal(inflector instanceof Inflector, true, "should set the default locale");
    assert.end();
});
