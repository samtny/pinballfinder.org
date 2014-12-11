<?php

Yii::import('system.web.widgets.CWidget');

class Map extends CWidget
{
  public function run()
  {
    $this->render('map');
  }
}
