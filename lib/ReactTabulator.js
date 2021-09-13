"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var pick_react_known_prop_1 = require("pick-react-known-prop");
var ConfigUtils_1 = require("./ConfigUtils");
var Utils_1 = require("./Utils");
/* tslint:disable-next-line */
var tabulator_tables_1 = __importDefault(require("tabulator-tables"));
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
            columns: _this.props.columns,
            options: _this.props.options
        };
        _this.ref = null;
        _this.htmlProps = null;
        _this.mainId = "tabulator-" + +new Date() + "-" + Math.floor(Math.random() * 9999999); // random id
        _this.table = null; // will be set once Tabulator instantiated.
        _this.pickValidHTMLProps = function () {
            // run once
            if (!_this.htmlProps) {
                _this.htmlProps = pick_react_known_prop_1.pickHTMLProps(_this.props); // pick valid html props
                delete _this.htmlProps['data']; // don't render data & columns as attributes
                delete _this.htmlProps['columns'];
            }
        };
        return _this;
    }
    default_1.prototype.initTabulator = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var domEle, that, _b, columns, data, options, propOptions;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        domEle = ReactDOM.findDOMNode(this.ref);
                        that = this;
                        _b = this.props, columns = _b.columns, data = _b.data, options = _b.options;
                        return [4 /*yield*/, ConfigUtils_1.propsToOptions(this.props)];
                    case 1:
                        propOptions = _c.sent();
                        new tabulator_tables_1["default"](domEle, __assign(__assign(__assign(__assign({ columns: columns }, propOptions), { layout: (_a = this.props.layout) !== null && _a !== void 0 ? _a : 'fitColumns', // fit columns to width of table (optional)
                            tableBuilding: function () {
                                that.table = this; // keep the table instance.
                                that.props.tableBuilding ? that.props.tableBuilding() : '';
                            },
                            dataLoaded: function () {
                                that.props.dataLoaded ? that.props.dataLoaded() : '';
                            }, invalidOptionWarnings: false }), options), { // props.options are passed to Tabulator's options.
                            data: data }));
                        // await table.setData(data);
                        if (data && data.length > 0) {
                            this.setState({ data: data });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    default_1.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initTabulator()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    default_1.prototype.componentWillUnmount = function () {
        this.table && this.table.destroy();
    };
    // React 16.5.x - "getDerivedStateFromProps" replaces both "componentWillMount" & "componentWillReceiveProps"
    // This function will be ignored when running with React 15.6.x
    default_1.getDerivedStateFromProps = function (props, state) {
        // console.log('- getDerivedStateFromProps', props, state);
        var noData = !props.data || props.data.length === 0;
        if (!state && noData) {
            // first time (similar to: componentWillMount)
            return null;
        }
        if (state && state.data.length && state.data.length === 0 && props && props.data && props.data.length === 0) {
            return null;
        }
        // if (state && props.columns) {
        //   // this triggers componentDidUpdate
        //   if (!isSameArray(state.columns, props.columns)) {
        //     console.log('--- Columns changed');
        //     // console.log('columns changed!');
        //     return { ...state, columns: [...props.columns] };
        //   }
        // }
        if (state && (props.data || props.columns | props.options)) {
            // this triggers componentDidUpdate
            if (!Utils_1.isSameArray(state.data, props.data) ||
                !Utils_1.isSameArray(state.columns, props.columns) ||
                !Utils_1.isSameObject(state.options, props.options)) {
                // console.log('data changed!');
                return __assign(__assign({}, state), { data: __spreadArray([], props.data), columns: __spreadArray([], props.columns), options: __assign({}, props.options) });
            }
        }
        return {};
    };
    // componentDidUpdate(prevProps, prevState)
    default_1.prototype.componentDidUpdate = function (prevProps, prevState) {
        // props data changed! (see: getDerivedStateFromProps)
        if (!Utils_1.isSameArray(prevState.data, this.state.data)) {
            // only when data is really different: call this.table.setData (will re-render table)
            this.table && this.table.setData(this.state.data);
        }
        if (!Utils_1.isSameArray(prevState.columns, this.state.columns)) {
            // only when data is really different: call this.table.setData (will re-render table)
            this.table && this.table.setColumns(this.state.columns);
        }
        if (!Utils_1.isSameObject(prevState.options, this.state.options)) {
            // console.log('options changed', this.state.options);
            this.initTabulator();
        }
    };
    default_1.prototype.render = function () {
        var _this = this;
        this.pickValidHTMLProps();
        var className = this.props.className;
        return (React.createElement("div", __assign({ ref: function (ref) { return (_this.ref = ref); }, "data-instance": this.mainId }, this.htmlProps, { className: className })));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
