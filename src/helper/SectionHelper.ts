import path from 'path';
import { FileHelper } from "./fileHelper";

export default class SectionHelper {
    static createProject(basicFileContent: string)  {
        const folderPath = process.cwd(); // Current working directory
                const sectionRegex = /section\s+([a-zA-Z0-9_]+)\s*{\s*data-module\s+([a-zA-Z0-9,]+)\s*}/g;
        
                let match;
                while ((match = sectionRegex.exec(basicFileContent)) !== null) {
                    const sectionName = match[1];
                    // Path for the section folder inside `spec`
                    const sectionFolderPath = path.join(folderPath, 'module', sectionName);
                    const packageFilePath = path.join(sectionFolderPath,"package.json");
                    const tsConfigFilePath = path.join(sectionFolderPath,"tsconfig.json");
                    const appTsPath = path.join(sectionFolderPath,"src/app.ts");
                    const envPath = path.join(sectionFolderPath,".env.dev");
                    const routesPath = path.join(sectionFolderPath,"src/routes/common/common.routes.config.ts");
                    const packageFileCode = packageJSON;
                    packageFileCode.name = sectionName;
                    FileHelper.createFile(packageFilePath,JSON.stringify(packageFileCode));
                    FileHelper.createFile(tsConfigFilePath,JSON.stringify(tsconfigJson));
                    FileHelper.createFile(appTsPath,appTsCode);
                    FileHelper.createFile(envPath,envFileCode);
                    FileHelper.createFile(routesPath,routesCode);
                    
                }
    }
}

const tsconfigJson = {
    "compilerOptions": {
      "target": "es2016",
      "module": "commonjs",
      "outDir": "./dist",
      "strict": true,
      "esModuleInterop": true,
      "inlineSourceMap": true
    }
  }

  const packageJSON = {
    "name": "",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start": "tsc && NODE_ENV=dev node ./dist/app.js",
      "debug": "export DEBUG=* && npm run start",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Govind",
    "license": "ISC",
    "dependencies": {
      "bcrypt": "^5.1.0",
      "body-parser": "^1.20.1",
      "cors": "^2.8.5",
      "crypto": "^1.0.1",
      "debug": "^4.3.4",
      "express": "^4.18.2",
      "express-jwt": "^8.4.1",
      "express-winston": "^4.2.0",
      "jsonwebtoken": "^9.0.0",
      "mongoose": "^6.8.1",
      "winston": "^3.8.2",
      "dotenv": "^16.3.1"
    },
    "devDependencies": {
      "@types/bcrypt": "^5.0.0",
      "@types/cors": "^2.8.13",
      "@types/debug": "^4.1.7",
      "@types/express": "^4.17.15",
      "source-map-support": "^0.5.21",
      "tslint": "^6.1.3",
      "typescript": "^4.9.4"
    }
  }

  const envFileCode = "";

  const appTsCode = `
  import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';

import bodyParser, {json, urlencoded} from 'body-parser';
import mongoose from 'mongoose';
import { CommonRoutesConfig } from './routes/common/common.routes.config';
import dotenv from "dotenv";

const app: express.Application = express();

const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');
app.use((err: any, req:express.Request, res:express.Response, next:any) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });
app.use(express.json());

app.use(cors());
app.use(urlencoded());
app.use(json());
dotenv.config({ path: ".env.\${process.env.NODE_ENV}" });
mongoose.set('strictQuery', false);

const runningMessage = "Server running ats http://localhost:\${port}";
app.get('/', (req: express.Request, res: express.Response) => {
    
    res.send("Hello World")
});


const server: http.Server = http.createServer(app);


server.listen(port, () => {
    if(process.env.MONGO_DB_URL) {
    mongoose.connect(process.env.MONGO_DB_URL).then(mongoConnection => {
        console.log("Succesfully connected to the data base",routes)
    })
    }
    console.log(runningMessage);
    routes.forEach((route: CommonRoutesConfig) => {
        
    });
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    
});
  `
  
  const routesCode = `
  import express from 'express';
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
    abstract configureRoutes(): express.Application;
}
  `