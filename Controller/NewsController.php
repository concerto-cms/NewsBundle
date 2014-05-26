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
        return $this->render('ConcertoCmsNewsBundle:News:index.html.twig', array('news' => $pages));
    }

    /**
     * @return News
     */
    private function getNewsService()
    {
        return $this->get('concerto_cms_news.news');
    }
}
