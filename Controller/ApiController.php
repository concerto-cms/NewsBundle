<?php

namespace ConcertoCms\NewsBundle\Controller;

use ConcertoCms\NewsBundle\Document\NewsItem;
use ConcertoCms\NewsBundle\Document\NewsList;
use ConcertoCms\NewsBundle\Service\NewsManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

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
        $file = $request->files->get("file");
        $pageManager = $this->get("concerto_cms_core.pages.service.pages_manager");
        $newsItem = $pageManager->getByUrl($request->request->get("id"));
        if (!$newsItem || !$newsItem instanceof NewsItem) {
            throw new BadRequestHttpException("Can't find newsitem with the given id");
        }
        $imgDocument = $this->getNewsService()->setImage($newsItem, $file);
        //$url = $this->get('liip_imagine.cache.manager')->getBrowserPath($imgDocument->getId(), 'image_upload_thumbnail');


        return new JsonResponse([
            "image" => $imgDocument->getId()
        ]);
    }
}
