<?php
/**
 * Created by PhpStorm.
 * User: mathieu
 * Date: 25/05/14
 * Time: 23:12
 */

namespace ConcertoCms\NewsBundle\Extension;

use ConcertoCms\CoreBundle\Event\MenuEvent;

class MainMenuListener
{
    public function onBuild(MenuEvent $event)
    {

        $content = $event->addChild(
            "News",
            array(
                'route' => 'concerto_cms_news'
            )
        );

    }
}
