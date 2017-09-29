// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

"use strict";

defineParticle(({ DomParticle }) => {

  let template = `
<div>
  <span>Show some people:</span>
  <x-list items="{{users}}">
    <template>
      <div>
        <span>{{name}}</span>:
        <div slotid="mouth" subid$="{{subId}}"></div>
        <div slotid="topofhead" subid$="{{subId}}"></div>
      </div>
    </template>
  </x-list>
</div>
    `.trim();

  return class extends DomParticle {
    get template() {
      return template;
    }
    _render(props, state) {
      if (props.participants) {
        return {
          users: props.participants.map(p => {
            return { subId: p.name, name: p.name };
          })
        };
      }
    }
  };
});
