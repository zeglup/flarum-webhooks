<?php
/**
 *  This file is part of reflar/webhooks.
 *
 *  Copyright (c) ReFlar.
 *
 *  https://reflar.redevs.org
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */

namespace Reflar\Webhooks\Actions\Group;


use Carbon\Carbon;
use Reflar\Webhooks\Action;
use Reflar\Webhooks\Response;

class Renamed extends Action
{

    /**
     * @param \Flarum\Group\Event\Renamed $event
     * @return Response
     */
    function listen($event)
    {
        return Response::build($event)
            ->setTitle(
                $this->translate('group.renamed', $event->group->name_singular)
            )
            ->setAuthor($event->actor)
            ->setColor('34495e')
            ->setTimestamp(Carbon::now());
    }

    /**
     * @return string
     */
    function getEvent()
    {
        return \Flarum\Group\Event\Renamed::class;
    }
}