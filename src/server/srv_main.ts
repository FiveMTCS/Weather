/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	onTcsLoaded(() => {
		const weather = new TcsModule(weatherModuleInfos, (module: TcsModule) => {
			module.fnc('startServerWeather')();
			module.fnc('startServerTime')();
		});

		TCS.modules.addModuleToGame(weather);
	});
})();
