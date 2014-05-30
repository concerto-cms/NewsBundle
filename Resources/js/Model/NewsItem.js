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
    }
})