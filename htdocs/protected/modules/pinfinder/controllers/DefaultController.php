<?php

class DefaultController extends Controller
{
  public function actionIndex()
  {
    $basePath = $this->module->basePath;

    $assetUrl = Yii::app()->assetManager->publish($basePath, false, -1, true);

    Yii::app()->clientScript->registerScriptFile($assetUrl . '/js/pinfinder.js');

    $this->render('index');
  }
}
