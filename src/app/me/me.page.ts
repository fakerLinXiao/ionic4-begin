import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
    selector: 'app-me',
    templateUrl: './me.page.html',
    styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {

    items: any[] = [];

    constructor(
        protected pickerController: PickerController
    ) {
        for (let i = 0; i < 1000; i++) {
            this.items.push({
                name: i + ' - ' + images[rotateImg],
                imgSrc: getImgSrc(),
                avatarSrc: getImgSrc(),
                imgHeight: Math.floor(Math.random() * 50 + 150),
                content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
            });

            rotateImg++;
            if (rotateImg === images.length) {
                rotateImg = 0;
            }
        }
    }

    ngOnInit() {
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

}

// tslint:disable-next-line:max-line-length
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const images = [
  'bandit',
  'batmobile',
  'blues-brothers',
  'bueller',
  'delorean',
  'eleanor',
  'general-lee',
  'ghostbusters',
  'knight-rider',
  'mirth-mobile'
];

function getImgSrc() {
  const src = `https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png`;
  rotateImg++;
  if (rotateImg === images.length) {
    rotateImg = 0;
  }
  return src;
}

let rotateImg = 0;

