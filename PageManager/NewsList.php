<?php
/**
 * Created by PhpStorm.
 * User: Mathieu
 * Date: 24/05/14
 * Time: 8:35
 */

namespace ConcertoCms\NewsBundle\PageManager;


use ConcertoCms\CoreBundle\PageManager\Page;

class NewsList extends Page {
    public function create($params)
    {
        $page = new \ConcertoCms\NewsBundle\Document\NewsList();
        $this->populate($page, $params);
        return $page;
    }

    public function toJSON($document)
    {
        // TODO: Implement toJSON() method.
    }

    public function getType()
    {
        return "ConcertoCmsNewsBundle:NewsList";
    }

    public function getJSView()
    {
        return "View.PageContent_Page";
    }

    public function getLabel()
    {
        return "Newslist page";
    }

    public function getAllowedChildPageTypes()
    {
        return array();
    }
} 