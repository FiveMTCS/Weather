"use strict";
/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function () {
    let serverWeather = Weather.CLEAR;
    onLoadModule('system/weather', (module) => {
        module.createFunction('launchServerWeather', () => {
            const timeRandomMeteo = 90 * 60 * 1000;
            const meteoAvailable = [
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
                const filtredMeteos = meteoAvailable.filter((weather) => weather !== serverWeather);
                serverWeather =
                    filtredMeteos[Math.floor(Math.random() * filtredMeteos.length)];
                setClientsWeather();
                module.printDebug('Set weather : ' + serverWeather);
            });
        });
        function setClientsWeather() {
            return __awaiter(this, void 0, void 0, function* () {
                const setWeatherEvent = {
                    target: TcsEventTarget.CLIENT,
                    targetId: -1,
                    eventType: TcsEventsList.WEATHER_SET,
                    data: {
                        newWeather: serverWeather,
                    },
                };
                TCS.eventManager.sendEvent(setWeatherEvent);
            });
        }
        TCS.callbacks.RegisterServerCallback('weather:askWeather', (source, args) => {
            return serverWeather;
        });
        module.createFunction('setWeather', (nWeather) => {
            serverWeather = nWeather;
            setClientsWeather();
        });
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J2X3dlYXRoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3JjL21vZHVsZXMvc3lzdGVtL3dlYXRoZXIvc2VydmVyL3Nydl93ZWF0aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7Ozs7Ozs7O0FBRUgsQ0FBQztJQUNBLElBQUksYUFBYSxHQUFZLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDM0MsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBaUIsRUFBRSxFQUFFO1FBQ3BELE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO1lBQ2pELE1BQU0sZUFBZSxHQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQy9DLE1BQU0sY0FBYyxHQUFjO2dCQUNqQyxPQUFPLENBQUMsUUFBUTtnQkFDaEIsT0FBTyxDQUFDLEtBQUs7Z0JBQ2IsT0FBTyxDQUFDLFFBQVE7Z0JBQ2hCLE9BQU8sQ0FBQyxNQUFNO2dCQUNkLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixPQUFPLENBQUMsS0FBSztnQkFDYixPQUFPLENBQUMsUUFBUTtnQkFDaEIsT0FBTyxDQUFDLElBQUk7Z0JBQ1osT0FBTyxDQUFDLElBQUk7Z0JBQ1osT0FBTyxDQUFDLFNBQVM7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPO2dCQUNmLE9BQU8sQ0FBQyxJQUFJO2FBQ1osQ0FBQztZQUVGLGFBQWE7Z0JBQ1osY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25FLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsQ0FBQztZQUVwRCxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRTtnQkFDdEQsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FDMUMsQ0FBQyxPQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssYUFBYSxDQUMvQyxDQUFDO2dCQUVGLGFBQWE7b0JBQ1osYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUVqRSxpQkFBaUIsRUFBRSxDQUFDO2dCQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFlLGlCQUFpQjs7Z0JBQy9CLE1BQU0sZUFBZSxHQUFtQjtvQkFDdkMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNO29CQUM3QixRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNaLFNBQVMsRUFBRSxhQUFhLENBQUMsV0FBVztvQkFDcEMsSUFBSSxFQUFFO3dCQUNMLFVBQVUsRUFBRSxhQUFhO3FCQUN6QjtpQkFDRCxDQUFDO2dCQUVGLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdDLENBQUM7U0FBQTtRQUVELEdBQUcsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQ25DLG9CQUFvQixFQUNwQixDQUFDLE1BQWMsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUM3QixPQUFPLGFBQWEsQ0FBQztRQUN0QixDQUFDLENBQ0QsQ0FBQztRQUVGLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBaUIsRUFBRSxFQUFFO1lBQ3pELGFBQWEsR0FBRyxRQUFRLENBQUM7WUFDekIsaUJBQWlCLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9