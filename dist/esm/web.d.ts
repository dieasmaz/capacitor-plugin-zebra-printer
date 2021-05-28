import { WebPlugin } from '@capacitor/core';
import { ZebraDiscoveryResult, ZebraPrinterStatus, ZebraCapacitorPluginInterface } from './definitions';
export declare class ZebraCapacitorPluginWeb extends WebPlugin implements ZebraCapacitorPluginInterface {
    private printers;
    private connectedPrinter;
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    discover(): Promise<ZebraDiscoveryResult>;
    printerStatus(): Promise<ZebraPrinterStatus>;
    print(options: {
        cpcl: string;
    }): Promise<any>;
    isConnected(): Promise<boolean>;
    connect(options: {
        MACAddress: string;
    }): Promise<boolean>;
    disconnect(): Promise<boolean>;
}
declare const ZebraCapacitorPlugin: ZebraCapacitorPluginWeb;
export { ZebraCapacitorPlugin };
