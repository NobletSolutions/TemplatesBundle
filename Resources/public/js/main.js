Event.observe(window, 'load', function(event)
{
    activateFilters();
    activateSessionMenu();
    activateMessages();
    activatePanelSwitches();
    activateAjaxLoaders();
    activateDraggables();
    activateAjaxForms();
    activateTabs();
    activatePopups();
});

Event.observe(document, 'hinclude:success', function(event)
{
    activatePanelSwitches();
    activateDraggables();
    activateAutocompleters();
    activateAjaxForms();
    activateFilters();
});

Event.observe(document, 'ajaxUpdateSuccess', function(event)
{
    activatePanelSwitches();
    activateDraggables();
    activateAutocompleters();
    activateAjaxForms();
    activateFilters();
});