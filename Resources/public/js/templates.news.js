window.JST = window.JST || {};
window.JST["news.item.html.twig"] = Twig.twig({ allowInlineIncludes: true, id: "news.item.html.twig", data: [{"type":"raw","value":"<div class=\"container clearfix\">\n    <h1 class=\"pull-left\">"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"model","match":["model"]},{"type":"Twig.expression.type.key.period","key":"get","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"title"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"<em>Untitled</em>"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"</h1>\n    <p class=\"text-right\">\n        <a href=\"#\" class=\"btn btn-info\"><i class=\"glyphicon glyphicon-chevron-left\"></i> Terug naar lijst</a>\n    </p>\n</div>\n<hr />\n<div class=\"container\">\n    <form>\n        "},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"model","match":["model"]},{"type":"Twig.expression.type.key.period","key":"has","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"id"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]},{"type":"Twig.expression.type.operator.unary","value":"not","precidence":3,"associativity":"rightToLeft","operator":"not"}],"output":[{"type":"raw","value":"        <legend>Category</legend>\n        <div class=\"form-group\">\n            <label class=\"hide\">News page</label>\n            <select class=\"form-control\" name=\"parent\">\n                "},{"type":"logic","token":{"type":"Twig.logic.type.for","key_var":null,"value_var":"category","expression":[{"type":"Twig.expression.type.variable","value":"categories","match":["categories"]},{"type":"Twig.expression.type.key.period","key":"toArray","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}],"output":[{"type":"raw","value":"                <option value=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"category","match":["category"]},{"type":"Twig.expression.type.key.period","key":"id"}]},{"type":"raw","value":"\">"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"category","match":["category"]},{"type":"Twig.expression.type.key.period","key":"getContent","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]},{"type":"Twig.expression.type.key.period","key":"get","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"title"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"</option>\n                "}]}},{"type":"raw","value":"            </select>\n        </div>\n        "}]}},{"type":"raw","value":"\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <fieldset>\n                    <legend>General</legend>\n                    <div class=\"form-group\">\n                        <label>Title</label>\n                        <input type=\"text\" class=\"form-control\" name=\"title\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Date</label>\n                        <input type=\"text\" class=\"form-control datepicker\" name=\"date\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Publication start</label>\n                        <input type=\"text\" class=\"form-control datepicker\" name=\"publishStart\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Publication end</label>\n                        <input type=\"text\" class=\"form-control datepicker\" name=\"publishStop\" />\n                    </div>\n                </fieldset>\n            </div>\n            <div class=\"col-sm-6\">\n                <fieldset>\n                    <div class=\"form-group\">\n                        <legend>Introduction</legend>\n                        <textarea name=\"introduction\" class=\"form-control\" id=\"news_introduction\"></textarea>\n                    </div>\n                </fieldset>\n            </div>\n        </div>\n        <fieldset>\n            <div class=\"form-group\">\n                <legend>Content</legend>\n                <textarea name=\"content\" class=\"form-control\" id=\"news_content\"></textarea>\n            </div>\n        </fieldset>\n    </form>\n\n    <button class=\"pull-right btn btn-lg btn-success save disabled\"><i class=\"glyphicon glyphicon-ok\"></i> Opslaan</button>\n</div>"}] });
window.JST["news.list.html.twig"] = Twig.twig({ allowInlineIncludes: true, id: "news.list.html.twig", data: [{"type":"logic","token":{"type":"Twig.logic.type.import","expression":"_self","contextName":"macros","stack":[{"type":"Twig.expression.type.variable","value":"_self","match":["_self"]}]}},{"type":"logic","token":{"type":"Twig.logic.type.macro","macroName":"newsitem","parameters":["items","categories"],"output":[{"type":"raw","value":"    <table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th>Date</th>\n            "},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"categories","match":["categories"]},{"type":"Twig.expression.type.key.period","key":"length"},{"type":"Twig.expression.type.number","value":1,"match":["1",null]},{"type":"Twig.expression.type.operator.binary","value":">","precidence":8,"associativity":"leftToRight","operator":">"}],"output":[{"type":"raw","value":"            <th>Category</th>\n            "}]}},{"type":"raw","value":"            <th>Title</th>\n        </tr>\n        </thead>\n        <tbody>\n        "},{"type":"logic","token":{"type":"Twig.logic.type.for","key_var":null,"value_var":"item","expression":[{"type":"Twig.expression.type.variable","value":"items","match":["items"]}],"output":[{"type":"raw","value":"            <tr>\n                <td style=\"width: 1px; white-space: nowrap;\">"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"item","match":["item"]},{"type":"Twig.expression.type.key.period","key":"get","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"date"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"</td>\n                "},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"categories","match":["categories"]},{"type":"Twig.expression.type.key.period","key":"length"},{"type":"Twig.expression.type.number","value":1,"match":["1",null]},{"type":"Twig.expression.type.operator.binary","value":">","precidence":8,"associativity":"leftToRight","operator":">"}],"output":[{"type":"raw","value":"                <td style=\"width: 1px; white-space: nowrap;\">"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"item","match":["item"]},{"type":"Twig.expression.type.key.period","key":"getCategory","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"</td>\n                "}]}},{"type":"raw","value":"                <td><a href=\"#"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"item","match":["item"]},{"type":"Twig.expression.type.key.period","key":"getId","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"\">"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"item","match":["item"]},{"type":"Twig.expression.type.key.period","key":"get","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"title"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]},{"type":"Twig.expression.type.filter","value":"default","match":["|default","default"],"params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"<em>Untitled news item</em>"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"</a></td>\n            </tr>\n        "}]}},{"type":"raw","value":"        </tbody>\n    </table>\n"}]}},{"type":"logic","token":{"type":"Twig.logic.type.for","key_var":null,"value_var":"page","expression":[{"type":"Twig.expression.type.variable","value":"collection","match":["collection"]},{"type":"Twig.expression.type.key.period","key":"toArray","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}],"output":[{"type":"raw","value":"    "},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"loop","match":["loop"]},{"type":"Twig.expression.type.key.period","key":"first"},{"type":"Twig.expression.type.operator.unary","value":"not","precidence":3,"associativity":"rightToLeft","operator":"not"}],"output":[{"type":"raw","value":"<hr />"}]}},{"type":"raw","value":"    <div class=\"container clearfix\">\n        <h1>"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"page","match":["page"]},{"type":"Twig.expression.type.key.period","key":"get","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"title"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"  <a href=\"javascript:void(0)\" data-page=\""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"page","match":["page"]},{"type":"Twig.expression.type.key.period","key":"id"}]},{"type":"raw","value":"\" class=\"btn btn-info new-item\"><i class=\"glyphicon glyphicon-plus\"></i> New item...</a></h1>\n    </div>\n    <div class=\"container\">\n        "},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"planned","expression":[{"type":"Twig.expression.type.variable","value":"page","match":["page"]},{"type":"Twig.expression.type.key.period","key":"getPlanned","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"        "},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":true,"params":[{"type":"Twig.expression.type.variable","value":"planned","match":["planned"]},{"type":"Twig.expression.type.filter","value":"length","match":["|length","length"]},{"type":"Twig.expression.type.number","value":0,"match":["0",null]},{"type":"Twig.expression.type.operator.binary","value":">","precidence":8,"associativity":"leftToRight","operator":">"}]}],"output":[{"type":"raw","value":"            <h4>Planned items</h4>\n            "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"macros","match":["macros"]},{"type":"Twig.expression.type.key.period","key":"newsitem","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.variable","value":"planned","match":["planned"]},{"type":"Twig.expression.type.comma"},{"type":"Twig.expression.type.variable","value":"categories","match":["categories"]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"\n        "}]}},{"type":"raw","value":"        "},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"published","expression":[{"type":"Twig.expression.type.variable","value":"page","match":["page"]},{"type":"Twig.expression.type.key.period","key":"getPublished","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"\n        <h4>Published items</h4>\n        "},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"published","match":["published"]},{"type":"Twig.expression.type.filter","value":"length","match":["|length","length"]},{"type":"Twig.expression.type.number","value":0,"match":["0",null]},{"type":"Twig.expression.type.operator.binary","value":">","precidence":8,"associativity":"leftToRight","operator":">"}],"output":[{"type":"raw","value":"            "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"macros","match":["macros"]},{"type":"Twig.expression.type.key.period","key":"newsitem","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.variable","value":"published","match":["published"]},{"type":"Twig.expression.type.comma"},{"type":"Twig.expression.type.variable","value":"categories","match":["categories"]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"\n        "}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"            <div class=\"alert alert-danger\">\n                No news items currently published.\n            </div>\n        "}]}},{"type":"raw","value":"\n        "},{"type":"logic","token":{"type":"Twig.logic.type.set","key":"archived","expression":[{"type":"Twig.expression.type.variable","value":"page","match":["page"]},{"type":"Twig.expression.type.key.period","key":"getArchived","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]}},{"type":"raw","value":"        "},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":true,"params":[{"type":"Twig.expression.type.variable","value":"archived","match":["archived"]},{"type":"Twig.expression.type.filter","value":"length","match":["|length","length"]},{"type":"Twig.expression.type.number","value":0,"match":["0",null]},{"type":"Twig.expression.type.operator.binary","value":">","precidence":8,"associativity":"leftToRight","operator":">"}]}],"output":[{"type":"raw","value":"            <h4>Archived items</h4>\n            "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"macros","match":["macros"]},{"type":"Twig.expression.type.key.period","key":"newsitem","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.variable","value":"archived","match":["archived"]},{"type":"Twig.expression.type.comma"},{"type":"Twig.expression.type.variable","value":"categories","match":["categories"]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"\n        "}]}},{"type":"raw","value":"\n    </div>\n"}]}}] });
window.JST["news.newItemDialog.html.twig"] = Twig.twig({ allowInlineIncludes: true, id: "news.newItemDialog.html.twig", data: [{"type":"logic","token":{"type":"Twig.logic.type.extends","stack":[{"type":"Twig.expression.type.string","value":"layout-modal.html.twig"}]}},{"type":"logic","token":{"type":"Twig.logic.type.block","block":"title","output":[{"type":"raw","value":"Add an item to category \""},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"page","match":["page"]},{"type":"Twig.expression.type.key.period","key":"get","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.string","value":"title"},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"\""}]}},{"type":"logic","token":{"type":"Twig.logic.type.block","block":"body","output":[{"type":"raw","value":"    <div class=\"form-group\">\n        <label for=\"frmNewItemDialog_title\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"frmNewItemDialog_title\" placeholder=\"Page title\" name=\"title\" required />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"frmNewItemDialog_slug\">Url</label>\n\n        <div class=\"input-group\">\n            <span class=\"input-group-addon\" id=\"frmNewItemDialog_slug_addon\">"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"page","match":["page"]},{"type":"Twig.expression.type.key.period","key":"getId","params":[{"type":"Twig.expression.type.parameter.start","value":"(","match":["("]},{"type":"Twig.expression.type.parameter.end","value":")","match":[")"],"expression":false}]}]},{"type":"raw","value":"/</span>\n            <input type=\"text\" name=\"slug\" class=\"form-control\" placeholder=\"Slug\" aria-describedby=\"frmNewItemDialog_slug_addon\">\n        </div>\n    </div>\n"}]}},{"type":"logic","token":{"type":"Twig.logic.type.block","block":"footer","output":[{"type":"raw","value":"    <button type=\"submit\" class=\"btn btn-lg btn-success\">Create</button>\n"}]}}] });
