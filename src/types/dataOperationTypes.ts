export interface IDataSection {
    name: string,
    sectionDataList: IDataModule[]
}

export interface IDataModule {
    name: string,
    dataList: IData[]
}

export interface IData {
name: string,
fields: IDataField[]
}

export interface IDataField {
    name: string,
    type: string,
    required?: boolean
}