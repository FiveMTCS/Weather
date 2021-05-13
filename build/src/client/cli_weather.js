"use strict";
/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */
(function () {
    onLoadModule('system/weather', (module) => {
        let currentWeather;
        module.createFunction('launchClientWeather', () => {
            SetWeatherOwnedByNetwork(false);
            ClearTimecycleModifier();
            AnimpostfxStopAll();
            currentWeather = Weather.CLEAR;
            TCS.callbacks.TriggerServerCallback('weather:askWeather', (currentMeteo) => {
                currentWeather = currentMeteo;
                setWeather();
            }, {});
        });
        const eventListener = new TcsEventListener(TcsEventsList.WEATHER_SET, ({ newWeather }) => {
            currentWeather = newWeather;
            setWeather();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpX3dlYXRoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3JjL21vZHVsZXMvc3lzdGVtL3dlYXRoZXIvY2xpZW50L2NsaV93ZWF0aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHO0FBRUgsQ0FBQztJQUNBLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQWlCLEVBQUUsRUFBRTtRQUNwRCxJQUFJLGNBQXVCLENBQUM7UUFDNUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEVBQUU7WUFDakQsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsc0JBQXNCLEVBQUUsQ0FBQztZQUN6QixpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCLGNBQWMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBRS9CLEdBQUcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQ2xDLG9CQUFvQixFQUNwQixDQUFDLFlBQXFCLEVBQUUsRUFBRTtnQkFDekIsY0FBYyxHQUFHLFlBQVksQ0FBQztnQkFDOUIsVUFBVSxFQUFFLENBQUM7WUFDZCxDQUFDLEVBQ0QsRUFBRSxDQUNGLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sYUFBYSxHQUFHLElBQUksZ0JBQWdCLENBQ3pDLGFBQWEsQ0FBQyxXQUFXLEVBQ3pCLENBQUMsRUFBRSxVQUFVLEVBQTJCLEVBQUUsRUFBRTtZQUMzQyxjQUFjLEdBQUcsVUFBVSxDQUFDO1lBQzVCLFVBQVUsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUNELENBQUM7UUFDRixHQUFHLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVoRCxTQUFTLFVBQVU7WUFDbEIsb0JBQW9CLEVBQUUsQ0FBQztZQUN2Qix1QkFBdUIsRUFBRSxDQUFDO1lBQzFCLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLENBQUM7SUFDRixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==