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
  const names = ['Claire', 'Hans', 'Moritz', 'Fritz', 'Anton', 'Laura',
                 'Sonja', 'Reto', 'Greta', 'Jeanne', 'Michael'];
  
  const template = `
<style>
  [identity] {
    background-color: #dddddd;
  }
  [identity] input {
    color: #666666;
    font-size: 1.1em;
    font-family: inherit;
    margin: 15px 3px 15px 15px;
  }
</style>
<div identity>
  <input name="user" type="text" id="user" size="32" value={{user}} on-change="_onUserChange" />
</div>
  `.trim();

  return class extends DomParticle {
    get template() {
      return template;
    }
    _getInitialState() {
      return {user: names[Math.floor(Math.random() * names.length)]};
    }
    async setViews(views) {
      super.setViews(views);
      this.outputUser(this._state);
    }
    _render(props, state) {
      if (state.user) {
        return {
          user: state.user,
        };
      }
    }
    outputUser(state) {
      const Person = this._views.get('user').entityClass;
      this._views.get('user').set(new Person({name: state.user}));
    }
    _onUserChange(e, state) {
      state.user = e.data.value;
      this.outputUser(state);
    }
  };
});