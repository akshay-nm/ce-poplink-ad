import { html, fixture, expect } from '@open-wc/testing';
import '../ce-poplink-ad.js';
describe('CePoplinkAd', () => {
    it('has a default title "Hey there" and counter 5', async () => {
        const el = await fixture(html `<ce-poplink-ad
        ad="${JSON.stringify({
            id: 'ASYTYEAMJSHD268AHSD',
            banner: 'https://ads.poplink.in/a/b1.png',
            bannerAlt: 'Poplink ads banner',
            keyword: 'some keyword',
        })}"
        token="SOME_JWT"
      ></ce-poplink-ad>`);
        expect(el.ad.id).to.equal('ASYTYEAMJSHD268AHSD');
        expect(el.ad.banner).to.equal('https://ads.poplink.in/a/b1.png');
        expect(el.ad.bannerAlt).to.equal('Poplink ads banner');
        expect(el.ad.keyword).to.equal('some keyword');
        expect(el.token).to.equal('SOME_JWT');
    });
    /*
    it('increases the counter on button click', async () => {
      const el = await fixture<CePoplinkAd>(html`<ce-poplink-ad></ce-poplink-ad>`);
      el.shadowRoot!.querySelector('button')!.click();
  
      expect(el.counter).to.equal(6);
  
    });
  
    it('can override the title via attribute', async () => {
      const el = await fixture<CePoplinkAd>(html`<ce-poplink-ad title="attribute title"></ce-poplink-ad>`);
  
      expect(el.title).to.equal('attribute title');
    });
  
    it('passes the a11y audit', async () => {
      const el = await fixture<CePoplinkAd>(html`<ce-poplink-ad></ce-poplink-ad>`);
  
      await expect(el).shadowDom.to.be.accessible();
    });
    */
});
//# sourceMappingURL=ce-poplink-ad.test.js.map