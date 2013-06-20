Event.observe(window, 'load', function(event)
{
    activateFilters();
    activateSessionMenu();
    activateMessages();
    activatePanelSwitches();
    activateAjaxLoaders();
});

Event.observe(document, 'hIncludeSuccess', function(event)
{
    activatePanelSwitches();
    activateAjaxLoaders();
});