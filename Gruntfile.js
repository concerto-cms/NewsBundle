/*global module:false*/
var path = require('path');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        folders: {
            target: 'Resources/public',
            src: 'Resources'
        },

        twig: {
            options: {
                amd_wrapper: false,
                each_template: '{{ variable }}["{{ filepath }}"] = Twig.twig({ allowInlineIncludes: true, id: "{{ filepath }}", data: {{ compiled }} });',
                template_key: path.basename
            },
            admin: {
                files: {
                    '<%= folders.target%>/js/templates.news.js' : [
                        '<%= folders.src %>/twigjs/*.twig'
                    ]
                }
            }
        },
        watch: {
            twig: {
                files: '<%= folders.src %>/twigjs/**/*.twig',
                tasks: ['twig:admin']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-twig');

    // Build & Deploy
    grunt.registerTask('build', ['twig']);
    grunt.registerTask('default', ['twig', 'watch']);
};