var Inflector = require("inflector"),
    defineProperty = require("define_property");


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
    locale = locale || defaultLocale;
    return locales[locale] || (locales[locale] = Inflector.create());
}

inflections.setDefaultLocale = function(locale) {
    global.__DEFAULT_LOCALE__ = defaultLocale = locale;
};
