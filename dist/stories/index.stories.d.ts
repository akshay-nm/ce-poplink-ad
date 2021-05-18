import { TemplateResult } from 'lit-html';
import '../ce-poplink-ad.js';
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        ad: {
            control: string;
        };
        token: {
            control: string;
        };
        visible: {
            control: string;
        };
        showonleft: {
            control: string;
        };
    };
};
export default _default;
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
    showonleft?: boolean;
}
export declare const Regular: Story<ArgTypes>;
