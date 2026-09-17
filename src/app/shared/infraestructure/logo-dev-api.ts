import {Service} from '@angular/core';
import {environment} from '../../../environments/environment';

@Service()
export class LogoDevApi {

  baseUrl = environment.logoProviderApiBaseUrl;
  apiKey = environment.logoProviderPublishablekey;

  constructor() {

  }

  // It's used to get the logo of a website using the LogoDev API. It takes a URL as input and returns the URL to the logo image.
  getUrlToLogo(url: string): string {

    return `${this.baseUrl}${new URL(url).hostname}?token=${this.apiKey}`;
  }

}
