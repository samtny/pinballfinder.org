<?php /* @var $this Controller */ ?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/base.css" media="screen, projection" />

	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>
<body>
  <div class="container" id="page">
    <header>
      <h1 id="logo"><?php echo CHtml::encode(Yii::app()->name); ?></h1>
      <nav id="mainmenu">
        <?php $this->widget('zii.widgets.CMenu',array(
          'items'=>array(
            array('label'=>'Home', 'url'=>array('/site/index')),
            array('label'=>'Blog', 'url'=>array('/site/blog')),
            array('label'=>'FAQ', 'url'=>array('/site/page', 'view'=>'faq')),
            array('label'=>'About', 'url'=>array('/site/page', 'view'=>'about')),
            array('label'=>'Contact', 'url'=>array('/site/contact')),
          ),
        )); ?>
      </nav>
    </header>
    <section id="main">
      <?php if(isset($this->breadcrumbs)):?>
        <?php $this->widget('zii.widgets.CBreadcrumbs', array(
          'links'=>$this->breadcrumbs,
        )); ?><!-- breadcrumbs -->
      <?php endif?>
      <?php echo $content; ?>
    </section>
    <footer>
      Copyright &copy; <?php echo date('Y'); ?> by Sam Thompson.<br/>
      All Rights Reserved.<br/>
      <?php echo Yii::powered(); ?>
    </footer>
  </div>
</body>
</html>
