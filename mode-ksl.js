require("ace-min-noconflict");

ace.define('ace/mode/ksl', function(require, exports, module) {
    'use strict';

    const oop = require("ace/lib/oop");
    const TextMode = require("ace/mode/text").Mode;

    const {KslHighlightRules} = require("ace/mode/ksl_highlight_rules");
    const {Range} = require("ace/range");

    let Mode = function() {
        this.HighlightRules = KslHighlightRules;
    };
    oop.inherits(Mode, TextMode);

    (function() {
        // Extra logic goes here. (see below)

        this.getNextLineIndent =  function (state, line, tab) {
            let indent        = this.$getIndent(line);
            let tokenizedLine = this.getTokenizer().getLineTokens(line, state);
            let tokens        = tokenizedLine.tokens;

            if (tokens.length && tokens[tokens.length - 1].type == "comment") {
                return indent;
            }
            if (state == "start" && line.match(/^.*[\{]\s*$/)) {
                return indent + tab;
            }
            if (this.checkOutdent(state, line, '\n')) {
                return indent - tab;
            }

            return indent;
        };

        this.checkOutdent = function (state, line, input) {
            let indent        = this.$getIndent(line);
            let tokenizedLine = this.getTokenizer().getLineTokens(line, state);
            let tokens        = tokenizedLine.tokens;

            if (tokens.length && tokens[tokens.length -1].type == "comment") return false;

            if (state == "start") {
                if (line.match(/^.*[\}]\s*$/)) {
                    return true;
                }
            }
            return false;
        }

        this.autoOutdent = function(state, doc, row) {
            let line = doc.getLine(row);
            let match = line.match(/^(\s*\})/);

            if (!match) return 0;

            let column = match[1].length;
            let openBracePos = doc.findMatchingBracket({row: row, column: column});

            if (!openBracePos || openBracePos.row == row) return 0;

            let indent = this.$getIndent(doc.getLine(openBracePos.row));
            doc.replace(new Range(row, 0, row, column-1), indent);
        };

    }).call(Mode.prototype);

    exports.Mode = Mode;
});

