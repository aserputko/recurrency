/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var RecurrenceModel = Backbone.Model.extend({
		defaults: {
			startDay: new Date(),
			endDay: '', // Final End Date. Depends on endOn or occurrences fields.
			endOn: '',
			endCheckboxType: 'after', // after|on
			occurrences: 1000,
			summary: ''
		},

		initialize: function () {
			this.on('invalid', this.logErrors, this);
		},

		sync: function () {
			return this;
		},

		logErrors: function (model, errors) {
			_.each(errors, function (error) {
				console.log(error.message);
			}, this);
		},

		validate: function (attrs) {
			this.errors = {};

			this.validatesEndDay(attrs);
			this.validatesOccurrences(attrs);

			return _.size(this.errors) > 0 ? this.errors: false;
		},

		validatesEndDay: function (attrs) {
			if (attrs.startDay > attrs.endDay) {
				this.errors.invalidEndDay = {
					message: 'End Date is Invalid'
				};
			}
		},

		validatesOccurrences: function (attrs) {
			if (attrs.occurrences > 999) {
				this.errors.invalidOccurrences = {
					message: 'Occurrences is Invalid'
				};
			}
		}

    });

    return RecurrenceModel;
});