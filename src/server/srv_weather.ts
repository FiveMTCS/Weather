/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	onLoadModule('system/weather', (module: TcsModule) => {
		let weather: Weather;

		module.createFunction('startServerWeather', () => {
			const timeRandomWeather: number = 90 * 60 * 1000;
			const availableWeather: Weather[] = [
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

			let randomId: number = Math.random() * availableWeather.length;
			weather = availableWeather[Math.floor(randomId)];
			setClientsWeather();
			module.printDebug('Set weather : ' + weather);

			TCS.threads.createThread(module, timeRandomWeather, () => {
				const filtredWeather = availableWeather.filter((filter: Weather) => weather !== filter);
				randomId = Math.random() * filtredWeather.length;
				weather = filtredWeather[Math.floor(randomId)];
				setClientsWeather();
				module.printDebug('Set weather : ' + weather);
			});
		});

		async function setClientsWeather() {
			const setWeatherEvent: TcsClientEvent = {
				target: TcsEventTarget.CLIENT,
				targetId: -1,
				eventType: TcsEventsList.WEATHER_SET,
				data: weather,
			};

			TCS.eventManager.sendEvent(setWeatherEvent);
		}

		TCS.callbacks.RegisterServerCallback('weather:askWeather', (source: number, args: any) => {
			return weather;
		});

		module.createFunction('setWeather', (nWeather: Weather) => {
			weather = nWeather;
			setClientsWeather();
		});
	});
})();
