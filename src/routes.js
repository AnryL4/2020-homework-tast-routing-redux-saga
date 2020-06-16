import { MainPage } from './pages/mainPage';
import { FakePostsPage } from './pages/fakePostsPage';
import { PrivatePage } from './pages/privatePage';

export const routes = [
	{
		isExact: true,
		path: '/',
		name: 'Home',
		component: MainPage,
	},
	{
		path: '/posts',
		name: 'Posts',
		component: FakePostsPage,
	},
	{
		path: '/private',
		name: 'Private',
		component: PrivatePage,
	},
];
