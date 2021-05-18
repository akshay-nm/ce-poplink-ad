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
    keyword {
      position: relative;
      display: inline-block;
    }
    bannercontainer {
      position: absolute;
      z-index: 10;
    }
    visible {
      display: block;
    }
    invisible {
      display: none;
    }
  `;

  @property({ type: Object }) ad: Ad;

  @property({ type: String }) token;

  @property({ type: Number }) timeOnScreen = 0;

  @property({ type: Boolean }) visible;

  constructor(ad: Ad, token: string, visible: boolean) {
    super();

    this.ad = ad;
    this.visible = visible;
    this.timeOnScreen = 0;
    this.token = token;
    setInterval(() => {
      this.timeOnScreen += 1;
    }, 1000);
  }

  render() {
    return html`
      <span>
        <span class="keyword"> ${this.ad.keyword} </span>
        <span class="bannercontainer">
          <a
            href=${`https://ads.poplink.in/r?t=${this.timeOnScreen}&aid=${this.ad.id}&at="${this.token}"`}
          >
            <img
              class="banner ${this.visible ? 'visible' : 'invisible'}"
              src=${this.ad.banner}
              alt=${this.ad.bannerAlt}
            />
          </a>
        </span>
      </span>
    `;
  }
}
