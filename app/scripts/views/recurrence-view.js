/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/recurrence-model'
], function ($, _, Backbone, JST, RecurrenceModel) {
    'use strict';

    var RecurrenceView = Backbone.View.extend({

		className: 'row',

		template: JST['app/scripts/templates/recurrence.ejs'],

        initialize: function () {
            this.model = new RecurrenceModel();
            window.model = this.model;
        },

		render: function () {
			this.$el.html(this.template());
			return this;
		}
    });

    return RecurrenceView;
});