import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable()
export class UploadService {

    public url: string;

    constructor() {
        this.url = environment.API;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
        return new Promise((resolve, reject) => {
            let formData: any = new FormData();
            let xhr = new XMLHttpRequest();
            for (let i = 0; i < files.length; i++) {
                formData.append(name, files[i]);
                console.log(files[i]);
            }

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }

}
