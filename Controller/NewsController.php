<?php

namespace ConcertoCms\NewsBundle\Controller;

use ConcertoCms\NewsBundle\Document\NewsList;
use ConcertoCms\NewsBundle\Service\News;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class NewsController extends Controller
{
    public function indexAction()
    {
        $pages = $this->getNewsService()->getNewsPages();
        /**
         * @var $page NewsList
         */
        foreach ($pages as $page)
        {
            echo $page->getId() . "<br />";
        }


        return $this->render('ConcertoCmsNewsBundle:News:index.html.twig', array('name' => $name));
    }

    /**
     * @return News
     */
    private function getNewsService()
    {
        return $this->get('concerto_cms_news.news');
    }
}
