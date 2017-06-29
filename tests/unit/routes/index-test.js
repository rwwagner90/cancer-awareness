import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
  needs: ['service:headData']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
