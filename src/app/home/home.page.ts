import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        protected pickerController: PickerController
    ) {

    }

    protected async onClick() {
        const picker = await this.pickerController.create({
            animated: true,
            buttons: [{
                text: 'Save',
                handler: () => console.log('Clicked Save!')
            }, {
                text: 'Log',
                handler: (val) => {
                    console.log('Clicked Log. Do not Dismiss.', val);
                    return false;
                }
            }],
            columns: [
                {
                    name: 'hours',
                    prefix: 'total',
                    suffix: 'hours',
                    options: [
                        {
                            text: '1',
                            value: '01'
                        },
                        {
                            text: '2',
                            value: '02'
                        }
                    ]
                }
            ],
            cssClass: 'picker-hours',
            mode: 'ios',
        });
        picker.present();
    }

    loadData(event) {
        setTimeout(() => {
          console.log('Done');
          event.target.complete();
          // App logic to determine if all data is loaded
          // and disable the infinite scroll
          /* if (data.length === 1000) {
            event.target.disabled = true;
          } */
        }, 500);
      }

}
