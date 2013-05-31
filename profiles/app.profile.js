var profile = {

	basePath : '../src/',
	action : 'release',
	cssOptimize : 'comments',
	mini : true,
	optimize : 'closure',
	layerOptimize : 'closure',
	stripConsole : 'none',
	selectorEngine : 'acme',

	layers : {
		'dojo/dojo' : {
			include : ['dojo/i18n', 'dojo/domReady', 'app/main', 'app/run', "dijit/layout/BorderContainer", "dijit/Toolbar", "dijit/form/ComboButton", "dijit/Menu", "dijit/PopupMenuItem", "dijit/MenuItem", "dijit/MenuSeparator", "dijit/CheckedMenuItem", "dijit/ToolbarSeparator", "dijit/form/Button", "dijit/form/DropDownButton", "app/widget/render/Pane", "app/widget/editor/Container"],
			boot : true,
			customBase : true
		}
	},

	staticHasFeatures : {
		// The trace & log APIs are used for debugging the loader, so we do not need them in the build.
		'dojo-trace-api' : 0,
		'dojo-log-api' : 0,

		// This causes normally private loader data to be exposed for debugging. In a release build, we do not need
		// that either.
		'dojo-publish-privates' : 0,

		// This application is pure AMD, so get rid of the legacy loader.
		'dojo-sync-loader' : 0,

		// `dojo-xhr-factory` relies on `dojo-sync-loader`, which we have removed.
		'dojo-xhr-factory' : 0,

		// We are not loading tests in production, so we can get rid of some test sniffing code.
		'dojo-test-sniff' : 0
	}
};
