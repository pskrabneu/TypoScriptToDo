/**
 * Created by pskrebnev on 19.09.2016.
 */
// Chapter 7 "Understanding Modules" >
// Video03 "Understanding the need of modules. Namespaces".
var jQuery = {
    version: 1.19,
    fn: {}
};
(function defineType($) {
    if ($.version < 1.15) {
        throw 'Plugin requires jQuery version 1.15+';
    }
    $.fn.myPlugin = function () {
        // my plugin code
    };
})(jQuery);
//# sourceMappingURL=app.js.map