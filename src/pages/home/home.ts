import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private fileChooser: FileChooser, private fileOpener: FileOpener, private filePath: FilePath) {
  }

  chooseFile() {
    this.fileChooser.open().then(file => {
      this.filePath.resolveNativePath(file).then(resolvedFilePath => {
        this.fileOpener.open(resolvedFilePath, 'application/pdf').then(file => {
          alert("It worked!")
        }).catch(err => {
          alert(JSON.stringify(err));
        });
      }).catch(err => {
        alert(JSON.stringify(err));
      });
    }).catch(err => {
      alert(JSON.stringify(err));
    });
  }

}
