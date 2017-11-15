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
        <li><span>{{name}}</span>&nbsp;<span>{{separator}}</span>&nbsp;<span>{{owner}}</span></li>
      </ul>
    </div>
    </template>
</x-list>
    `.trim();

  return class extends DomParticle {
    get template() {
      return template;
    }
    _render(props, state) {
      if (props.things) {
        return {
          things: props.things.map(thing => {
            return { name: thing.name, separator: thing.owner ? '-' : '', owner: thing.owner };
          })
        };
      }
    }
  };
});
