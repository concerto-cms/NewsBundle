/**
 * Created by mathieu on 30/05/14.
 */
var Model = Model || {};

Model.NewsList = Backbone.Model.extend({
    initialize: function() {
    },
    getItems: function() {
        if (typeof this.newsItems === "undefined") {
            this.newsItems = new Collection.NewsItems(this.get("newsitems"));
            this.listenTo(this.newsItems, "change update", function() {
                this.set("newsitems", this.newsItems.toJSON());
            })
        }
        return this.newsItems;
    },
    addItem: function(model) {
        this.getItems().add(model);
    },
    getId: function() {
        return this.get('id').replace("/cms/pages/", "");
    },

    getItem: function(slug) {
        return this.getItems().findWhere({slug: slug});
    },
    removeItem: function(model) {
        var items = this.getItems();
        items.remove(model);
        this.set("newsitems", this.newsItems.toJSON());
    },
    getPlanned: function() {
        return this.getItems().where({planned: true});
    },
    getPublished: function() {
        return this.getItems().where({published: true});
    },
    getArchived: function() {
        return this.getItems().where({archived: true});
    }
});