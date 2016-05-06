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

			<div class="row">
				<div class="col s4">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
							<img class="activator" src="../image/sky.jpg">
						</div>
						<div class="card-content">
							<span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
							<p><a href="#">This is a link</a></p>
						</div>
						<div class="card-reveal">
							<span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
							<p>Here is some more information about this product that is only revealed once clicked on.</p>
						</div>
					</div>
				</div>
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
