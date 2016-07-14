var Inflector = require("@nathanfaucett/inflector"),
    defineProperty = require("@nathanfaucett/define_property");


var locales = global.__INFLECTORS__,
    defaultLocale = global.__DEFAULT_LOCALE__;


if (!locales) {
    locales = {};
    defineProperty(global, "__INFLECTORS__", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: locales
    });
}

if (!defaultLocale) {
    defaultLocale = "en";
    defineProperty(global, "__DEFAULT_LOCALE__", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: defaultLocale
    });
}


module.exports = inflections;


function inflections(locale) {
    var inflector;

    locale = locale || defaultLocale;
    inflector = locales[locale];

    if (!inflector) {
        inflector = Inflector.create();

        defineProperty(locales, locale, {
            configurable: false,
            enumerable: false,
            writable: false,
            value: inflector
        });
    }

    return inflector;
}

inflections.setDefaultLocale = function(locale) {
    global.__DEFAULT_LOCALE__ = defaultLocale = locale;
};
