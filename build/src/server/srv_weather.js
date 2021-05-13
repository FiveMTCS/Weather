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
    let currentMeteo = Weather.CLEAR;
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
            currentMeteo =
                meteoAvailable[Math.floor(Math.random() * meteoAvailable.length)];
            setClientsWeather(currentMeteo);
            module.printDebug('Set weather : ' + currentMeteo);
            TCS.threads.createThread(module, timeRandomMeteo, () => {
                const filtredMeteos = meteoAvailable.filter((weather) => weather !== currentMeteo);
                currentMeteo =
                    filtredMeteos[Math.floor(Math.random() * filtredMeteos.length)];
                setClientsWeather(currentMeteo);
                module.printDebug('Set weather : ' + currentMeteo);
            });
        });
        function setClientsWeather(currentMeteo) {
            return __awaiter(this, void 0, void 0, function* () {
                const setWeatherEvent = {
                    target: TcsEventTarget.CLIENT,
                    targetId: -1,
                    eventType: TcsEventsList.WEATHER_SET,
                    data: {
                        newWeather: currentMeteo,
                    },
                };
                TCS.eventManager.sendEvent(setWeatherEvent);
            });
        }
        TCS.callbacks.RegisterServerCallback('weather:askWeather', (source, args) => {
            return currentMeteo;
        });
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J2X3dlYXRoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3JjL21vZHVsZXMvc3lzdGVtL3dlYXRoZXIvc2VydmVyL3Nydl93ZWF0aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7Ozs7Ozs7O0FBRUgsQ0FBQztJQUNBLElBQUksWUFBWSxHQUFZLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDMUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBaUIsRUFBRSxFQUFFO1FBQ3BELE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO1lBQ2pELE1BQU0sZUFBZSxHQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQy9DLE1BQU0sY0FBYyxHQUFjO2dCQUNqQyxPQUFPLENBQUMsUUFBUTtnQkFDaEIsT0FBTyxDQUFDLEtBQUs7Z0JBQ2IsT0FBTyxDQUFDLFFBQVE7Z0JBQ2hCLE9BQU8sQ0FBQyxNQUFNO2dCQUNkLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixPQUFPLENBQUMsS0FBSztnQkFDYixPQUFPLENBQUMsUUFBUTtnQkFDaEIsT0FBTyxDQUFDLElBQUk7Z0JBQ1osT0FBTyxDQUFDLElBQUk7Z0JBQ1osT0FBTyxDQUFDLFNBQVM7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPO2dCQUNmLE9BQU8sQ0FBQyxJQUFJO2FBQ1osQ0FBQztZQUVGLFlBQVk7Z0JBQ1gsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25FLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFFbkQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUU7Z0JBQ3RELE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQzFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FDOUMsQ0FBQztnQkFFRixZQUFZO29CQUNYLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFFakUsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFNBQWUsaUJBQWlCLENBQUMsWUFBcUI7O2dCQUNyRCxNQUFNLGVBQWUsR0FBbUI7b0JBQ3ZDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTTtvQkFDN0IsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDWixTQUFTLEVBQUUsYUFBYSxDQUFDLFdBQVc7b0JBQ3BDLElBQUksRUFBRTt3QkFDTCxVQUFVLEVBQUUsWUFBWTtxQkFDeEI7aUJBQ0QsQ0FBQztnQkFFRixHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QyxDQUFDO1NBQUE7UUFFRCxHQUFHLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUNuQyxvQkFBb0IsRUFDcEIsQ0FBQyxNQUFjLEVBQUUsSUFBUyxFQUFFLEVBQUU7WUFDN0IsT0FBTyxZQUFZLENBQUM7UUFDckIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==