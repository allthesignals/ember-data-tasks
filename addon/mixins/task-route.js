import Ember from 'ember';
import { task, all, waitForProperty } from 'ember-concurrency';

export default Ember.Mixin.create({
  // public
  afterModelTasks() {},

  // extend
  afterModel(tasksHash) {
    this._super(...arguments);
    this._afterModelTask.perform(tasksHash);
  },

  _afterModelTask: task(function* (tasksHash) {
    const tasks = Object.values(tasksHash);
    yield waitForProperty(
      all(tasks), 'state', 'finished'
    );

    this.afterModelTasks();
  }),
});
