/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

var weatherModuleInfos: TcsModuleInfos | null = null;

loadTcsModuleInfos(() => {
	weatherModuleInfos = {
		moduleType: TcsModuleTypes.SYSTEM,
		moduleName: 'weather',
		version: '1.1.0',
	};
});
