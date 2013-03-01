Event.observe(window, 'load', function(event)
{
    activateFilters();
    activateSessionMenu();
    
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
});