import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('photo-feed', 'Integration | Component | photo feed', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{photo-feed}}`);

  assert.equal(this.$().text().trim().replace(/\s/g, '').substring(0, 50), '');
});
