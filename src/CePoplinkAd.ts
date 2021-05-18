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

  @property({ type: Object }) ad: Ad;

  @property({ type: String }) token;

  @property({ type: Number }) timeonscreen;

  @property({ type: Boolean }) visible = false;

  @property({ type: Boolean }) showonleft = true;

  @property({ type: Boolean }) highlightkeywordindicator = false;

  @property({ type: Boolean }) highlightclosebutton = false;

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

  _handleClose() {
    this.visible = false;
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
    return html`
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
