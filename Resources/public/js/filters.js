activateFilters = function()
{
    var filters = $$('div.filters');
    
    filters.each(function(el)
    {
        if(!el.active)
        {
            var f  = el.select('form');
            var sw = el.down('a.filterSwitch');
            
            if(f && sw)
            {
                sw.observe('click', function(ev)
                {
                    var open = {
                        duration: 0.5,
                        afterFinish: function()
                        {
                            el.addClassName('open').removeClassName('closed');
                        }
                    };
                    
                    var closed = {
                        duration: 0.5,
                        afterFinish: function()
                        {
                            el.removeClassName('open').addClassName('closed');
                        }
                    };
                    
                    if(el.hasClassName('closed'))
                    {
                        f.each(function(fe)
                        {
                            Effect.BlindDown(fe, open);
                        });
                    }
                    else
                    {
                        f.each(function(fe)
                        {
                            Effect.BlindUp(fe, closed); 
                        });
                    }
                    
                    Event.stop(ev);
                });
                
                if(!el.hasClassName('open'))
                {
                    el.addClassName('closed');
                    f.each(function(fe)
                    {
                        fe.hide();
                    });
                }
                
                el.active = true;
            }
        }
    });
};