<?php
/**
 * Created by PhpStorm.
 * User: Mathieu
 * Date: 24/05/14
 * Time: 8:33
 */
namespace ConcertoCms\NewsBundle\Document;

use ConcertoCms\CoreBundle\Document\Page;
use Doctrine\ODM\PHPCR\Mapping\Annotations as PHPCR;

/**
 * @PHPCR\Document(referenceable=true)
 */
class NewsList extends Page
{
    public function getClassname()
    {
        return "ConcertoCmsNewsBundle:NewsList";
    }

    public function jsonSerialize()
    {
        $data = parent::jsonSerialize();

        return $data;
    }

    public function getChildren()
    {
        return array();
    }
    public function getItems($publishedOnly = true)
    {
        $children = $this->children;
        $today = new \DateTime();

        $news = array();

        /**
         * @var $child NewsItem
         */
        foreach ($children as $child) {
            if ($child instanceof NewsItem && ($child->isPublished() || $publishedOnly == false)) {
                $news[] = $child;
            }
        }

        usort($news, function ($a, $b) {
                /**
                 * @var NewsItem $a
                 * @var NewsItem $b
                 */
                return ($a->getDate() < $b->getDate()) ? -1 : 1;
        });
        return $news;
    }

    public function showChildrenInList()
    {
        return false;
    }
    public function showInList()
    {
        return true;
    }
}
