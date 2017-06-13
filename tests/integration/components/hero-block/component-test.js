import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hero-block', 'Integration | Component | hero block', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hero-block}}`);

  assert.equal(this.$().text().trim().replace(/\s/g, '').substring(0, 50), 'Cancersucks.Joinus,andtherestoftheEmbercommunityin');
});
