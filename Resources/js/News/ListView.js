var News = News || {};

News.ListView = Backbone.View.extend({
    initialize: function(options) {
        _.extend(this, options);
        this.render();
    },

    render: function() {
        this.el.innerHTML = window.JST["news.list.html.twig"].render(this);
    },
    events: {
        "click .new-item": 'onNewItemClick'
    },
    onNewItemClick: function(e) {
        var $el = $(e.currentTarget),
            pageId = $el.data("page"),
            page = this.collection.get(pageId),
            dialog, model,
            that = this;
        model = new Model.Page({
            type: 'newsitem',
            parent: page.getId()
        });
        dialog = new News.NewItemDialog({
            model: model,
            page: page
        });
        this.listenTo(dialog, "close", function() {
            this.stopListening(dialog);
            dialog.remove();
        });
        this.listenTo(dialog, "save", function(model) {
            page.addItem(model);
            that.render();
            dialog.close();
        });
        dialog.render().open();


    }



});