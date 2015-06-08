News = News || {};
News.Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "*path": "edit"
    }
});