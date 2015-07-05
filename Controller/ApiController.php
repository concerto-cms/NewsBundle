<?php

namespace ConcertoCms\NewsBundle\Controller;

use ConcertoCms\NewsBundle\Document\NewsList;
use ConcertoCms\NewsBundle\Service\NewsManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ApiController extends Controller
{
    /**
     * @return NewsManager
     */
    private function getNewsService()
    {
        return $this->get('concerto_cms_news.newsmanager');
    }

    public function indexAction()
    {
        return new JsonResponse($this->getNewsService()->getAllNewsItems());
    }

    public function uploadAction(Request $request)
    {
        $imageHelper = $this->get("cmf_media.persistence.phpcr.upload_image_helper");
        $imageHelper->setRootPath("/cms/media/shared");
        $file = $request->files->get("file");
        $doc = $imageHelper->handleUploadedFile($file);
        return $imageHelper->getUploadResponse($request);


    }
}
