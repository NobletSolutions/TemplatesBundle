Event.observe(window, 'load', function(event)
{
    activateFilters();
    activateSessionMenu();
    activateMessages();
    activatePanelSwitches();
    activateAjaxLoaders();
    activateDraggables();
});

Event.observe(document, 'hIncludeSuccess', function(event)
{
    activatePanelSwitches();
    activateAjaxLoaders();
    activateDraggables();
});

Event.observe(document, 'ajaxUpdateSuccess', function(event)
{
    activatePanelSwitches();
    activateAjaxLoaders();
    activateDraggables();
});