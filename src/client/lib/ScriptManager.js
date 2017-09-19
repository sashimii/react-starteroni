let self;

export default class ScriptManager {
  constructor() {
    if (!self) {
      self = this;
      this._scripts = new Set();
    }
    return self;
  }

  addScriptUrl(script) {
    if (!this._scripts.has(script)) {
      this._scripts.add(script);
      if (process.env.IS_BROWSER) {
        const scriptEl = document.createElement('script');
        scriptEl.src = script;
        const firstScriptEl = document.getElementsByTagName('script')[0];
        firstScriptEl.parentNode.insertBefore(scriptEl, firstScriptEl);
      }
    }
  }

  replaceScriptUrl(script) {
    if (this._scripts.has(script)) {
      this._scripts.delete(script);

      if (process.env.IS_BROWSER) {
        //remove old script tag
        let scripttags = document.getElementsByTagName('script');
        for (var i = scripttags.length - 1; i >= 0; i--) {
          if (
            scripttags[i].hasAttribute('src') &&
            scripttags[i].getAttribute('src').indexOf(script) !== -1
          ) {
            scripttags[i].parentNode.removeChild(scripttags[i]);
            break;
          }
        }
      }
    }
    this.addScriptUrl(script);
  }
}
