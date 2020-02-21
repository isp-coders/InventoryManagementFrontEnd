import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';


@Injectable()
export class BaseService {
	constructor(public httpClient: HttpClient, private router: Router) {}

	get(url: string, options?: Object) {
		return this.httpClient.get(environment.apiUrl + url, options);
	}
	post(url: string, payload: any, options?: Object) {
		return this.httpClient.post(environment.apiUrl + url, payload, options);
	}
	put(url: string, payload: any, options?: Object) {
		return this.httpClient.put(environment.apiUrl + url, payload, options);
	}
	delete(url: string, options?: Object) {
		return this.httpClient.delete(environment.apiUrl + url, options);
	}
}
