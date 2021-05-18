import { html, css, LitElement, property, query } from 'lit-element';

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

  @property({ type: Boolean }) showonleft = true;

  @property({ type: Number }) keywordcontainerwidth = 0;

  @property({ type: Number }) keywordcontainerX = 0;

  @query('#poplink-ad-keyword')
  _keyword: any;

  _handleFocus() {
    this.visible = true;
  }

  _handleMouseOver() {
    this.visible = true;
  }

  _handleWindowResize() {
    const windowXCenter = window.innerWidth / 2;
    if (this.keywordcontainerX + this.keywordcontainerwidth < 250) {
      this.showonleft = true;
    } else if (
      this.keywordcontainerX + this.keywordcontainerwidth >
      windowXCenter
    )
      this.showonleft = true;
    else this.showonleft = false;
  }

  async firstUpdated() {
    await new Promise(r => setTimeout(r, 0));
    const x = this.shadowRoot
      ?.querySelector(`#${this.ad.id}`)
      ?.getBoundingClientRect().x;
    const width = this.shadowRoot
      ?.querySelector(`#${this.ad.id}`)
      ?.getBoundingClientRect().width;

    this.keywordcontainerwidth = width || 0;
    this.keywordcontainerX = x || 0;

    window.addEventListener('resize', this._handleWindowResize.bind(this));
  }

  constructor(ad: Ad, token: string, visible: boolean) {
    super();

    this.ad = ad;
    this.visible = visible;
    this.timeonscreen = 0;
    this.token = token;

    setInterval(() => {
      this.timeonscreen += 1;
    }, 1000);
  }

  render() {
    return html`
      <span
        id="${this.ad.id}"
      >
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
