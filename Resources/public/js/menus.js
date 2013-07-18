activateSessionMenu = function()
{
    var sm = $('session_menu');
    
    if(sm)
    {
        var t = sm.down('#session_trigger');
        
        t.observe('click', function(ev)
        {
            options = {
                duration: 0.5,
                scaleContent: false,
                afterFinish: function()
                {
                    sm.toggleClassName('open').toggleClassName('closed');
                }
            };
            
            if(sm.hasClassName('closed'))
                sm.morph('width:20%', options);
            else
                sm.morph('width:0%', options);
            
            Event.stop(ev);
        });
        
        sm.toggleClassName('closed').setStyle({width:0});
    }
};

activateNavigationMenu = function()
{
    var navs = new Array();
    $$('ul.nav ul').each(function(nav)
    {
        navs.push(nav);
        var trigger = new Element('a', {'class':'menuExpander', 'title':'expand'});
        trigger.update('expand');
        trigger.observe('click', function(click)
        {
            trigger.previous('ul').toggleClassName('expanded');
            trigger.toggleClassName('expanded');
            navs.each(function(n)
            {
                if(n != nav)
                    n.removeClassName('expanded');
            });
        });
        nav.up('li').insert({'bottom':trigger});
    });
};