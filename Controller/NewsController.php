<?php

namespace ConcertoCms\NewsBundle\Controller;

use ConcertoCms\NewsBundle\Document\NewsList;
use ConcertoCms\NewsBundle\Service\NewsManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class NewsController extends Controller
{
    /**
     * @return NewsManager
     */
    private function getNewsService()
    {
        return $this->get('concerto_cms_news.newsmanager');
    }

    public function indexAction()
    {
        return $this->render('ConcertoCmsNewsBundle:News:index.html.twig');
    }
}
