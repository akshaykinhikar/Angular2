import {Component} from 'angular2/core';
import {StateService} from './service';
@Component({
	selector: 'my-app',
	template: `
			<div class="row">
				<div class="col s12">
					<h3>My App Page</h3><p>{{message}}{{Component}}</p>
				<div>
			</div>
	`,
	styles: [`
		h3 {
			color:#545454;
			background:blue;
			padding:15px;
			box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
			margin-top: 0px;
		}
	`]
})
export class MyappComponent {
	// title: string = 'Home Page';
	// body:  string = 'This is the about home body';
	// message: string;
	constructor(private _StateService: StateService) { }
	ngOnInit() {
		this.message = this._StateService.getMessage();
	}
	updateMessage(m: string): void {
		this._StateService.setMessage(m);
	}
	Component: "myApp here"
}
