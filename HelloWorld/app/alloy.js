// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var collectionProtoType = Backbone.Collection.extend({
	comparator:function(model){
		return model.get('ProductID');	
	}
});


var products = new collectionProtoType([
	{ProductID:1,ProductName:"Chai",UnitPrice:18},
	{ProductID:2,ProductName:"Chang",UnitPrice:21},
	{ProductID:3,ProductName:"Aniseed Syrup",UnitPrice:17},
	{ProductID:4,ProductName:"Chef Anton's Cajun Seasoning",UnitPrice:22},
	{ProductID:5,ProductName:"Grandma's Boysenberry Spread",UnitPrice:7.5},
	{ProductID:6,ProductName:"Northwoods Cranberry Sauc",UnitPrice:2.3},
	{ProductID:7,ProductName:"Queso Cabrales	",UnitPrice:15},
	{ProductID:8,ProductName:"Genen Shouyu",UnitPrice:45},
	{ProductID:9,ProductName:"Alice Mutton",UnitPrice:12},
	{ProductID:10,ProductName:"Tunnbröd",UnitPrice:6},
]);

Alloy.Collections.Products = products;