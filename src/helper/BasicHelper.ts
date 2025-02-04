import { IBasicSection } from "../types/basicOperationTypes";
import { FileHelper } from "./fileHelper";
import path from 'path';

export default class BasicHelper {
    basicFilePath: string;
    folderName: string;
    folderPath: string;
    basicFileContent: string;
    configPath: string;
    constructor() {
        this.folderPath = path.join(process.cwd());
        this.folderName = path.basename(this.folderPath);
        this.basicFilePath = path.join(this.folderPath, `${this.folderName}.basic`);
        this.configPath = path.join(this.folderPath, '.basicConfig');
    }

    parseSpec(spec: string) {
        const sectionRegex = /section\s+(\w+)\s*\{([^}]+)\}/g;
        const dataModuleRegex = /data-module\s+(.+)/;
        const expressModuleRegex = /express-module\s+(\w+)(?:\(([^)]*)\))?/g;
        const rnModuleRegex = /rn-module\s+(\w+)(?:\(([^)]*)\))?/g;
        const mongoModuleRegex = /mongo-module\s+(\w+)(?:\(([^)]*)\))?/g;
    
        const sections: IBasicSection[] = [];
        let match;
    
        while ((match = sectionRegex.exec(spec)) !== null) {
            const sectionName = match[1];
            const sectionBody = match[2];
    
            // Calculate line number of the section start
            const sectionStartIndex = match.index;
            const lineNumber = spec.slice(0, sectionStartIndex).split("\n").length;
    
            // Validate and extract the data-module for this section
            const dataModuleMatch = sectionBody.match(dataModuleRegex);
            // if (!dataModuleMatch) {
            //     throw new Error(`Syntax error: Missing "data-module" in section "${sectionName}" at line ${lineNumber}.`);
            // }
    
            // Extract and trim the data-module list for this section, splitting by commas
            const dataModuleList = dataModuleMatch[1]
                .split(",")
                .map((m) => m.trim())
                .filter((dm) => dm); // Filter out empty values
    
            // Validate and extract express modules
            const expressModuleMatches = [...sectionBody.matchAll(expressModuleRegex)];
            const expressModuleList = expressModuleMatches.map((emMatch) => {
                const name = emMatch[1];
                const includedDataModules = emMatch[2]
                    ? emMatch[2].split(",").map((m) => m.trim())
                    : [];
                return { name, includedDataModuleList: includedDataModules };
            });

            const rnModuleMatches = [...sectionBody.matchAll(rnModuleRegex)];
            console.log(rnModuleMatches,"rnModuleList")
            const rnModuleList = rnModuleMatches.map((emMatch) => {
                console.log(emMatch,"rnModule")
                const name = emMatch[1];
                return { name};
            });

            const mongoModuleMatches = [...sectionBody.matchAll(mongoModuleRegex)];

            const mongoModuleList = mongoModuleMatches.map(mongoMarch => {
                console.log(mongoMarch,"rnModule")
                const name = mongoMarch[1];
                return { name}; 
            })
    
            // Push the section with the full dataModuleList and expressModuleList
            sections.push({
                name: sectionName,
                dataModuleList,
                expressModuleList,
                rnModuleList,
                mongoModuleList
            });
        }
    
        if (sections.length === 0) {
            throw new Error("Syntax error: No valid sections found in the spec.");
        }
        FileHelper.ensureDir(this.configPath);
        FileHelper.writeFile(`${this.configPath}/basicConfig.json`, JSON.stringify({
            name: this.folderName,
            description: "Basic config for swing",
            createdAt: new Date().toISOString(),
            sectionList: sections,
        }));
    }
    
    
    
}