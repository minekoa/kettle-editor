'use strict';
require("ace-min-noconflict");

ace.define('ace/mode/ksl', function(require, exports, module) {

    const oop = require("ace/lib/oop");
    const TextMode = require("ace/mode/text").Mode;

    const {KslHighlightRules} = require("ace/mode/ksl_highlight_rules");

    var Mode = function() {
        this.HighlightRules = KslHighlightRules;
    };
    oop.inherits(Mode, TextMode);

    (function() {
        // Extra logic goes here. (see below)
    }).call(Mode.prototype);

    exports.Mode = Mode;
});

