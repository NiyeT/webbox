import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';

import "@polymer/iron-pages/iron-pages.js";
import "./home/html/app-home.js";
import './global/images/my-icons.js';
import jsDOM from "/libraries/jsDOM/jsDOM.js";

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true)

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath)

class MyApp extends PolymerElement{

  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          display: block;
          height:100%;
          width:100%;
        }
        .fill{
          height:100%;
          width:100%;
        }
        .centers{
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .vcenters{
          display:flex;
          align-items:center;
        }
        #main-frame{
          background:pink;
        }
      </style>

      <!--
      NOTE: DON'T USE RELATIVE SIZES (e.g. height:100%) ON PAGES THAT USE INPUT TAGS
      -->

      <iron-pages class="fill" selected="{{page}}" attr-for-selected="name">
        <app-home name="home"></app-home>
      </iron-pages>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        value:"home",
        reflectToAttribute: true,
        observer: 'pageChanged'
      }
    }
  }

  static get observers() {
    return [
      'pageChanged(this.page)'
    ];
  }

  pageChanged(page){
    console.log('page changed:',this.page);
  }

  ready(){
    super.ready();
    window.jsDOM=jsDOM;
    window.Page=this.page;
  }
}

window.customElements.define('my-app', MyApp);
