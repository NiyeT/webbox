import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `app-home`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AppHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height:100%;
          width:100%;
          overflow:scroll;
        }
        .centers{
          display:flex;align-items:center;justify-content:center;
        }
        .vcenters{
          display:flex;
          align-items:center;
        }
        input:focus{
          outline-offset:0px;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'app-home',
      },
    };
  }
}

window.customElements.define('app-home', AppHome);
