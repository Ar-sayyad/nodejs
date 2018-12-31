import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

class ReportViewerComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
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
    ngOnChanges(changes) {
        if (!this.reporturl) {
            this.onError.emit("Src cannot be null");
        }
        if ('reporturl' in changes) {
            this.source = this.sanitizer
                .bypassSecurityTrustResourceUrl(this.buildReportUrl());
        }
    }
    /**
     * @return {?}
     */
    buildParameterString() {
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
    }
    /**
     * @return {?}
     */
    buildReportUrl() {
        if (!this.reporturl) {
            return;
        }
        var /** @type {?} */ parameters = this.buildParameterString();
        return this.reportserver + '?/'
            + this.reporturl + '&rs:Embed=true'
            + '&rc:Parameters=' + this.showparameters
            + parameters
            + '&rs:ParameterLanguage=' + this.language + "&rc:Toolbar=" + this.toolbar;
    }
}
ReportViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ssrs-reportviewer',
                template: `

        <iframe [src]="source" class="ssrs-reportviewer" [style.width.%]="width" [style.height.%]="height" scrolling="no"> 
  `,
                styles: [`
    .ssrs-reportviewer {
      overflow-x:hidden;
      overflow-Y:hidden;
      position: relative;
      left: 0px;
      top: 0px;
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
ReportViewerComponent.ctorParameters = () => [
    { type: DomSanitizer, },
];
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

class SSRSReportViewerModule {
}
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
SSRSReportViewerModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { SSRSReportViewerModule, ReportViewerComponent as ɵa };
//# sourceMappingURL=ngx-ssrs-reportviewer.js.map
