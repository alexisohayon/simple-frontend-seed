/**
 * Created by alexisohayon on 02/05/2014.
 */
var _settings = {

	// skelJS
	skelJS: {
		prefix: 'stylesheets/main',
		resetCSS: true,
		boxModel: 'border',
		containers: 1200,
		useOrientation: true,
		breakpoints: {
			'widest': { range: '*', containers: 1360, grid: { gutters: 50 }, hasStyleSheet: false },
			'wide': { range: '-1680', containers: 1200, grid: { gutters: 40 } },
			'normal': { range: '-1280', containers: 960, grid: { gutters: 30 }, lockViewport: true },
			'narrow': { range: '-1000', containers: '100%', grid: { gutters: 25, collapse: true }, lockViewport: true },
			'mobile': { range: '-640', containers: '100%', grid: { gutters: 10, collapse: true }, lockViewport: true }
		}
	}
};
skel.init(_settings.skelJS);

