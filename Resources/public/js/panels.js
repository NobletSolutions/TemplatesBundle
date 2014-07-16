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

var activatePopups = function()
{
    $$('body')[0].insert('<div id="modalWindow" style="display:none;"><a id="modalClose">X</a><div id="modalContent"></div></div>');
    $('modalClose').observe('click', function(event)
    {
        $('modalWindow').hide();
    });

    $$('a.popup').each(function(a)
    {
        a.observe('click', function(event)
        {
            new Ajax.Updater('modalContent', a.href, {
                onComplete: function()
                {
                    $('modalWindow').show();
                }
            });

            Event.stop(event);
            return false;
        });
    });

    $$('a.inlinePopup').each(function(a)
    {
        a.observe('click', function(event)
        {
            var source = $(a.readAttribute('data-source'));

            $('modalContent').update(source.innerHTML);
            $('modalWindow').show();

            Event.stop(event);
            return false;
        });
    });
}

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

var activateTabs = function()
{
    $$('div.tab').each(function(t)
    {
        if(!t.hasClassName('active'))
            t.hide();
    });
    
    $$('div.tabs a').each(function(a)
    {
        a.observe('click', function()
        {
            if(!a.hasClassName('active'))
            {
                var id = a.getAttribute('data-tgt');
                $(id).show();
                a.addClassName('active');
                
                a.up('ul').select('a').each(function(r)
                {
                    if(r != a)
                    {
                        r.removeClassName('active');
                    }
                });
                
                a.up('div.tabs').up().childElements().grep(new Selector('div.tab:not([id='+id+'])')).each(function(el)
                {
                    el.hide();
                });
            }
        });
    });
};
