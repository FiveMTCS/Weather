/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	onLoadModule('system/weather', (module: TcsModule) => {
		module.createFunction('startClientWeather', () => {
			SetWeatherOwnedByNetwork(false);
			ClearTimecycleModifier();
			AnimpostfxStopAll();
			setWeather(Weather.CLEAR);

			TCS.callbacks.TriggerServerCallback('weather:askWeather', (current: Weather) => setWeather(current), {});
		});

		const eventListener = new TcsEventListener(TcsEventsList.WEATHER_SET, (weather: Weather) => {
			setWeather(weather);
		});
		TCS.eventManager.addEventHandler(eventListener);

		function setWeather(weather: Weather) {
			ClearOverrideWeather();
			ClearWeatherTypePersist();
			SetWeatherTypePersist(weather);
			SetWeatherTypeNow(weather);
			SetWeatherTypeNowPersist(weather);
			SetWind(0.1);
		}
	});
})();
