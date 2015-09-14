<?php
/**
 * Created by PhpStorm.
 * User: Mathieu
 * Date: 24/05/14
 * Time: 8:33
 */
namespace ConcertoCms\NewsBundle\Document;

use ConcertoCms\CoreBundle\Document\SimplePage;
use Doctrine\ODM\PHPCR\Mapping\Annotations as PHPCR;

/**
 * @PHPCR\Document(referenceable=true)
 */
class NewsList extends SimplePage
{
    public function getItems($publishedOnly = true, $limit = null)
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
                return ($a->getDate() < $b->getDate()) ? 1 : -1;
        });
        if ($limit) {
            $news = array_slice($news, 0, $limit, true);
        }
        return $news;
    }

    public function jsonSerialize()
    {
        $data = parent::jsonSerialize(); // TODO: Change the autogenerated stub
        $data["type"] = "newslist";
        return $data;
    }

}
