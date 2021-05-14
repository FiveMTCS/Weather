/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	let serverWeather: Weather = Weather.CLEAR;
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

			serverWeather =
				meteoAvailable[Math.floor(Math.random() * meteoAvailable.length)];
			setClientsWeather();
			module.printDebug('Set weather : ' + serverWeather);

			TCS.threads.createThread(module, timeRandomMeteo, () => {
				const filtredMeteos = meteoAvailable.filter(
					(weather: Weather) => weather !== serverWeather
				);

				serverWeather =
					filtredMeteos[Math.floor(Math.random() * filtredMeteos.length)];

				setClientsWeather();
				module.printDebug('Set weather : ' + serverWeather);
			});
		});

		async function setClientsWeather() {
			const setWeatherEvent: TcsClientEvent = {
				target: TcsEventTarget.CLIENT,
				targetId: -1,
				eventType: TcsEventsList.WEATHER_SET,
				data: {
					newWeather: serverWeather,
				},
			};

			TCS.eventManager.sendEvent(setWeatherEvent);
		}

		TCS.callbacks.RegisterServerCallback(
			'weather:askWeather',
			(source: number, args: any) => {
				return serverWeather;
			}
		);

		module.createFunction('setWeather', (nWeather: Weather) => {
			serverWeather = nWeather;
			setClientsWeather();
		});
	});
})();
