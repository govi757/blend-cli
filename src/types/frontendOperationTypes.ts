type IFrontEndScreen = {
    name: string;
    path: string;
    parentLayout?: string;
};

type IRNLayout = {
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
type IRNScreen  = {
    name: string,
    path: string
}
type IRNModule = {
    screenList: IRNScreen[],
   layout: IRNLayout[],
   name: string,
}


type IRNSection = {
    name: string,
    rnModuleList: IRNModule[];
}
interface SpecJSON {
    screenList: IFrontEndScreen[];
    layout: IRNLayout[];
}