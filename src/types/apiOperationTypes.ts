export type IApiSpec = {
    name: string;
    type: string;
    input: any;
    output: any;
    authenticated?: boolean;
    directOutput?: IApiDataField;
    template?: IApiTemplate
};
export type IApiTemplate = {
    type: TemplateType | string;
    collection: string;
}

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
    Get="GET",
    Post="POST",
    Put="PUT"
}

export enum TemplateType {
    Add="Add",
    Update="Update",
    Delete="Delete",
    Get = "Get"
}