import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    protected data = [];

    constructor(
        protected pickerController: PickerController
    ) {
        for (let index = 0; index < 20; index++) {
            this.data.push('infinite scroll');
        }
    }

    loadData(event) {
        setTimeout(() => {
            for (let index = 0; index < 20; index++) {
                this.data.push('infinite scroll');
            }
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.data.length === 100) {
                event.target.disabled = true;
            }
        }, 500);
    }

}
