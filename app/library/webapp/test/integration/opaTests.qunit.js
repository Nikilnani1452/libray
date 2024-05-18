sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/satinfotech/cloudapps/library/test/integration/FirstJourney',
		'com/satinfotech/cloudapps/library/test/integration/pages/LibraryList',
		'com/satinfotech/cloudapps/library/test/integration/pages/LibraryObjectPage'
    ],
    function(JourneyRunner, opaJourney, LibraryList, LibraryObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/satinfotech/cloudapps/library') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheLibraryList: LibraryList,
					onTheLibraryObjectPage: LibraryObjectPage
                }
            },
            opaJourney.run
        );
    }
);