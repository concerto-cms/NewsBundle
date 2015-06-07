<?php
/**
 * Created by PhpStorm.
 * User: mathi_000
 * Date: 5/06/2015
 * Time: 13:51
 */

namespace ConcertoCms\NewsBundle\Menu;

use ConcertoCms\AdminBundle\Event\ConfigureMenuEvent;

class MenuBuilder
{
    public function onMenuBuild(ConfigureMenuEvent $event) {
        $menu = $event->getMenu();
        $menu->addChild('News', array('route' => 'concerto_cms_news'));

    }

}