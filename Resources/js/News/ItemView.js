var News = News || {};

News.ItemView = Backbone.View.extend({
    initialize: function(options) {
        var that = this;
        _.extend(this, options);
        this.original_model = options.model;
        this.model = options.model.clone();

        this.listenTo(this.original_model, "change:id", function() {
            this.collection.add(this.original_model);
            this.model = this.original_model.clone();
            /*
            $.growl({
                title: 'Het nieuwsitem is toegevoegd',
                icon: 'glyphicon glyphicon-saved'
            },{ type: 'success' });
            */
        });
        this.listenTo(this.original_model, "sync", this.render);

        this.render();
        this.listenToOnce(this.model, "change", this.onChange);
    },

    bindings: {
        '#news_content':        'content',
        '#news_introduction':   'introduction',
        '[name=date]':          {
            observe: 'date'
        },
        '[name=publishStart]':  'publishStart',
        '[name=publishStop]':   'publishStop',
        '[name=title]':         'title'
    },

    showImage: function() {
        var container = this.$(".img-container"),
            img = $("<img />"),
            url;

        container.html("");
        if (this.model.has("image")) {
            url = Routing.generate('concerto_cms_news.thumbnail', {
                path: this.model.get("image")
            });
            img.attr("src", url);
            container.append(img);
        }
    },

    render: function() {
        var editor1, editor2,
            that = this;
        this.el.innerHTML = window.JST["news.item.html.twig"].render(this);

        setTimeout(_.bind(function() {
            editor1 = this.$("[name=introduction]").ckeditor({
                customConfig: ''
            }).data("ckeditorInstance");
            editor1.on( 'change', _.bind(function(e) {
                this.$("[name=introduction]").trigger("change");
            }, this));
            editor2 = this.$("[name=content]").ckeditor({
                customConfig: ''
            }).data("ckeditorInstance");
            editor2.on( 'change', _.bind(function(e) {
                this.$("[name=content]").trigger("change");
            }, this));

        }, this), 200);



        this.stickit();
        this.$("input.datepicker").datepicker({
            format: "dd-mm-yyyy"
        });
        this.showImage();
        $('#fileupload').fileupload({
            url: Routing.generate('concerto_cms_news_api_upload'),
            dataType: 'json',
            formData: {
                id: this.model.getId()
            },
            done: function (e, data) {
                that.model.set("image", data.result.image);
                that.showImage();
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                );
            }
        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
    },
    events: {
        "click button.save": "save",
        "click button.delete": "delete"
    },
    delete: function() {
        if (window.confirm("Are you sure?")) {
            this.trigger("delete");
        }
    },
    onChange: function() {
        this.$("button.save").removeAttr("disabled").removeClass("disabled");

    },
    save: function() {
        var that = this;
        this.original_model.set(this.model.attributes);
        this.original_model.save().done(function() {
            that.trigger("save");
        });
    }
});