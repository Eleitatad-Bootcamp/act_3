/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/training/exercise1tatad/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
