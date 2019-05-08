import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class MyService {

  constructor(private scrollToService: ScrollToService) { }

  public triggerScrollTo() {
    /**
     * @see NOTE:1
     */
    const config: ScrollToConfigOptions = {
      container: 'custom-container',
      target: 'destination',
      duration: 100,
      easing: 'easeOutElastic',
      offset: 20
    };

    this.scrollToService.scrollTo(config);
  }
}
