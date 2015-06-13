/**
 * Created by mathieu on 30/05/14.
 */
var Model = Model || {};

Model.NewsList = Backbone.Model.extend({
    initialize: function() {
    },
    getItems: function() {
        return new Collection.NewsItems(this.get("newsitems"));
    },
    addItem: function(model) {
        var items = this.get("newsitems") || [];
        items.push(model);
        this.set("newsitems", items);
    },
    getId: function() {
        return this.get('id').replace("/cms/pages/", "");
    },

    getItem: function(slug) {
        return this.getItems().findWhere({slug: slug});
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