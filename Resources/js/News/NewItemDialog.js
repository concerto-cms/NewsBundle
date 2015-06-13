var News = News || {};
News.NewItemDialog = Backbone.View.extend({
    className: "modal fade",
    initialize: function(options) {
        _.extend(this, options);
        this.$el.appendTo(document.body);
        this.listenTo(this.model, "change:type", this.setActiveType);
    },
    render: function() {
        var content = window.JST["news.newItemDialog.html.twig"].render(this);
        this.$el.html(content);
        this.setActiveType();
        this.stickit();
        return this;
    },
    bindings: {
        '[name=slug]': 'slug',
        '[name=title]': 'title',
        '[name=parent]': 'parent'
    },
    events: {
        'hidden.bs.modal': 'onClose',
        'submit form': 'onSubmit'
    },
    open: function() {
        this.$el.modal("show");
    },
    close: function() {
        this.$el.modal("hide");
    },
    onClose: function() {
        this.trigger("close");
    },
    onSubmit: function(e) {
        e.preventDefault();
        this.save();
    },
    save: function() {
        var that = this,
            model = this.model.toJSON(),
            type = model.type,
            parent = model.parent;
        delete model.type;
        delete model.parent;

        window.dialogModel = model;
        $.ajax({
            type: 'POST',
            url: Routing.generate('concerto_cms_core_pages_rest_get', {path: parent}),
            data: JSON.stringify ({
                type: type,
                page: model
            }),
            contentType: "application/json",
            dataType: 'json'
        })
        .done(function(data) {
            that.model.set(data);
            that.trigger("save", that.model);
        });


    },
    setActiveType: function() {
        var type = this.model.get('type'),
            el;

        try {
            el = this.$(".page-types [data-type=" + type + "]");
            el.addClass("active").siblings().removeClass("active");
        } catch (e) {
            this.$(".page-types a.active").removeClass("active");
        }
    }
});