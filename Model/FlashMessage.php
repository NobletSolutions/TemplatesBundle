<?php

namespace NS\TemplatesBundle\Model;

class FlashMessage
{
    private $header;
    private $title;
    private $message;
    private $buttonMessage;
    
    public function __construct($header = null, $title = null, $message = null, $buttonMessage = null)
    {
        $this->header        = $header;
        $this->title         = $title;
        $this->message       = $message;
        $this->buttonMessage = $buttonMessage;
    }
    
    public function getTitle()
    {
        return $this->title;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function getMessage()
    {
        return $this->message;
    }

    public function setMessage($message)
    {
        $this->message = $message;
    }

    public function getButtonMessage()
    {
        return $this->buttonMessage;
    }

    public function setButtonMessage($buttonMessage)
    {
        $this->buttonMessage = $buttonMessage;
    }

    public function getHeader()
    {
        return $this->header;
    }

    public function setHeader($header)
    {
        $this->header = $header;
    }
}
