Event.observe(window, 'load', function(event)
{
    activateFilters();
    activateSessionMenu();
    activateNavigationMenu();
    activateMessages();
    activatePanelSwitches();
    activateAjaxLoaders();
    activateDraggables();
});

Event.observe(document, 'hinclude:success', function(event)
{
    activatePanelSwitches();
    activateAjaxLoaders();
    activateDraggables();
    activateAutocompleters();
});

Event.observe(document, 'ajaxUpdateSuccess', function(event)
{
    activatePanelSwitches();
    activateAjaxLoaders();
    activateDraggables();
    activateAutocompleters();
});