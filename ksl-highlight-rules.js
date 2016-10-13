'use strict';
require("ace-min-noconflict");

ace.define('ace/mode/ksl_highlight_rules', function(require, exports, module) {

    const oop = require("ace/lib/oop");
    const {TextHighlightRules} = require("ace/mode/text_highlight_rules");

    let KslHighlightRules = function() {
        this.$rules = new TextHighlightRules().getRules();
    };

    oop.inherits(KslHighlightRules, TextHighlightRules);

    exports.KslHighlightRules = KslHighlightRules;
});
