/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	onTcsLoaded(() => {
		const weather = new TcsModule(weatherModuleInfos, (module: TcsModule) => {
			module.fnc('launchClientWeather')();
			module.fnc('launchClientTime')();
		});

		TCS.modules.addModuleToGame(weather);
	});
})();
