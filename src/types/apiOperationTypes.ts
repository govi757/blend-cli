export type IApiSpec = {
    name: string;
    type: string;
    input: IApiDataField;
    output: IApiDataField;
    authenticated?: boolean;
    directOutput?: IApiDataField;
};

export type IApiMainSection = {
    name: string;
    expressSectionList: IExpressSection[];
};

export type IExpressSection = {
    name: string;
    apiSectionList: IApiSection[];
    includedDataModuleList: string[];
};

export type IApiSection = {
    name: string,
    apiList: IApiSpec[]
}

export interface IApiDataField {
    name?: string,
    type?: string,
    required?: boolean
}



// export type IApiModule = {
//     name: string;
//     apiList: IApiSpec[];
// }

export enum ApiType {
    Get="get",
    Post="post",
    Put="put"
}