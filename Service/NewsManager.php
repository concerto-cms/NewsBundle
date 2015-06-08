<?php
/**
 * Created by PhpStorm.
 * User: mathieum
 * Date: 26/05/14
 * Time: 16:53
 */

namespace ConcertoCms\NewsBundle\Service;


use ConcertoCms\NewsBundle\Document\NewsList;

class NewsManager
{
    use \ConcertoCms\CoreBundle\Util\DocumentManagerTrait;

    private $pm;

    /**
     * @param $dm \Doctrine\ODM\PHPCR\DocumentManager
     */
    public function __construct(
        \Doctrine\ODM\PHPCR\DocumentManager $dm
    ) {
        $this->setDocumentManager($dm);
    }


    /**
     * @return \Doctrine\Common\Collections\ArrayCollection
     */
    public function getNewsPages()
    {
        $qb = $this->dm->createQueryBuilder();
        $qb->from()->document('ConcertoCms\NewsBundle\Document\NewsList', 't');
        $query = $qb->getQuery();
        return $query->execute();
    }

    public function getAllNewsItems($pages = null)
    {
        if (!$pages) {
            $pages = $this->getNewsPages();
        }
        $newsitems = [];
        /**
         * @var $newslist NewsList
         */
        foreach ($pages as $newslist)
        {
            $page = $newslist->jsonSerialize();
            $page["newsitems"] = $newslist->getItems(false);
            $newsitems[] = $page;
        }
        return $newsitems;
    }
}
