// fileHelper.ts
import fs from 'fs-extra';
import path from 'path';

export class FileHelper {
  // Ensure a directory exists, create it if it doesn't
  static ensureDir(folderPath: string): void {
    try {
      fs.ensureDirSync(folderPath);
    } catch (error) {
      console.error(`Error ensuring directory: ${error.message}`);
      throw error;
    }
  }

  static writeFile(filePath: string, content: string): void {
    try {
      // Ensure the folder exists
      const folderPath = path.dirname(filePath);
      this.ensureDir(folderPath);

      // Write the file
      fs.writeFileSync(filePath, content);
    } catch (error) {
      console.error(`Error writing file at ${filePath}: ${error.message}`);
      throw error;
    }
  }

  static createFile(filePath: string, content: string): void {
    try {
      // Ensure the folder exists
      const folderPath = path.dirname(filePath);
      this.ensureDir(folderPath);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content);
      }
      // Write the file
      
    } catch (error) {
      console.error(`Error writing file at ${filePath}: ${error.message}`);
      throw error;
    }
  }

 // Read content from a file
 static readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error(`Error reading file at ${filePath}: ${error.message}`);
      throw error;
    }
  }
  // Write a JSON object to a file, ensuring the folder exists
  static writeJson(filePath: string, jsonContent: object): void {
    try {
      // Ensure the folder exists
      const folderPath = path.dirname(filePath);
      this.ensureDir(folderPath);

      // Write the JSON file
      fs.writeJsonSync(filePath, jsonContent, { spaces: 2 });
    } catch (error) {
      console.error(`Error writing JSON to ${filePath}: ${error.message}`);
      throw error;
    }
  }
 
  // Check if a file or directory exists
  static exists(filePath: string): boolean {
    try {
      return fs.existsSync(filePath);
    } catch (error) {
      console.error(`Error checking existence of ${filePath}: ${error.message}`);
      throw error;
    }
  }

  // Copy a file from source to destination, ensuring the destination folder exists
  static async copyFile(srcPath: string, destPath: string): Promise<void> {
    try {
      // Ensure the destination folder exists
      await fs.ensureDir(path.dirname(destPath));

      // Copy the file
      await fs.copyFile(srcPath, destPath);
      console.log(`File copied from ${srcPath} to ${destPath}`);
    } catch (error) {
      console.error(`Error copying file from ${srcPath} to ${destPath}: ${error.message}`);
      throw error;
    }
  }


/**
 * Copies an entire folder from source to destination, including its contents.
 * @param srcFolder The path to the source folder.
 * @param destFolder The path to the destination folder.
 */
static async copyFolder(srcFolder: string, destFolder: string): Promise<void> {
    try {
      // Copy the folder recursively
      await fs.copy(srcFolder, destFolder, { overwrite: true });
      console.log(`Folder copied from ${srcFolder} to ${destFolder}`);
    } catch (error) {
      console.error(`Error copying folder from ${srcFolder} to ${destFolder}: ${error.message}`);
      throw error;
    }
  }
}
