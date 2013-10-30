Event.observe(window, 'load', function(event)
{
    activateFilters();
    activateSessionMenu();
    activateMessages();
    activatePanelSwitches();
    activateAjaxLoaders();
    activateDraggables();
    activateAjaxForms();
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