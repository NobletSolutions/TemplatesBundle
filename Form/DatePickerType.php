<?php

namespace NS\TemplatesBundle\Form;

use \Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * A Date picker text type
 *
 * @author gnat
 */
class DatePickerType extends TextType
{
    public function getName()
    {
        return 'datepicker';
    }
}
