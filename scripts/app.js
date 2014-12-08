requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app',
        helper: '../helper'
    }
});

// Start the main app logic.
requirejs(['angular', 'jquery', 'app/index'],
    function   (angular, $, index) {
        console.log(angular);
    });