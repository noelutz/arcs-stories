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
  [compose] {
    display: flex;
    position: relative;
  }
  [compose] input {
    flex: 1;
    border: 0;
    border-radius: 5px;
    padding: 6px;
    padding-right: 32px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    color: #666666;
    font-size: 1.1em;
    font-family: inherit;
    margin: 15px;
    -webkit-appearance: none;
    outline: none;
  }
  [compose] .send-icon {
    position: absolute;
    top: 20px;
    right: 18px;
  }
  [compose] button {
    margin: 15px 15px 15px 3px;
    height: 25px;
  }
</style>
<div compose>
  <input name="msg" type="text" id="msg" size="30" value={{msg}} on-change="_onMessageChange" />
  <i class="send-icon material-icons">send</i>
</div>
  `.trim();

  return class Compose extends DomParticle {
    get template() {
      return template;
    }
    _getInitialState() {
      return {message: ''};
    }
    _willReceiveProps(props) {
      if (props.me && props.me.name) {
        this._setState({
          me: props.me.name,
          chats: props.chats,
        });
      }
    }
    _render(props, state) {
      if (state.chats) {
        return {
          msg: state.message,
        };
      }
    }
    _onClear(e, state) {
      this._views.get('chats').toList().then(data => {
        data.forEach((e) => {
          // TODO: implement remove.
          // this._views.get('chats').remove(e.id);
        });
      });
    }
    _onMessageChange(e, state) {
      state.message = e.data.value;
      const Chat = this._views.get('chats').entityClass;
      this._views.get('chats').store(new Chat({name: state.me, content: state.message}));
      state.message = '';
    }
  };
});
