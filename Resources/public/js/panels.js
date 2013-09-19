var activateMessages = function()
{
    var messages = $$('div.bannerMessage');
    if(messages)
    {
        messages.each(function(m)
        {
            var b = m.down('button');
            b.observe('click', function()
            {
                new Effect.Morph(m,{
                    style: 'height:0; opacity: 0;',
                    duration: 0.8,
                    afterFinish: function()
                    {
                        m.remove();
                    }
                });
            });
        });
    }    
};

var activatePanelSwitches = function()
{
    $$('a.panelSwitch').each(function(a)
    {
        if(!a.activated)
        {
            var panel = $(a.getAttribute('data-target'));
            
            if(panel)
            {
                a.observe('click', function(ev)
                {
                    options = {
                        duration: 0.5,
                        afterFinish: function()
                        {
                            panel.toggleClassName('open');
                            a.toggleClassName('open');
                        }
                    };
                    
                    if(panel.hasClassName('open'))
                        Effect.BlindUp(panel, options);
                    else
                        Effect.BlindDown(panel, options);
                    
                    Event.stop(ev);
                    return false;
                });
                
                if(!panel.hasClassName('open'))
                    panel.hide();
            }
            a.activated = true;
        }        
    });
    
    $$('a.panelUpdater').each(function(a)
    {
       if(!a.activated)
       {
           var target = $(a.getAttribute('data-target'));
           var source = $(a.getAttribute('data-source'));
           
           if(target && source)
           {
               a.observe('click', function(ev)
               {
                   if(target.open)
                       target.source.update(target.down());
                   
                   target.update(source.down());
                   target.source = source;
                   
                   target.open = true;
                   
                   Event.stop(ev);
                   return false;
               });
           }
           
           a.activated = true;
       }
    });
};

var activateDraggables = function()
{
    $$('.draggable').each(function(element)
    {
        if(!element.isDraggable)
        {
            new Draggable(element, {
                handle: element.down('.panelTitle')?element.down('.panelTitle'):false,
                starteffect: false,
                endeffect:false
            });
            
            element.isDraggable = true;
        };
    });
};