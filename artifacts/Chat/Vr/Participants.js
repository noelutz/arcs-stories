// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

"use strict";

defineParticle(({DomParticle}) => {
  return class extends DomParticle {
    get template() {
      return '';
    }
    _getInitialState() {
      return {participants: new Set()};
    }
    _willReceiveProps(props) {
      if (props.chats && props.participants) {
        let participants = new Set(this._state.participants);
        let changes = new Set();
        props.chats.forEach(m => {
          if (!participants.has(m.name)) {
            changes.add(m.name);
          }
        });
        if (changes.size) {
          this._setState({changes: changes});
        }
      }
    }
    _render(props, state) {
      if (state.changes) {
        let changes = state.changes;
        state.participants = new Set([...state.participants, ...state.changes]);
        state.changes = undefined;
        let Person = this._views.get('participants').entityClass;
        changes.forEach(name => {
          this._views.get('participants').store(new Person({name}));
        });
      }
    }
  };
});
