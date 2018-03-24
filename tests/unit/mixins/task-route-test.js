import Ember from 'ember';
import TaskRouteMixin from 'ember-data-tasks/mixins/task-route';
import { module, test } from 'qunit';

module('Unit | Mixin | task route');

// Replace this with your real tests.
test('it works', function(assert) {
  let TaskRouteObject = Ember.Object.extend(TaskRouteMixin);
  let subject = TaskRouteObject.create();
  assert.ok(subject);
});
