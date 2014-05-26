<?php
/**
 * Created by PhpStorm.
 * User: mathieum
 * Date: 26/05/14
 * Time: 16:53
 */

namespace ConcertoCms\NewsBundle\Service;


use ConcertoCms\CoreBundle\Service\Content;
use Doctrine\ODM\PHPCR\DocumentManager;

class News extends Content
{
    /**
     * @var DocumentManager
     */
    private $dm;
    public function __construct($documentManager)
    {
        $this->dm = $documentManager;
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
}
