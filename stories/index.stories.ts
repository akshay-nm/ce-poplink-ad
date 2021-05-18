import { html, TemplateResult } from 'lit-html';
import '../ce-poplink-ad.js';

export default {
  title: 'CePoplinkAd',
  component: 'ce-poplink-ad',
  argTypes: {
    ad: { control: 'object' },
    token: { control: 'text' },
    visible: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface Ad {
  id: string;
  banner: string;
  bannerAlt: string;
  keyword: string;
}

interface ArgTypes {
  ad?: Ad;
  token?: string;
  visible?: boolean;
}

const Template: Story<ArgTypes> = ({
  ad = {
    id: 'AJSDGHKA',
    banner: 'https://placeholder.com/150',
    bannerAlt: 'Poplink Ad',
    keyword: 'some keyword',
  },
  token = 'SOME_TOKEN',
  visible = false,
}: ArgTypes) => html`
  <ce-poplink-ad .ad=${ad} .token=${token} .visible=${visible}> </ce-poplink-ad>
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
