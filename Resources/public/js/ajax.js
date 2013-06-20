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
                
                target.update('<img src="/bundles/nstemplates/images/ajax-loader.gif" alt="" class="ajaxLoader" />');
                new Ajax.Updater(target, url);
            });
            
            loader.active = true;
        }
    });
};