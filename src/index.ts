#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import { FileHelper } from './helper/fileHelper';
import DataHelper from './helper/DataHelper';
import SectionHelper from './helper/SectionHelper';
import ExpressHelper from './helper/ExpressHelper';
import BasicHelper from './helper/BasicHelper';
import RNHelper from './helper/RNHelper';
import FrontEndApiHelper from './helper/FrontEndApiHelper';

const program = new Command();

program
  .name('blend-cli')
  .description('CLI for creating and editing files')
  .version('1.0.0');

// Command 1: blend-init
program.command('init <folderName>')
  .description('Initialize the folder with a .basic file, spec folder, .basicConfig, and data files')
  .action((folderName) => {
    const folderPath = path.join(process.cwd(), folderName);
    // Create .basic file
    const basicFilePath = path.join(folderPath, `${folderName}.basic`);
    const basicFileContent = `section test {
      
    }`;
    FileHelper.writeFile(basicFilePath, basicFileContent);

    // Create spec folder
    const specFolderPath = path.join(folderPath, 'spec');
    FileHelper.ensureDir(specFolderPath);

    // Create .basicConfig folder inside the main folder
    const basicConfigFolderPath = path.join(folderPath, '.basicConfig');
    FileHelper.ensureDir(basicConfigFolderPath);

    // Create basicConfig.json file inside .basicConfig folder
    const basicConfigPath = path.join(basicConfigFolderPath, 'basicConfig.json');
    const basicConfigData = {
      name: folderName,
      description: `Basic config for ${folderName}`,
      createdAt: new Date().toISOString(),
    };
    FileHelper.writeJson(basicConfigPath, basicConfigData);

    // Parse .basic file content for data-module and create .data files
    // const dataModuleRegex = /data-module\s+([a-zA-Z0-9,]+)/;
    // const match = basicFileContent.match(dataModuleRegex);

    // if (match && match[1]) {
    //   const modules = match[1].split(',');
    //   const dataFolderPath = path.join(specFolderPath, 'data');
    //   FileHelper.ensureDir(dataFolderPath);

    //   // Create .data files for each module
    //   modules.forEach(module => {
    //     const dataFilePath = path.join(dataFolderPath, `${module}.data`);
    //     FileHelper.writeFile(dataFilePath, `// Data file for ${module}`);
    //   });
    // }

    console.log(`Initialized ${folderName} with .basic file, spec folder, .basicConfig/basicConfig.json, and .data files.`);
  });

// Command 2: blend-prepare (set up and validate environment)
program.command('prepare')
  .description('Prepare the environment (e.g., validating setup, etc.)')
  .action(() => {
    const folderPath = path.join(process.cwd());
    const folderName = path.basename(folderPath);

    // Check if the .basic file exists
    const basicFilePath = path.join(folderPath, `${folderName}.basic`);
    if (!FileHelper.exists(basicFilePath)) {
      console.log(`The .basic file for ${folderName} is missing.`);
      return;
    }
    const dataHelper = new DataHelper();
    const expressHelper= new ExpressHelper();
    const rnHelper = new RNHelper();
    const basicFileContent = FileHelper.readFile(basicFilePath);
    // dataHelper.doDataOperations(basicFileContent);
    // expressHelper.doExpressOperations(basicFileContent);
    rnHelper.doRNOperations();

    // Ensure the .basicConfig folder and its contents exist
    const basicConfigFolderPath = path.join(folderPath, '.basicConfig');
    const basicConfigPath = path.join(basicConfigFolderPath, 'basicConfig.json');
    if (!FileHelper.exists(basicConfigFolderPath)) {
      console.log(`The .basicConfig folder is missing.`);
    } else if (!FileHelper.exists(basicConfigPath)) {
      console.log(`The basicConfig.json file is missing in .basicConfig.`);
    } else {
      console.log(`The .basicConfig folder and basicConfig.json file are present.`);
    }

    // Check if the spec/data folder exists
    const specDataFolderPath = path.join(folderPath, 'spec', 'data');
    if (!FileHelper.exists(specDataFolderPath)) {
      console.error(`The spec/data folder is missing.`);
    } else {
      console.log(`The spec/data folder exists.`);
    }

    console.log(`Environment preparation complete.`);
  });

// Command 3: blend-generate (add your logic here)
program.command('generate')
  .description('Generate files or configurations based on existing ones')
  .action(() => {
    const folderPath = path.join(process.cwd());
    const folderName = path.basename(folderPath);
    const basicFilePath = path.join(folderPath, `${folderName}.basic`);
    const basicFileContent = FileHelper.readFile(basicFilePath);
    const expressHelper = new ExpressHelper();
    const dataHelper = new DataHelper();
    const rnHelper = new RNHelper();
    const frontEndApiHelper = new FrontEndApiHelper();
    expressHelper.doExpressGenerations(basicFileContent);
    dataHelper.parseJSONAndGenerateFiles();
    rnHelper.doRNGenerations();
    frontEndApiHelper.doFrontEndApiGenerations();
    // SectionHelper.createProject(basicFileContent);
    // Add your custom logic here
  });

  program.command('cook')
  .description('Generate files or configurations based on existing ones')
  .action(() => {
    const folderPath = path.join(process.cwd());
    const folderName = path.basename(folderPath);
    const basicFilePath = path.join(folderPath, `${folderName}.basic`);
    const basicFileContent = FileHelper.readFile(basicFilePath);
    const basicHelper = new BasicHelper();
    const rnHelper = new RNHelper();

    
    
    basicHelper.parseSpec(basicFileContent);
    // rnHelper.parseSpec(basicFileContent);
    // SectionHelper.createProject(basicFileContent);
    // Add your custom logic here
  });

program.parse(process.argv);
