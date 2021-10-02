import * as fileSaver from 'file-saver';

export class FileUploadService {
  //C:\Users\m.saghali\Desktop\train\todo-ng\real-state\src\assets
  file: any[];
  constructor() {}
  processFile(files: any) {
    const file: File = files.files[0];
    console.log('in service', file);
  }
}
