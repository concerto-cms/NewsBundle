<?php

namespace ConcertoCms\NewsBundle\Controller;

use ConcertoCms\NewsBundle\Document\NewsList;
use ConcertoCms\NewsBundle\Service\News;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class NewsController extends Controller
{
    public function indexAction()
    {
        $listpages = $this->getNewsService()->getNewsPages();
        $categories = array();
        $items = array();
        /**
         * @var $lp NewsList
         */
        foreach ($listpages as $lp) {
            $categories[] = $lp;
            $this->populatePageData($items, $lp->getRoute());
        }

        return $this->render(
            'ConcertoCmsNewsBundle:News:index.html.twig',
            array('categories' => $categories, "news" => $items)
        );
    }

    /**
     * @return News
     */
    private function getNewsService()
    {
        return $this->get('concerto_cms_news.news');
    }

    /**
     * @param array $pageData
     * @param RouteInterface $route
     */
    protected function populatePageData(&$pageData, $route)
    {
        $children = $route->getChildren();
        /**
         * @var $route RouteInterface
         */
        foreach ($children as $child) {
            $pageData[] = $child->getContent();
        }
    }
}
