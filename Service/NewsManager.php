<?php
/**
 * Created by PhpStorm.
 * User: mathieum
 * Date: 26/05/14
 * Time: 16:53
 */

namespace ConcertoCms\NewsBundle\Service;


use ConcertoCms\NewsBundle\Document\NewsItem;
use ConcertoCms\NewsBundle\Document\NewsList;
use Symfony\Cmf\Bundle\MediaBundle\File\UploadFileHelperDoctrine;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class NewsManager
{
    use \ConcertoCms\CoreBundle\Util\DocumentManagerTrait;

    private $pm;
    private $imageHelper;

    /**
     * @param $dm \Doctrine\ODM\PHPCR\DocumentManager
     * @param $imageHelper UploadFileHelperDoctrine
     */
    public function __construct(
        \Doctrine\ODM\PHPCR\DocumentManager $dm,
        UploadFileHelperDoctrine $imageHelper
    ) {
        $this->setDocumentManager($dm);
        $this->imageHelper = $imageHelper;
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
    public function setImage(NewsItem $item, UploadedFile $file)
    {
        if ($image = $item->getImage()) {
            $this->getDocumentManager()->remove($image);
            $item->setImage(null);
        }

        $this->imageHelper->setRootPath("/cms/media/news");
        $imgDocument = $this->imageHelper->handleUploadedFile($file);
        $this->getDocumentManager()->persist($imgDocument);
        $item->setImage($imgDocument);
        $this->getDocumentManager()->flush();
        return $imgDocument;
    }
}
