<?php
/**
 * Created by PhpStorm.
 * User: mathieu
 * Date: 29/05/14
 * Time: 13:17
 */

namespace ConcertoCms\NewsBundle\Service;


use ConcertoCms\CoreBundle\Event\PageCreateEvent;
use ConcertoCms\CoreBundle\Event\PagePopulateEvent;
use ConcertoCms\CoreBundle\Extension\PageManagerInterface;
use ConcertoCms\CoreBundle\Extension\PageType;
use ConcertoCms\NewsBundle\Document;

class PageManager implements PageManagerInterface
{
    /**
     * @return \ConcertoCms\CoreBundle\Extension\PageType[]
     */
    public function getPageTypes()
    {
        return array(
            new PageType(
                "ConcertoCmsNewsBundle:NewsList",
                "News page",
                "View.PageContent_Page",
                true,
                array("ConcertoCmsNewsBundle:NewsItem")
            ),
            new PageType(
                "ConcertoCmsNewsBundle:NewsItem",
                "News item",
                "View.PageContent_Page",
                false,
                array()
            )
        );
    }

    /**
     * @param PagePopulateEvent $event
     * @return void
     */
    public function onPopulate(PagePopulateEvent $event)
    {
        $document = $event->getDocument();
        $params = $event->getData();
        if ($document instanceof Document\NewsItem) {
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
        }
    }

    /**
     * @param PagePopulateEvent $event
     * @return void
     */
    public function onCreate(PageCreateEvent $event)
    {
        if ($event->getType() == "ConcertoCmsNewsBundle:NewsList") {
            $event->setDocument(new Document\NewsList());
        }
        if ($event->getType() == "ConcertoCmsNewsBundle:NewsItem") {
            $event->setDocument(new Document\NewsItem());
        }
    }
}
