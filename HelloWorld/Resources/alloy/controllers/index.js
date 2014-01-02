function Controller() {
    function __alloyId6() {
        __alloyId6.opts || {};
        var models = __alloyId5.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId4 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId3.__transform["ProductName"] ? __alloyId3.__transform["ProductName"] : __alloyId3.get("ProductName"),
                borderWidth: "0"
            });
            rows.push(__alloyId4);
        }
        $.__views.__alloyId1.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        scrollable: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Ti.UI.createTableView({
        height: "auto",
        headerTitle: "Products List",
        backgroundColor: "#123",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    var __alloyId5 = Alloy.Collections["Products"] || Products;
    __alloyId5.on("fetch destroy change add remove reset", __alloyId6);
    exports.destroy = function() {
        __alloyId5.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    $.index.open();
    var productList = Alloy.Collections.Products;
    productList.trigger("change");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;