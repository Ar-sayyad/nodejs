import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
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
        this.onError = new EventEmitter();
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
    { type: Component, args: [{
                selector: 'ssrs-reportviewer',
                template: "\n\n        <iframe [src]=\"source\" class=\"ssrs-reportviewer\" [style.width.%]=\"width\" [style.height.%]=\"height\" scrolling=\"no\"> \n  ",
                styles: ["\n    .ssrs-reportviewer {\n      overflow-x:hidden;\n      overflow-Y:hidden;\n      position: relative;\n      left: 0px;\n      top: 0px;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
ReportViewerComponent.ctorParameters = function () { return [
    { type: DomSanitizer, },
]; };
ReportViewerComponent.propDecorators = {
    'reporturl': [{ type: Input },],
    'reportserver': [{ type: Input },],
    'showparameters': [{ type: Input },],
    'parameters': [{ type: Input },],
    'language': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'toolbar': [{ type: Input },],
    'onError': [{ type: Output, args: ['error',] },],
};
var SSRSReportViewerModule = (function () {
    function SSRSReportViewerModule() {
    }
    return SSRSReportViewerModule;
}());
SSRSReportViewerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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
/**
 * Generated bundle index. Do not edit.
 */
export { SSRSReportViewerModule, ReportViewerComponent as ɵa };
//# sourceMappingURL=ngx-ssrs-reportviewer.es5.js.map
