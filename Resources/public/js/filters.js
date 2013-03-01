activateFilters = function()
{
    var filters = $$('div.filters');
    
    filters.each(function(el)
    {
        var f  = el.down('form');
        var sw = el.down('a.filterSwitch');
        
        sw.observe('click', function(ev)
        {
            options = {
                duration: 0.5,
                afterFinish: function()
                {
                    el.toggleClassName('open').toggleClassName('closed');
                }
            };
            
            if(el.hasClassName('closed'))
                Effect.BlindDown(f, options);
            else
                Effect.BlindUp(f, options);            
            
            Event.stop(ev);
        });
        
        el.addClassName('closed');
        f.hide();
    });
};