Event.observe(window, 'load', function(event)
{
    activateFilters();
    activateSessionMenu();
    activateMessages();
    activatePanelSwitches();
});

Event.observe(document, 'hIncludeSuccess', function(event)
{
    activatePanelSwitches();
});