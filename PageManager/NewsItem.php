<?php
/**
 * Created by PhpStorm.
 * User: Mathieu
 * Date: 24/05/14
 * Time: 8:34
 */
namespace ConcertoCms\NewsBundle\PageManager;

class NewsItem extends NewsList
{
    /**
     * @param object $document
     * @param array $params
     * @return mixed
     */
    public function populate($document, $params)
    {
        parent::populate($document, $params);
        foreach ($params as $key => $value) {
            switch ($key) {
                case 'introduction':
                    $document->setIntroduction($value);
                    break;
                case 'date':
                    $document->setDate($value);
                    break;
                case 'publishStop':
                    $document->setPublishStop($value);
                    break;
                case 'publishStart':
                    $document->setPublishStart($value);
                    break;
            }
        }
        return $this;
    }
    public function create($params)
    {
        $page = new \Betec\WebsiteBundle\Document\NewsItem();
        $this->populate($page, $params);
        return $page;
    }

    public function toJSON($document)
    {
        // TODO: Implement toJSON() method.
    }

    public function getType()
    {
        return "ConcertoCmsBundle:NewsItem";
    }

    public function getJSView()
    {
        return null;
    }

    public function getLabel()
    {
        return "News item";
    }
}
