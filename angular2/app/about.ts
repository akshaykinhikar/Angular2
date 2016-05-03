import {Component} from 'angular2/core';
import {StateService} from './service';
@Component({
	template: '<div class="container"><div class="row"><div class="col s12"><div><h3>About Page</h3><p>{{message}}</p></div></div></div></div>',
	styles: [`
		h3 {
			color:#545454;
			background:green;
			padding:15px;
			box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
			margin: 0px;
		}
	`]
})
export class AboutComponent {
	title: string = 'About Page';
	body:  string = 'This is the about home body';
	message: string;
	constructor(private _StateService: StateService){}
	ngOnInit() {
		this.message = this._StateService.getMessage();
	}
	updateMessage(m: string): void {
		this._StateService.setMessage(m);
	}
}
