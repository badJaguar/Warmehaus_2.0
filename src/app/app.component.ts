import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { CanonicalService } from '../services/canonical.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private swUpdate: SwUpdate,
        private router: Router,
        private metaService: CanonicalService) { }
    title = 'Warmehaus';

    ngOnInit() {
        // this.metaService.createCanonicalURL();

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0); });

        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe((evt) => {
                console.log('service worker updated');
            });

            this.swUpdate.checkForUpdate().then(() => {
                // noop
            }).catch((err) => {
                console.error('error when checking for update', err);
            });
        }
    }
}
