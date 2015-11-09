var News = News || {};

News.Controller = function(options) {
    _.extend(this, options);
    this.$el = $(this.el);

    $.when(this.loadNews())
        .done(_.bind(function() {
            this.router = new News.Router();
            this.listenTo(this.router, "route:index", this.indexAction);
            this.listenTo(this.router, "route:edit", this.editAction);
            Backbone.history.start();
        }, this));
};
_.extend(News.Controller.prototype, Backbone.Events);
_.extend(News.Controller.prototype, {
    indexAction: function() {
        var view = new News.ListView({
            collection: this.news
        });
        this.setView(view);

    },
    editAction: function(parent, slug) {
        var page = this.news.get('/cms/pages/' + parent),
            model;
        if (!page) {
            this.indexAction();
            return;
        }
        model = page.getItem(slug);
        var view = new News.ItemView({
            page: page,
            model: model
        });
        this.listenTo(view, "save", function() {
            this.router.navigate("/", {trigger: true});
        });
        this.listenTo(view, "delete", function() {
            var url = model.url();
            $.ajax({
                url: url,
                method: "DELETE"
            });
            page.removeItem(model);
            this.router.navigate("/", {trigger: true});
        });
        this.setView(view);


    },
    loadNews: function() {
        var that = this;
        return $.getJSON(Routing.generate("concerto_cms_news_api"))
            .done(function(data) {
                that.news = new Collection.NewsLists(data);
            });

    },

    setView: function(view) {
        if (this.view) {
            this.stopListening(this.view);
            this.view.remove();
        }
        this.view = view;
        this.$el.html("").append(view.$el);
        view.render();
    }
});