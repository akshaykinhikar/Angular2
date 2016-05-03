import {Component} from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home';
import {AboutComponent} from './about';
import {ExperimentsComponent} from './experiment';
import {MyappComponent} from './my_app';
import {StateService} from './service';
// import {ExperimentsService} from './common/experiments.service';
@Component({
	selector: 'app',
	templateUrl: './app/app.html',
	styles: [`
		h1 {
			color:#545454;
			background:#02A8F4;
			padding:15px;
			box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
			margin: 0px;
		}
	`],
	directives: [ROUTER_DIRECTIVES],
	providers: [StateService]
})
@RouteConfig([
	{path: '/home',        name: 'Home',        component: HomeComponent, useAsDefault: true},
	{path: '/about',       name: 'About',       component: AboutComponent},
	{path: '/experiments', name: 'Experiments', component: ExperimentsComponent}
	{path: '/myapp',       name: 'Myapp',       component: MyappComponent}
])
export class AppComponent {
	ngOnInit() {
		$(".button-collapse").sideNav({
			menuWidth: 300, // Default is 240
			edge: 'right', // Choose the horizontal origin
			closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		});
		function toogleSideNav(){
			$('.button-collapse').sideNav('show');
		}
	},
	componentName: 'AppComponent'
}
