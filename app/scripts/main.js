/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        timepicker: '../bower_components/jquery/jquery.timepicker',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'jquery',
    'timepicker',
    'backbone',
    'views/recurrence-view'
], function ($, timepicker, Backbone, RecurrenceView) {
    var recurrenceView = new RecurrenceView();
    $('.container').append(recurrenceView.render().el);
    Backbone.history.start();
});