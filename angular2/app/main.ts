import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { FriendComponent } from 'app/friend.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

declare var jQuery:JQueryStatic;
@Component({
	selector: 'my-app',
	directives: [
		ROUTER_DIRECTIVES,
	],
	providers: [
		ROUTER_PROVIDERS
	]
	styles: [`
		h1 {
			color:#545454;
			background:#02A8F4;
			padding:15px;
			box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
			margin: 0px;
		}
	`]
	template: `
		<div>
			<h1>Hello from the {{componentName}}.</h1>
			<a [routerLink]="['Friends']">Friends</a>
			<router-outlet></router-outlet>
		</div>
	`
})
@RouteConfig([
	{
		path: '/friends',
		name: 'Friends',
		component: FriendComponent
	}
])
// <my-friends></my-friends>
export class AppComponent {
	componentName: 'AppComponent'
}
bootstrap(AppComponent)

