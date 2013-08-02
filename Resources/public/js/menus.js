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