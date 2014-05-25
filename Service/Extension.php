<?php
/**
 * Created by PhpStorm.
 * User: Mathieu
 * Date: 24/05/14
 * Time: 8:57
 */

namespace ConcertoCms\NewsBundle\Service;


use ConcertoCms\CoreBundle\Extension\ConcertoExtension;
use Knp\Menu\MenuItem;

class Extension extends ConcertoExtension {
    public function __construct()
    {
    }

    public function buildTopMenu(MenuItem $root)
    {
        $content = $root->addChild(
            "News",
            array(
                'route' => 'concerto_cms_news'
            )
        );
    }
}
