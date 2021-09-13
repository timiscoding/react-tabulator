"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var createCellEl = function () {
    var el = document.createElement('div');
    el.style.height = '100%';
    return el;
};
// example: { title: 'Pets', field: 'pets', formatter: MultiValueFormatter, formatterParams: { style: 'PILL' } }
// default style: comma separated plain text
// other styles: PILL
function default_1(cell, formatterParams, onRendered) {
    var style = formatterParams.style || ''; // comma separated plain text
    var arr = cell.getValue() || [];
    var content = arr && arr.length > 0 && typeof arr[0] === 'string' ? React.createElement("span", null, arr.join(', ')) : React.createElement("span", null);
    if (style === 'PILL') {
        // TODO: use React.Fragment here to remove unnecessary div. (but will break React 15 example in Codesandbox)
        content = (React.createElement("div", null, arr.map(function (item) {
            return typeof item === 'string' ? React.createElement("span", { key: item }, item) : React.createElement("span", { key: item.name }, item.name);
        })));
    }
    var el = createCellEl();
    el.className = 'multi-value-formatter-content';
    el.title = arr && arr.length > 0 && typeof arr[0] === 'string' ? arr.join(', ') : '';
    react_dom_1.render(content, el);
    return el;
}
exports["default"] = default_1;
