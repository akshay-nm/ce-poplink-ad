import { html, css, LitElement, property } from 'lit-element';

interface Ad {
  id: string;
  banner: string;
  bannerAlt: string;
  keyword: string;
}

export class CePoplinkAd extends LitElement {
  static styles = css`
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

  @property({ type: Object }) ad: Ad;

  @property({ type: String }) token;

  @property({ type: Number }) timeonscreen;

  @property({ type: Boolean }) visible = false;

  @property({ type: Boolean }) showonleft = false;

  _handleFocus() {
    this.visible = true;
  }

  _handleMouseOver() {
    this.visible = true;
  }

  constructor(ad: Ad, token: string, visible: boolean, showonleft: boolean) {
    super();

    this.ad = ad;
    this.visible = visible;
    this.showonleft = showonleft;
    this.timeonscreen = 0;
    this.token = token;

    setInterval(() => {
      this.timeonscreen += 1;
    }, 1000);
  }

  render() {
    return html`
      <span>
        <span
          class="keyword"
          @mouseover=${this._handleMouseOver}
          @focus=${this._handleFocus}
        >
          ${this.ad.keyword}
        </span>
        <span
          class="bannercontainer ${
            this.showonleft ? 'leftAlign' : 'rightAlign'
          }"
        >
            <a
              href=${`https://ads.poplink.in/r?t=${this.timeonscreen}&aid=${this.ad.id}&at="${this.token}"`}
            >
              <img
                class="${this.visible ? 'visible' : 'invisible'}"
                src=${this.ad.banner}
                alt=${this.ad.bannerAlt}
              />
            </a>
             </span>
          </span> </span
      ></span>
    `;
  }
}
