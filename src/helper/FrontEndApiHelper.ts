import { IApiMainSection, IApiSection, IExpressSection } from "../types/apiOperationTypes";
import { IBasicProject, IBasicSection } from "../types/basicOperationTypes";
import { IDataSection } from "../types/dataOperationTypes";
import ExpressHelper from "./ExpressHelper";
import { FileHelper } from "./fileHelper";
import path from 'path';

export default class FrontEndApiHelper {
    basicFilePath: string;
    folderName: string;
    folderPath: string;
    basicFileContent: string;
    configPath: string;
    basicProjectContent: IBasicProject;

    constructor() {
        this.folderPath = path.join(process.cwd());
        this.folderName = path.basename(this.folderPath);
        this.basicFilePath = path.join(this.folderPath, `${this.folderName}.basic`);
        this.configPath = path.join(this.folderPath, '.basicConfig');
        this.basicProjectContent = JSON.parse(FileHelper.readFile(`${this.configPath}/basicConfig.json`) || "{}");
    }
    doFrontEndApiGenerations() {
        this.writeStoreFiles();
        this.createRequiredFiles();
    }

    createRequiredFiles() {
        const apiMainSectionList: IApiMainSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/apiConfig.json`));
        const rnSectionList: IRNSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/rnConfig.json`));
        rnSectionList.forEach(rnSection => {
            const rnFolderPath = path.join(this.folderPath, `module/${rnSection.name}/react-native`);
            rnSection.rnModuleList.forEach(rnModule => {
                let currentApiSection: IApiMainSection = apiMainSectionList.find(item => item.name === rnSection.name)
                const rnProjectPath = path.join(rnFolderPath, rnModule.name);
                const rapcode = this.generateRmoteApiPointsCode(currentApiSection);
                FileHelper.createFile(`${rnProjectPath}/src/remote-api-point.ts`, rapcode);
                FileHelper.createFile(`${rnProjectPath}/src-gen/data/common.ts`, commonApiDataCode);
                FileHelper.createFile(`${rnProjectPath}/src/redux/store/store.ts`, mainStoreCode);
                FileHelper.createFile(`${rnProjectPath}/src/redux/store/saga.ts`, mainSagaCode);
                FileHelper.createFile(`${rnProjectPath}/src/redux/store/snackbar/snackbarSlice.ts`, snackbarSliceCode);
                FileHelper.createFile(`${rnProjectPath}/src/redux/hooks.ts`, hooksCode);


            })
        })
    }

    generateRmoteApiPointsCode(currentApiSection: IApiMainSection) {
        let code = `
        import axios from 'axios';
        ${currentApiSection.expressSectionList.reduce((acc, curVal) => {
            acc = acc + `export const ${curVal.name}Api = axios.create({
baseURL: process.env.REACT_APP_API_URL||'http://localhost:8000', // Replace with your API base URL
headers: {
Authorization: localStorage.getItem("authToken")||""
}
});
\n
`
            return acc;
        }, "")}    
    `;
        return code;
    }

    writeStoreFiles() {
        const apiMainSectionList: IApiMainSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/apiConfig.json`));
        const rnSectionList: IRNSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/rnConfig.json`));
        console.log(rnSectionList, "rnSectionList")
        rnSectionList.forEach(rnSection => {
            const rnFolderPath = path.join(this.folderPath, `module/${rnSection.name}/react-native`);
            let currentApiSection: IApiMainSection = apiMainSectionList.find(item => item.name === rnSection.name)
            rnSection.rnModuleList.forEach(rnModule => {
                const rnProjectPath = path.join(rnFolderPath, rnModule.name);
                currentApiSection.expressSectionList.forEach(expressSection => {
                    const rnApiPath = path.join(rnProjectPath, `src-gen/redux/${expressSection.name}`);
                    const rnReducerPath = path.join(rnProjectPath, `src-gen/redux/gen-reducers.ts`);
                    const reducerCode = this.generateReducersCode(expressSection.apiSectionList, expressSection.name);
                    const rnSagaPath = path.join(rnProjectPath, `src-gen/redux/gen-root-saga.ts`);
                    const rootSagaCode = this.generateRootSagaCode(expressSection.apiSectionList, expressSection.name);
                    FileHelper.writeFile(rnReducerPath, reducerCode);
                    FileHelper.writeFile(rnSagaPath, rootSagaCode);


                    expressSection.apiSectionList.forEach(apiSection => {
                        const apiSectionSlicePath = path.join(rnApiPath, apiSection.name, `${apiSection.name}Slice.ts`);
                        const apiSectionDataPath = path.join(rnApiPath, apiSection.name, `data.ts`);
                        const apiSectionActionPath = path.join(rnApiPath, apiSection.name, `action.ts`);
                        const apiSectionSagaPath = path.join(rnApiPath, apiSection.name, `${apiSection.name}Saga.ts`);
                        const sliceCode = this.generateSliceCode(apiSection);
                        const dataCode = this.generateApiDatacode(apiSection);
                        const actionCode = this.generateApiActioncode(apiSection, expressSection);
                        const sagaCode = this.generateSagaCode(apiSection);
                        FileHelper.writeFile(apiSectionSlicePath, sliceCode);
                        FileHelper.writeFile(apiSectionDataPath, dataCode);
                        FileHelper.writeFile(apiSectionActionPath, actionCode);
                        FileHelper.writeFile(apiSectionSagaPath, sagaCode);

                    })
                })

            })
        })


    }

    generateSliceCode(apiSection: IApiSection) {
        const code = `
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


import { ${apiSection.apiList.reduce((acc, curVal) => {
            const inputKeyList = Object.keys(curVal.input);
            const outputKeyList = Object.keys(curVal.output);
            const inputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Input`).toUpperCase();
            const outputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Output`).toUpperCase();
            acc = acc + `${inputKeyList.length > 0 ? inputDataTypeName + ',' : ''}`;
            acc = acc + `${outputKeyList.length > 0 ? outputDataTypeName + ',' : ''}`;
            return acc
        }, '')} } from "./data";

        ${apiSection.apiList.reduce((acc, curVal) => {
            if (curVal?.directOutput?.name) {
                const [moduleName, dataName] = curVal?.directOutput?.name?.split("->");
                acc = acc + `import {${dataName?.replace("[]","")}} from "../../../data/${moduleName}";`;
            }

            return acc
        }, '')}         


import { ApiStatus } from "../../../data/common";
interface ${apiSection.name}State {
    ${apiSection.apiList.reduce((acc, curVal) => {
            const [moduleName, dataName] = curVal?.directOutput?.name?.split("->")||[];
            acc = acc + `${curVal.name}: {
            data: ${Object.keys(curVal.output).length > 0 ? `${apiSection.name.toUpperCase()}_${curVal.name.toUpperCase()}_OUTPUT` :dataName?dataName: "any"},\n
            status: ApiStatus,
            error:string|null
        }
        `
            return acc
        }, "")}
}

const initialState: ${apiSection.name}State = {
    ${apiSection.apiList.reduce((acc, curVal) => {
        const [moduleName, dataName] = curVal?.directOutput?.name?.split("->")||[];

        const isOutputDataArray = (dataName || "").includes("[]")

            acc = acc + `${curVal.name}:{
            data: ${Object.keys(curVal.output).length > 0 ? `new ${apiSection.name.toUpperCase()}_${curVal.name.toUpperCase()}_OUTPUT()` :(dataName&&!isOutputDataArray)?`new ${dataName}()`:(dataName&&isOutputDataArray)?'[]': "null"},
            status: ApiStatus.Idle,
            error: null
        },\n`
            return acc
        }, "")}
}

export const ${apiSection.name}Slice = createSlice({
    name: "${apiSection.name}",
    initialState,
    reducers: {
        reset${apiSection.name}Reducer: () => initialState,
        ${apiSection.apiList.reduce((acc, curVal, currentIndex) => {
            const inputKeyList = Object.keys(curVal.input);
            const inputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Input`).toUpperCase();
            acc = acc + `
    ${curVal.name}Action:(state:any, ${inputKeyList.length > 0 ? `payload:PayloadAction<${inputDataTypeName}>` : ``}) => {
        state.${curVal.name}.status = ApiStatus.Loading;
        state.${curVal.name}.error = '';
    },
    ${curVal.name}SuccessAction:(state:any, payload:any) => {
        state.${curVal.name}.status = ApiStatus.Success;
        state.${curVal.name}.data = payload.payload;
    },
    ${curVal.name}ErrorAction:(state:any, payload:any) => {
        state.${curVal.name}.status = ApiStatus.Failed;
        state.${curVal.name}.error = payload.error;
    },
    `
            return acc;
        }, '')
            } 
}
    
});
        
export const {reset${apiSection.name}Reducer,${apiSection.apiList.reduce((acc, curVal, currentIndex) => {
                acc = acc + `
    ${curVal.name}Action,${curVal.name}SuccessAction,${curVal.name}ErrorAction,
    `; return acc
            }, '')}} = ${apiSection.name}Slice.actions;
export default ${apiSection.name}Slice.reducer;
        `
        return code;
    }


    generateSagaCode(apiSection: IApiSection) {
        const code = `
        import { put, takeLatest } from "redux-saga/effects";
        import { PayloadAction } from "@reduxjs/toolkit";
        

        import { ${apiSection.apiList.reduce((acc, curVal) => {
            acc = acc + `${curVal.name}Api,`;
            return acc
        }, '')} }from './action';

        import { ${apiSection.apiList.reduce((acc, curVal) => {

            acc = acc + `${curVal.name}SuccessAction,${curVal.name}ErrorAction,`;
            return acc
        }, '')} } from "./${apiSection.name}Slice";

        ${apiSection.apiList.reduce((acc, curVal) => {
            const inputKeyList = Object.keys(curVal.input);
            acc = acc + `
        function* ${curVal.name}Saga(action: PayloadAction<any>): any {
        try {
            const response: any = yield ${curVal.name}Api(${inputKeyList.length > 0 ? `action.payload` : ``})
            yield put(${curVal.name}SuccessAction(response.data))
        } catch(e: any) {
            yield put(${curVal.name}ErrorAction(e));
        }
}

        export function* watch${apiSection.name}${curVal.name}() {
            yield takeLatest("${apiSection.name}/${curVal.name}Action", ${curVal.name}Saga);
        }
            `
            return acc

        }, '')}

        `

        return code;
    }

    generateReducersCode(apiSectionList: IApiSection[], sectionName: string) {
        const code = `
        ${apiSectionList.reduce((acc, curVal) => {
            acc = acc + `
import ${curVal.name}Reducer from './${sectionName}/${curVal.name}/${curVal.name}Slice';\n`
            return acc;
        }, '')}

export const GeneratedReducers = {
    ${apiSectionList.reduce((acc, curVal) => {
            acc = acc + `${curVal.name.toLowerCase()}: ${curVal.name}Reducer,`
            return acc;
        }, '')}
}
`;
        return code;
    }

    generateApiActioncode(apiSection: IApiSection, expressSection: IExpressSection) {
        const code = `
        import { createAsyncThunk } from "@reduxjs/toolkit";
        import axios, { AxiosError } from 'axios';
        import {${expressSection.name}Api} from "../../../../src/remote-api-point";
        import { ${apiSection.apiList.reduce((acc, curVal) => {
            const inputKeyList = Object.keys(curVal.input);
            const outputKeyList = Object.keys(curVal.output);
            const inputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Input`).toUpperCase();
            const outputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Output,${apiSection.name}_${curVal.name}_Output`).toUpperCase();
            acc = acc + `${inputKeyList.length > 0 ? inputDataTypeName + ',' : ''}`;
            acc = acc + `${outputKeyList.length > 0 ? outputDataTypeName + ',' : ''}`;
            return acc
        }, '')} } from "./data";

          ${apiSection.apiList.reduce((acc, curVal) => {
            if (curVal?.directOutput?.name) {
                const [moduleName, dataName] = curVal?.directOutput?.name?.split("->");
                acc = acc + `import {${dataName?.replace("[]","")}} from "../../../data/${moduleName}";`;
            }

            return acc
        }, '')} 

        
      

        const showError = (err: AxiosError) => {
            const errorResponse: any = err.response?.data || {};
            if (err.response?.data) {
              if (typeof (err.response?.data) == "string") {
                return err.response?.data
              } else {
                return Object.keys(err.response?.data).reduce((acc, currVal) => {
                  acc = acc + errorResponse[currVal];
                  return acc;
                }, "")
              }
            }
            else {
              return err.message
            }
          }

  
        ${apiSection.apiList.reduce((acc, curVal) => {
            const inputKeyList = Object.keys(curVal.input);
            const outputKeyList = Object.keys(curVal.output);
            const inputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Input`).toUpperCase();
            const outputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Output`).toUpperCase();
            const [moduleName, dataName] = curVal?.directOutput?.name?.split("->")||[];
            acc = acc + `
        

              export const ${curVal.name}Api = async (${inputKeyList.length > 0 ? `input: ${inputDataTypeName},` : ``} ) => {
                  return ${expressSection.name}Api.${curVal.type}('${this.getApiName(apiSection.name)}/${this.getApiName(curVal.name)}',${inputKeyList.length > 0 ? `${curVal.type == 'post' ? 'input' : '{params: input.toJSON()}'}` : ''});
              }

              export const call${this.capitalizeFirstLetter(curVal.name)}Api = async (${inputKeyList.length > 0 ? `input: ${inputDataTypeName},` : ``} output: (output: ${outputKeyList.length > 0 ? outputDataTypeName :dataName?dataName: 'any'}) => any,error: (errMsg: any) => void) => {
                try {
                  //const { data } = await ${expressSection.name}Api.${curVal.type}('${this.getApiName(apiSection.name)}/${this.getApiName(curVal.name)}',${inputKeyList.length > 0 ? `${curVal.type == 'post' ? 'input' : '{params: input.toJSON()}'}` : ''});
                  const { data } = await ${curVal.name}Api(${inputKeyList.length > 0 ? `${curVal.type == 'post' ? 'input' : 'input'}` : ''});
                  return output(data);
                } catch (err: any) {
                    return error(showError(err));
                }
              }
            `
            return acc
        }, '')}
        
        `

        return code;
    }


    generateRootSagaCode(apiSectionList: IApiSection[], expressSectionName: string) {
        const code = `
        import { all, fork } from "redux-saga/effects";
        ${apiSectionList.reduce((acc, curVal) => {
            acc = acc + `
            import{
    ${curVal.apiList.reduce((apiAcc, apiCurVal) => {
                apiAcc = apiAcc + `
         watch${curVal.name}${apiCurVal.name},
        `;
                return apiAcc
            }, '')
                }
    } from './${expressSectionName}/${curVal.name}/${curVal.name}Saga';\n
`
            return acc;
        }, '')}




const genRootSaga = [

    ${apiSectionList.reduce((acc, curVal) => {
            acc = acc + `
        
${curVal.apiList.reduce((apiAcc, apiCurVal) => {
                apiAcc = apiAcc + `
    watch${curVal.name}${apiCurVal.name}()
     ,
    `;
                return apiAcc
            }, '')
                }

`
            return acc;
        }, '')}
        
];

export default genRootSaga;
`;
        return code;
    }

    getApiName(apiName: string) {
        return apiName?.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();;
    }

    capitalizeFirstLetter(val: string) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }

    generateApiDatacode(apiSection: IApiSection) {
        const expressHelper = new ExpressHelper();
        return expressHelper.generateSampleApiDataCode(apiSection, "react-native");
    }


}

const commonApiDataCode = `
export enum ApiStatus {
    Success="Success",
    Loading="Loading",
    Failed="Failed",
    Idle="Idle"
}
`;


const snackbarSliceCode = `
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export interface SnackbarRequest {
    type: SnackbarType,
    message: string,
    timing: number
}

export enum SnackbarType {
    Success="success",
    Error="error",
}


interface SnackbarState {
    snackbarRequestList: SnackbarRequest[]
}

const initialState:SnackbarState = {
    snackbarRequestList: []
}


export const snackbarSlice=  createSlice({
    name: "Snackbar",
    initialState: initialState,
    reducers: {
        addSnackbar: (state, action: {type:String,payload: SnackbarRequest}) => {
            state.snackbarRequestList.push(action.payload);
        },
        removeLastSnackbar: (state) => {
            state.snackbarRequestList.pop();
        },
    }
});


export const {addSnackbar,removeLastSnackbar} = snackbarSlice.actions;

export default snackbarSlice.reducer;
`


const mainStoreCode = `

import { configureStore } from '@reduxjs/toolkit'
import { GeneratedReducers } from '../../../src-gen/redux/gen-reducers'
import SnackbarReducer from './snackbar/snackbarSlice'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../../src-gen/redux/gen-root-saga';
import { mySaga } from './saga';
const reduxSagaMiddleWareOptions = {};
  const sagaMiddleWare = createSagaMiddleware(reduxSagaMiddleWareOptions);
export const store = configureStore({
    reducer: {
        ...GeneratedReducers,
        snackbar: SnackbarReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([sagaMiddleWare]),
    
  })
  sagaMiddleWare.run(mySaga)

  export type RootState = ReturnType<typeof store.getState>  

  export type AppDispatch = typeof store.dispatch;

`;

const mainSagaCode = `
import { all, takeEvery } from "redux-saga/effects";
import genRootSaga from "../../../src-gen/redux/gen-root-saga";

export function* mySaga() {
    yield all([...genRootSaga]) 
  }
`

const hooksCode = `
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store/store'

// Use throughout your app instead of plain useDispatch and useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
`;
