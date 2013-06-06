<?php

namespace NS\TemplatesBundle\Form;

use \Symfony\Component\Form\Extension\Core\Type\DateType;
use \Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\DataTransformer\DateTimeToLocalizedStringTransformer;

/**
 * A Date picker text type
 *
 * @author gnat
 */
class DatePickerType extends TextType
{
    const DEFAULT_FORMAT = \IntlDateFormatter::MEDIUM;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $dateFormat = self::DEFAULT_FORMAT;
        $timeFormat = \IntlDateFormatter::NONE;
        $calendar   = \IntlDateFormatter::GREGORIAN;
        $pattern    = 'Y-M-d';
        
        $builder->addViewTransformer(new DateTimeToLocalizedStringTransformer(
                null,
                null,
                $dateFormat,
                $timeFormat,
                $calendar,
                $pattern
            ));
    }

    public function getName()
    {
        return 'datepicker';
    }
}
