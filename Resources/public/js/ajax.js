var activateAjaxLoaders = function()
{
    document.observe('click', function(event)
    {
        var loader = event.findElement('.gsAjaxLoader');
        if(loader)
        {
            Event.stop(event);
            var target = $(loader.getAttribute('data-responseTarget'));
            var method = $(loader.getAttribute('data-method'))?$(loader.getAttribute('data-method')):'get';
            var url    = loader.getAttribute('href');
            target.update('<img src="/bundles/nstemplates/images/ajax-loader.gif" alt="" class="ajaxLoader" />');
            
            new Ajax.Updater(target, url, {
                method: method,
                evalScripts: true,
                onSuccess: function() {
                    var successEvent = new CustomEvent('ajaxUpdateSuccess');
                    document.dispatchEvent(successEvent);
                }
            });            
        }
    });
};

var activateAjaxForms = function()
{
    $$('.gsAjaxForm').each(function(fm)
    {
        if(!fm.active)
        {
            fevent = 'submit';
            
            fm.observe(fevent, function(event)
            {
                Event.stop(event);
                var target = $(fm.getAttribute('data-responseTarget'));
                var url    = fm.getAttribute('action');
                
                target.update('<img src="/bundles/nstemplates/images/ajax-loader.gif" alt="" class="ajaxLoader" />');
                fm.request({
                    onSuccess: function(r)
                    {
                        target.update(r.responseText);
                        var successEvent = new CustomEvent('ajaxUpdateSuccess');
                        document.dispatchEvent(successEvent);
                    }
                })
            });
            
            fm.active = true;
        }
    });
};