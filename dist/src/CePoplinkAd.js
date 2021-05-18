import { __decorate } from "tslib";
import { html, css, LitElement, property, query } from 'lit-element';
export class CePoplinkAd extends LitElement {
    constructor(ad, token, visible) {
        super();
        this.visible = false;
        this.showonleft = true;
        this.highlightkeywordindicator = false;
        this.highlightclosebutton = false;
        this.keywordcontainerwidth = 0;
        this.keywordcontainerX = 0;
        this.ad = ad;
        this.visible = visible;
        this.timeonscreen = 0;
        this.token = token;
        setInterval(() => {
            this.timeonscreen += 1;
        }, 1000);
    }
    _handleFocus() {
        this.visible = true;
    }
    _handleMouseOver() {
        this.visible = true;
    }
    _handleClose() {
        this.visible = false;
    }
    _handleWindowResize() {
        const windowXCenter = window.innerWidth / 2;
        if (this.keywordcontainerX + this.keywordcontainerwidth < 250) {
            this.showonleft = true;
        }
        else if (this.keywordcontainerX + this.keywordcontainerwidth >
            windowXCenter)
            this.showonleft = true;
        else
            this.showonleft = false;
    }
    async firstUpdated() {
        var _a, _b, _c, _d;
        await new Promise(r => setTimeout(r, 0));
        const x = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.ad.id}`)) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().x;
        const width = (_d = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(`#${this.ad.id}`)) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect().width;
        this.keywordcontainerwidth = width || 0;
        this.keywordcontainerX = x || 0;
        window.addEventListener('resize', this._handleWindowResize.bind(this));
    }
    _handleKeywordIndicatorMouseEnter() {
        this.highlightkeywordindicator = true;
    }
    _handleKeywordIndicatorMouseLeave() {
        this.highlightkeywordindicator = false;
    }
    _handleCloseMouseEnter() {
        this.highlightclosebutton = true;
    }
    _handleCloseMouseLeave() {
        this.highlightclosebutton = false;
    }
    render() {
        return html `
      <span id="${this.ad.id}">
        <span
          class="keyword"
          @mouseover=${this._handleMouseOver}
          @focus=${this._handleFocus}
        >
          ${this.ad.keyword}
        </span>
        <span
          class="keywordindicator ${this.highlightkeywordindicator
            ? 'highlightkeywordindicator'
            : ''}"
          @mouseenter=${this._handleKeywordIndicatorMouseEnter}
          @mouseleave=${this._handleKeywordIndicatorMouseLeave}
        >
          <a href=${`https://poplink.in`} target="_blank">
            <img
              class="${this.visible ? 'visible' : 'invisible'}"
              src="https://poplink.in/static/media/logo.8d4c23d4.jpg"
              alt="Poplink Ads logo"
              width="20"
              height="20"
            />
          </a>
        </span>
        <span
          class="bannercontainer ${this.showonleft
            ? 'leftAlign'
            : 'rightAlign'}"
        >
          <a
            href=${`https://ads.poplink.in/r?t=${this.timeonscreen}&aid=${this.ad.id}&at="${this.token}"`}
            target="_blank"
          >
            <img
              class="${this.visible ? 'visible' : 'invisible'}"
              src=${this.ad.banner}
              alt=${this.ad.bannerAlt}
            />
          </a>
          <button
            class="closebutton ${this.visible ? 'visible' : 'invisible'} ${this
            .highlightclosebutton
            ? 'highlightclosebutton'
            : ''}"
            @mouseenter=${this._handleCloseMouseEnter}
            @mouseleave=${this._handleCloseMouseLeave}
            @click=${this._handleClose}
          >
            Close Ad
          </button>
        </span>
      </span>
    `;
    }
}
CePoplinkAd.styles = css `
    :host {
      display: inline-flex;
      flex-direction: column;
      position: relative;
      color: var(--ce-poplink-ad-text-color, #000);
    }
    .keyword {
      position: relative;
      display: inline;
      border: 1px dotted gray;
      padding-right: 1px;
      padding-left: 1px;
    }
    .keywordindicator {
      position: absolute;
      z-index: 10;
      top: -20px;
      left: 0;
      border-radius: 5px 5px 5px 5px;
      overflow: hidden;
      opacity: 0.3;
    }
    .highlightkeywordindicator {
      opacity: 1;
    }
    .closebutton {
      opacity: 0.2;
    }
    .highlightclosebutton {
      opacity: 1;
    }
    .bannercontainer {
      position: absolute;
      z-index: 10;
      top: 20px;
    }
    .rightAlign {
      right: 0;
    }
    .leftAlign {
      left: 0;
    }
    .visible {
      display: inline;
    }
    .invisible {
      display: none;
    }
  `;
__decorate([
    property({ type: Object })
], CePoplinkAd.prototype, "ad", void 0);
__decorate([
    property({ type: String })
], CePoplinkAd.prototype, "token", void 0);
__decorate([
    property({ type: Number })
], CePoplinkAd.prototype, "timeonscreen", void 0);
__decorate([
    property({ type: Boolean })
], CePoplinkAd.prototype, "visible", void 0);
__decorate([
    property({ type: Boolean })
], CePoplinkAd.prototype, "showonleft", void 0);
__decorate([
    property({ type: Boolean })
], CePoplinkAd.prototype, "highlightkeywordindicator", void 0);
__decorate([
    property({ type: Boolean })
], CePoplinkAd.prototype, "highlightclosebutton", void 0);
__decorate([
    property({ type: Number })
], CePoplinkAd.prototype, "keywordcontainerwidth", void 0);
__decorate([
    property({ type: Number })
], CePoplinkAd.prototype, "keywordcontainerX", void 0);
__decorate([
    query('#poplink-ad-keyword')
], CePoplinkAd.prototype, "_keyword", void 0);
//# sourceMappingURL=CePoplinkAd.js.map