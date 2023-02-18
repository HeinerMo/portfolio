export class HandsetData {
 
    private handset: boolean
    private static instance?: HandsetData
    private constructor() {
        this.handset = false
    }


    public static getInstance(): HandsetData {
        if (this.instance == null) {
            this.instance = new HandsetData()
        }
        return this.instance
    }

    public setHandset(isHandset: boolean): void {
        this.handset = isHandset
    }

    public isHandset(): boolean {
        return this.handset;
    }
}