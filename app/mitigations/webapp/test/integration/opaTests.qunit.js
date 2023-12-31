sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/mitigations/test/integration/FirstJourney',
		'ns/mitigations/test/integration/pages/MitigationsList',
		'ns/mitigations/test/integration/pages/MitigationsObjectPage',
		'ns/mitigations/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, MitigationsList, MitigationsObjectPage, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/mitigations') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMitigationsList: MitigationsList,
					onTheMitigationsObjectPage: MitigationsObjectPage,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);