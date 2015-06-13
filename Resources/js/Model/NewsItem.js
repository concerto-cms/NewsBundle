/**
 * Created by mathieu on 30/05/14.
 */
var Model = Model || {};

Model.NewsItem = Backbone.Model.extend({
    initialize: function() {
        this.on("sync", function() {
            $.growl({
                title: 'De pagina is opgeslagen',
                icon: 'glyphicon glyphicon-saved'
            },{ type: 'success' });
        })
    },
    getCategory: function() {
        if (typeof this.collection !== "undefined" && typeof this.collection.categories !== "undefined") {
            return this.collection.categories.get(this.get('category')).get('title')
        }
    },
    getId: function() {
        return this.get('id').replace("/cms/pages/", "");
    },
    set: function(attrs, options) {
        if (typeof attrs == "object" && attrs.id) {
            arguments[0].id = attrs.id.replace("/cms/pages/", "");
        }
        Backbone.Model.prototype.set.apply(this, arguments);
    },

    url: function() {
        return Routing.generate('concerto_cms_core_pages_rest_get', {path: this.id});
    }

});