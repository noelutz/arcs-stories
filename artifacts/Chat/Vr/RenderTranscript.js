// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

"use strict";

defineParticle(({DomParticle}) => {

  let templates = {
    mustache: ` <a-image src="{{message}}" id="{{name}}"></a-image>`.trim(),
    chat: `<a-text id={{name}} value={{message}}></a-text>`.trim(),
  };

  return class extends DomParticle {
    get template() {
      return templates[this.mode];
    }
    _getInitialState() {
      return {
        latest: new Map()
      };
    }
    get mode() {
      if (this.config.slotNames.find(m => m == 'mouth')) {
        return 'mustache';
      } else if (this.config.slotNames.find(m => m == 'topofhead')) {
        return 'chat';
      }
    }
    _willReceiveProps(props) {
      if (props.me && props.participants && props.participants.length && props.chats && props.chats.length) {
        let latest = new Map();
        props.chats.forEach(c => {
          if ((this.mode == 'mustache' && c.type == 'mustache') ||
              (this.mode == 'chat' && !c.type)) {
            latest.set(c.name, c.content);
          }
        });
        this._setState({latest});
      }
    }
    _render(props, state) {
      if (state.latest) {
        return {
          items: [...state.latest.entries()].map(([name, content]) => {
            return { subId: name, name: name, message: content };
          })
        };
      }
    }
  };
});
