/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	let currentMeteo: Weather = Weather.CLEAR;
	onLoadModule('system/weather', (module: TcsModule) => {
		module.createFunction('launchServerWeather', () => {
			const timeRandomMeteo: number = 90 * 60 * 1000;
			const meteoAvailable: Weather[] = [
				Weather.BLIZZARD,
				Weather.CLEAR,
				Weather.CLEARING,
				Weather.CLOUDS,
				Weather.EXTRASUNNY,
				Weather.FOGGY,
				Weather.OVERCAST,
				Weather.RAIN,
				Weather.SMOG,
				Weather.SNOWLIGHT,
				Weather.THUNDER,
				Weather.XMAS,
			];

			currentMeteo =
				meteoAvailable[Math.floor(Math.random() * meteoAvailable.length)];
			setClientsWeather(currentMeteo);
			module.printDebug('Set weather : ' + currentMeteo);

			TCS.threads.createThread(module, timeRandomMeteo, () => {
				const filtredMeteos = meteoAvailable.filter(
					(weather: Weather) => weather !== currentMeteo
				);

				currentMeteo =
					filtredMeteos[Math.floor(Math.random() * filtredMeteos.length)];

				setClientsWeather(currentMeteo);
				module.printDebug('Set weather : ' + currentMeteo);
			});
		});

		async function setClientsWeather(currentMeteo: Weather) {
			const setWeatherEvent: TcsClientEvent = {
				target: TcsEventTarget.CLIENT,
				targetId: -1,
				eventType: TcsEventsList.WEATHER_SET,
				data: {
					newWeather: currentMeteo,
				},
			};

			TCS.eventManager.sendEvent(setWeatherEvent);
		}

		TCS.callbacks.RegisterServerCallback(
			'weather:askWeather',
			(source: number, args: any) => {
				return currentMeteo;
			}
		);
	});
})();
