export type IBasicSection = {
    name: string;
    dataModuleList: string[];
    expressModuleList: { name: string; includedDataModuleList: string[] }[];
    rnModuleList?: {name: string}[];
  };
  
  export type IBasicProject = {
    name: string;
    description: string;
    createdAt: string;
    sectionList: IBasicSection[];
  };