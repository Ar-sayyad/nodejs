(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
	(factory((global['ngx-ssrs-reportviewer'] = {}),global.ng.core,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,core,common,platformBrowser) { 'use strict';

var ReportViewerComponent = (function () {
    /**
     * @param {?} sanitizer
     */
    function ReportViewerComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.showparameters = "false";
        this.language = "en-us";
        this.width = 100;
        this.height = 100;
        this.toolbar = "true";
        this.onError = new core.EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ReportViewerComponent.prototype.ngOnChanges = function (changes) {
        if (!this.reporturl) {
            this.onError.emit("Src cannot be null");
        }
        if ('reporturl' in changes) {
            this.source = this.sanitizer
                .bypassSecurityTrustResourceUrl(this.buildReportUrl());
        }
    };
    /**
     * @return {?}
     */
    ReportViewerComponent.prototype.buildParameterString = function () {
        var /** @type {?} */ parameterString = "";
        for (var /** @type {?} */ param in this.parameters) {
            if (param) {
                if (this.parameters[param] instanceof Array === true) {
                    for (var /** @type {?} */ arrayParam in this.parameters[param]) {
                        if (arrayParam) {
                            parameterString += "&" + param + "=" + this.parameters[param][arrayParam];
                        }
                    }
                }
                if (this.parameters[param] != null && this.parameters[param] instanceof Array === false) {
                    parameterString += "&" + param + "=" + this.parameters[param];
                }
                if (this.parameters[param] == null) {
                    parameterString += "&" + param + ":isnull=true";
                }
            }
        }
        return parameterString;
    };
    /**
     * @return {?}
     */
    ReportViewerComponent.prototype.buildReportUrl = function () {
        if (!this.reporturl) {
            return;
        }
        var /** @type {?} */ parameters = this.buildParameterString();
        return this.reportserver + '?/'
            + this.reporturl + '&rs:Embed=true'
            + '&rc:Parameters=' + this.showparameters
            + parameters
            + '&rs:ParameterLanguage=' + this.language + "&rc:Toolbar=" + this.toolbar;
    };
    return ReportViewerComponent;
}());
ReportViewerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ssrs-reportviewer',
                template: "\n\n        <iframe [src]=\"source\" class=\"ssrs-reportviewer\" [style.width.%]=\"width\" [style.height.%]=\"height\" scrolling=\"no\"> \n  ",
                styles: ["\n    .ssrs-reportviewer {\n      overflow-x:hidden;\n      overflow-Y:hidden;\n      position: relative;\n      left: 0px;\n      top: 0px;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
ReportViewerComponent.ctorParameters = function () { return [
    { type: platformBrowser.DomSanitizer, },
]; };
ReportViewerComponent.propDecorators = {
    'reporturl': [{ type: core.Input },],
    'reportserver': [{ type: core.Input },],
    'showparameters': [{ type: core.Input },],
    'parameters': [{ type: core.Input },],
    'language': [{ type: core.Input },],
    'width': [{ type: core.Input },],
    'height': [{ type: core.Input },],
    'toolbar': [{ type: core.Input },],
    'onError': [{ type: core.Output, args: ['error',] },],
};
var SSRSReportViewerModule = (function () {
    function SSRSReportViewerModule() {
    }
    return SSRSReportViewerModule;
}());
SSRSReportViewerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [ReportViewerComponent],
                exports: [
                    ReportViewerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
SSRSReportViewerModule.ctorParameters = function () { return []; };

exports.SSRSReportViewerModule = SSRSReportViewerModule;
exports.ɵa = ReportViewerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-ssrs-reportviewer.umd.js.map
