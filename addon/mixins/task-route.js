import Ember from 'ember';
import { task, all } from 'ember-concurrency';

export default Ember.Mixin.create({
  // public
  afterModelTasks() {},

  // extend
  afterModel(tasksHash) {
    this._super(...arguments);
    this._afterModelTask.perform(tasksHash);
  },

  _afterModelTask: task(function* (tasksHash) {
    yield all(Object.values(tasksHash));
    this.afterModelTasks();
  }),
});
