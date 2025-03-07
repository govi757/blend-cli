export interface IFrontEndScreen{
    name: string;
    path: string;
    parentLayout?: string;
};

export interface IRNLayout {
    name: string;
    route: string;
    type?: string;
    element?: any;
    children?: Array<{
        element?: string;
        name: string;
        route: string;
        type?: string;
        children?: IRNLayout["children"];
        parentLayout?:string;
    }>;
};
export interface IRNScreen{
    name: string,
    path: string
}

export interface IRNComponent{
    name: string,
    path: string
}
export interface IRNModule {
    componentList: IRNComponent[],
    screenList: IRNScreen[],
   layout: IRNLayout[],
   name: string,
}


export interface IRNSection {
    name: string,
    rnModuleList: IRNModule[];
}
export interface SpecJSON {
    screenList: IFrontEndScreen[];
    layout: IRNLayout[];
}



//React


export interface IReactSection {
    name: string,
    reactModuleList: IReactModule[];
}

export interface IReactModule {
    
    componentList: IReactComponent[],
    screenList: IReactScreen[],
   layout: IReactLayout[],
   name: string,
}



export interface IReactScreen {
    name:string,
    path:string
}

export interface IReactComponent {
    name:string,
    path:string,
    props?: any,
    parent?: string
}


export interface IReactLayout {
    name:string,
    route:string,
    children?: IReactLayout[],
    element?: string;
    // type?: string;
}

export interface IReactElement {
    element: string;
    route: string;
    name: string;
}