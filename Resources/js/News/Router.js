var News = News || {};
News.Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "*parent/:slug": "edit"
    }
});