import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export declare class ReportViewerComponent implements OnChanges {
    private sanitizer;
    reporturl: string;
    reportserver: string;
    showparameters?: string;
    parameters?: any;
    language?: string;
    width?: number;
    height?: number;
    toolbar?: string;
    onError: EventEmitter<any>;
    constructor(sanitizer: DomSanitizer);
    source: SafeResourceUrl;
    ngOnChanges(changes: SimpleChanges): void;
    buildParameterString(): string;
    buildReportUrl(): string;
}
