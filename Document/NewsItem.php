<?php
/**
 * Created by PhpStorm.
 * User: Mathieu
 * Date: 24/05/14
 * Time: 8:31
 */

namespace ConcertoCms\NewsBundle\Document;

use ConcertoCms\CoreBundle\Document\Page;
use Doctrine\ODM\PHPCR\Mapping\Annotations as PHPCR;
use Symfony\Cmf\Bundle\MediaBundle\Doctrine\Phpcr\File;

/**
 * @PHPCR\Document(referenceable=true)
 */
class NewsItem extends Page
{
    public function __construct()
    {
        $today = new \DateTime();
        if ($this->getDate() === null) {
            $this->setDate($today);
        }
        if ($this->getPublishStart() === null) {
            $this->setPublishStart($today->add(new \DateInterval("P1D")));
        }
        if ($this->getPublishStop() === null) {
            $this->setPublishStop($today->add(new \DateInterval("P1Y")));
        }
    }
    public function getClassname()
    {
        return "BetecWebsiteBundle:NewsItem";
    }

    public function jsonSerialize()
    {
        $data = parent::jsonSerialize();
        $data["introduction"] = $this->getIntroduction();
        $data["date"] = $this->getDate()->format("d-m-Y");
        $data["publishStart"] = $this->getPublishStart()->format("d-m-Y");
        $data["publishStop"] = $this->getPublishStop()->format("d-m-Y");
        $data["published"] = $this->isPublished();
        $data["archived"] = $this->isArchived();
        $data["planned"] = $this->isPlanned();

        return $data;
    }

    public function set($params)
    {
        foreach ($params as $key => $value) {
            switch ($key) {
                case 'introduction':
                    $this->setIntroduction($value);
                    break;
                case 'date':
                    $this->setDate($value);
                    break;
                case 'publishStop':
                    $this->setPublishStop($value);
                    break;
                case 'publishStart':
                    $this->setPublishStart($value);
                    break;
            }
        }
        return parent::set($params);
    }


    /**
     * @PHPCR\Date()
     * @var \DateTime
     */
    protected $date;

    /**
     * @PHPCR\Date()
     * @var \DateTime
     */
    protected $publishStart;

    /**
     * @PHPCR\Date()
     * @var \DateTime
     */
    protected $publishStop;

    /**
     * @PHPCR\String(nullable=true)
     * @var string
     */
    protected $introduction;

    /**
     * @param \DateTime $date
     */
    public function setDate($date)
    {
        if (is_string($date)) {
            $parts = explode("-", $date);
            $this->date= new \DateTime();
            $this->date->setDate($parts[2], $parts[1], $parts[0]);
        } else {
            $this->date = $date;
        }
    }

    /**
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param string $introduction
     */
    public function setIntroduction($introduction)
    {
        $this->introduction = $introduction;
    }

    /**
     * @return string
     */
    public function getIntroduction()
    {
        return $this->introduction;
    }

    /**
     * @param \DateTime $publishStart
     */
    public function setPublishStart($publishStart)
    {
        if (is_string($publishStart)) {
            $parts = explode("-", $publishStart);
            $this->publishStart = new \DateTime();
            $this->publishStart->setDate($parts[2], $parts[1], $parts[0]);
        } else {
            $this->publishStart = $publishStart;
        }
    }

    /**
     * @return \DateTime
     */
    public function getPublishStart()
    {
        return $this->publishStart;
    }

    /**
     * @param \DateTime $publishStop
     */
    public function setPublishStop($publishStop)
    {
        if (is_string($publishStop)) {
            $parts = explode("-", $publishStop);
            $this->publishStop = new \DateTime();
            $this->publishStop->setDate($parts[2], $parts[1], $parts[0]);
        } else {
            $this->publishStop = $publishStop;
        }
    }

    /**
     * @return \DateTime
     */
    public function getPublishStop()
    {
        return $this->publishStop;
    }


    public function isPublished()
    {
        if ($this->isPlanned()) {
            return false;
        }
        if ($this->isArchived()) {
            return false;
        }
        return true;
    }
    public function isArchived()
    {
        $today = new \DateTime();
        if ($this->getPublishStop() < $today) {
            return true;
        }
        return false;
    }
    public function isPlanned()
    {
        $today = new \DateTime();
        if ($this->getPublishStart() >= $today) {
            return true;
        }
        return false;
    }
    public function getVisibleSubpages()
    {
        return array();
    }

    public function showChildrenInList()
    {
        return false;
    }
    public function showInList()
    {
        return false;
    }
}
