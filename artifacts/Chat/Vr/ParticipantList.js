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
  <x-list items="{{users}}">
    <template>
      <a-box color="yellow" depth="0.5" height="0.5" width="0.5" position="0 0.75 0">
        <a-entity slotid="mouth" subid$="{{subId}}" position="0 0.5 0"></a-entity>
        <a-entity slotid="topofhead" subid$="{{subId}}" position="0 0.5 0"></a-entity>
      </a-box>
    </template>
  </x-list>
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
