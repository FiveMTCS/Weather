/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	onLoadModule('system/weather', (module: TcsModule) => {
		let currentWeather: Weather;
		module.createFunction('launchClientWeather', () => {
			SetWeatherOwnedByNetwork(false);
			ClearTimecycleModifier();
			AnimpostfxStopAll();
			currentWeather = Weather.CLEAR;

			TCS.callbacks.TriggerServerCallback(
				'weather:askWeather',
				(currentMeteo: Weather) => {
					currentWeather = currentMeteo;
					setWeather();
				},
				{}
			);
		});

		const eventListener = new TcsEventListener(
			TcsEventsList.WEATHER_SET,
			({ newWeather }: { newWeather: Weather }) => {
				currentWeather = newWeather;
				setWeather();
			}
		);
		TCS.eventManager.addEventHandler(eventListener);

		function setWeather() {
			ClearOverrideWeather();
			ClearWeatherTypePersist();
			SetWeatherTypePersist(currentWeather);
			SetWeatherTypeNow(currentWeather);
			SetWeatherTypeNowPersist(currentWeather);
			SetWind(0.1);
		}
	});
})();
