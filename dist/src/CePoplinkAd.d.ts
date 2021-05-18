import { LitElement } from 'lit-element';
interface Ad {
    id: string;
    banner: string;
    bannerAlt: string;
    keyword: string;
}
export declare class CePoplinkAd extends LitElement {
    static styles: import("lit-element").CSSResult;
    ad: Ad;
    token: string;
    timeonscreen: number;
    visible: boolean;
    showonleft: boolean;
    highlightkeywordindicator: boolean;
    highlightclosebutton: boolean;
    keywordcontainerwidth: number;
    keywordcontainerX: number;
    _keyword: any;
    _handleFocus(): void;
    _handleMouseOver(): void;
    _handleClose(): void;
    _handleWindowResize(): void;
    firstUpdated(): Promise<void>;
    constructor(ad: Ad, token: string, visible: boolean);
    _handleKeywordIndicatorMouseEnter(): void;
    _handleKeywordIndicatorMouseLeave(): void;
    _handleCloseMouseEnter(): void;
    _handleCloseMouseLeave(): void;
    render(): import("lit-element").TemplateResult;
}
export {};
