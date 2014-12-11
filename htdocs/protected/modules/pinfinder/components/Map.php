<?php

Yii::import('system.web.widgets.CWidget');

class Map extends CWidget
{
  public $api_key;

  public function run()
  {
    $api_key = Yii::app()->getModule('pinfinder')->api_key;

    Yii::app()->clientScript->registerScriptFile('https://maps.googleapis.com/maps/api/js?key=' . $api_key . '&sensor=false');

    $this->render('map');
  }
}
