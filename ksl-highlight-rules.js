require("ace-min-noconflict");

ace.define('ace/mode/ksl_highlight_rules', function(require, exports, module) {
    'use strict';

    const oop = require("ace/lib/oop");
    const {TextHighlightRules} = require("ace/mode/text_highlight_rules");

    var KslHighlightRules = function() {
        const keywords = (
            'var device'
        );
        const keyword_controls = (
            'skip if then else while do wait until after parallel'
        );
        const builtin_functions = (
                  'assert log print get_time diff_time_ms '
                + 'average max min abs '
                + 'target_frame target_frame_a target_joints '
                + 'move_end_effector_position move_end_effector_position_n ' 
                + 'move_joints_position move_joints_position_n '
                + 'stop_joints '
        );
        const operators = (
                  "\\+|\\-|\\*|\\/|"             // + - * /
                + "\\<|\\>|\\<\\=|\\>\\=|"       // < > <= >=
                + "\\=\\=|\\!\\=|"               // == !=
                + "\\&\\&|\\|\\||"               // && ||
                + "\\="                          // =
        );
        let keywordMapper = this.$keyword = this.createKeywordMapper(
            { 'keyword'         : keywords,
              'keyword.control' : keyword_controls,
              'support.function': builtin_functions },
            'identifier', false, ' '
        );

        this.$rules = {
            "start": [
                { token: "comment"         , regex: "\\/\\/.*$" },
                { token: "constant.numeric", regex: "[+-]?([\\d]*\\.?[\\d]+|[\\d]+\\.)" },
                { token: "string"          , regex: "[\"][^\"][\"]" },
                { token: keywordMapper     , regex: "[a-zA-Z_][a-zA-Z0-9_]*\\b" },
                { token: "keyword.operator", regex: operators },
                { token: "paren.lparen"    , regex: "[[({]" },
                { token: "paren.rparen"    , regex: "[\\])}]" },
                { caseInsentitive: false, defaultToken: "invalid" }
            ]
        }
    };

    oop.inherits(KslHighlightRules, TextHighlightRules);

    exports.KslHighlightRules = KslHighlightRules;
});
