var activateAjaxLoaders = function()
{
    $$('.gsAjaxLoader').each(function(loader){
        if(!loader.active)
        {
            var levent = loader.getAttribute('data-loaderEvent');
            if(!levent)
                levent = 'click';
            
            loader.observe(levent, function(event)
            {
                Event.stop(event);
                var target = $(loader.getAttribute('data-responseTarget'));
                var url    = loader.getAttribute('href');
                
                
                new Ajax.Updater(target, url, {
                    evalScripts: true,
                    onSuccess: function() {
                        var successEvent = new CustomEvent('ajaxUpdateSuccess');
                        document.dispatchEvent(successEvent);
                    }
                });
            });
            
            loader.active = true;
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