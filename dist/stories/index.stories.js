import { html } from 'lit-html';
import '../ce-poplink-ad.js';
export default {
    title: 'CePoplinkAd',
    component: 'ce-poplink-ad',
    argTypes: {
        ad: { control: 'object' },
        token: { control: 'text' },
        visible: { control: 'boolean' },
        showonleft: { control: 'boolean' },
    },
};
const Template = ({ ad = {
    id: 'AJSDGHKA',
    banner: 'https://via.placeholder.com/250x150',
    bannerAlt: 'Poplink Ad',
    keyword: 'some keyword',
}, token = 'SOME_TOKEN', visible = false, showonleft = false, }) => html `
  Some textSome textSome textSome textSome textSome textSome textSome textSome
  textSome textSome textSome textSome textSome textSome textSome textSome
  textSome textSome textSome textSome textSome textSome textSome text
  <ce-poplink-ad
    .ad=${ad}
    .token=${token}
    .visible=${visible}
    .showonleft=${showonleft}
  >
  </ce-poplink-ad>
  Some More TextSome More TextSome More TextSome More TextSome More TextSome
  More TextSome More TextSome More TextSome More TextSome More Text
`;
export const Regular = Template.bind({});
/*
export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
*/
//# sourceMappingURL=index.stories.js.map