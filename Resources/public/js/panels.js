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
                });
                
                panel.hide();
            }
            a.activated = true;
        }
        
    });
};