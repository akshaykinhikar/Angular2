import {Component} from 'angular2/core';
import {MyappComponent} from './my_app';
import {StateService} from './service';
@Component({
	directives: [MyappComponent],
	template: `
		<div class="container">
			<div class="row">
				<div class="col s12">
					<h3>Home Page</h3><p>{{message}}</p>
				<div>
			</div>
		</div>

		<my-app></my-app>
	`,
	styles: [`
		h3 {
			color:#545454;
			background:red;
			padding:15px;
			box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
			margin-top: 0px;
		}
	`]
})
export class HomeComponent {
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

}
