// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

"use strict";

defineParticle(({DomParticle}) => {

  let template = `
<x-list items="{{things}}">
    <template>
    <div>
      <ul>
        <li value="{{id}}" on-click="_onClick">{{name}}</li>
      </ul>
    </div>
    </template>
</x-list>
    `.trim();

  return class extends DomParticle {
    get template() {
      return template;
    }
    _willReceiveProps(props) {
      if (props.things) {
        this._setState({things: props.things});
      }
    }
    _onClick(e, state) {
      this._views.get('things').remove(state.things[e.data.value]);
    }
    _render(props, state) {
      if (state.things) {
        return {
          things: state.things.map((thing, i) => {
            return { name: thing.name, id: i };
          })
        };
      }
    }
  };
});
