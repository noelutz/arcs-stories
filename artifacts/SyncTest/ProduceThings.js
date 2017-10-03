/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

"use strict";

defineParticle(({DomParticle}) => {

  let template = `
<style>
  [edit] {
    margin: 25px;
  }
</style>
<div edit>
  <input name="name" type="text" id="name" size="30" value={{name}} on-change="_onNameChange"></input>
</div>
  `.trim();

  return class extends DomParticle {
    get template() {
      return template;
    }
    _getInitialState() {
      return {name: ''};
    }
    _render(props, state) {
      return {
        name: state.name,
      };
    }
    _onNameChange(e, state) {
      const Thing = this._views.get('things').entityClass;
      this._views.get('things').store(new Thing({name: e.data.value}));
      // Set the state to trigger render().
      this._setState({name: ''});
    }
  };
});
