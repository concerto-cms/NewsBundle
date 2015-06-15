<?php
/**
 * Created by PhpStorm.
 * User: mathi_000
 * Date: 15/06/2015
 * Time: 9:51
 */

namespace ConcertoCms\NewsBundle\Service;


use ConcertoCms\CoreBundle\Pages\PageFactoryInterface;
use ConcertoCms\CoreBundle\Util\PublishableInterface;
use ConcertoCms\NewsBundle\Document\NewsItem;

class NewsItemFactory implements PageFactoryInterface
{
    /**
     * @param array $data
     * @return PublishableInterface
     */
    public function createFromJson($data)
    {
        $page = new NewsItem();
        $page->setSlug($data["slug"]);
        $this->updateFromJson($page, $data);
        return $page;
    }

    /**
     * @param NewsItem $page
     * @param $data
     * @return NewsItem
     */
    public function updateFromJson($page, $data)
    {
        if (isset($data["content"]))
            $page->setContent($data["content"]);
        if (isset($data["date"]))
            $page->setDate($data["date"]);
        if (isset($data["introduction"]))
            $page->setIntroduction($data["introduction"]);
        if (isset($data["description"]))
            $page->setMetaDescription($data["description"]);
        if (isset($data["publishStart"]))
            $page->setPublishStart($data["publishStart"]);
        if (isset($data["publishStop"]))
            $page->setPublishStop($data["publishStop"]);
        if (isset($data["title"]))
            $page->setTitle($data["title"]);
        return $page;

    }

    public function getPageFQN()
    {
        return "ConcertoCms\\NewsBundle\\Document\\NewsItem";
    }

}