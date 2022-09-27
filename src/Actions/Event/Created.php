<?php

/*
 * This file is part of fof/webhooks.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Webhooks\Actions\Event;

use Carbon\Carbon;
use FoF\Webhooks\Action;
use FoF\Webhooks\Response;

class Created extends Action
{
    const EVENT = \Webbinaro\AdvCalendar\Event\Created::class;

    /**
     * @param \Webbinaro\AdvCalendar\Event\Created $event
     *
     * @return Response
     */
    public function listen($event): Response
    {
        return Response::build($event)
            ->setTitle(
                $event->event->name
            )
            ->setDescription(
                $event->event->description
            )
            ->setEventStart($event->event->event_start)
            ->setEventEnd($event->event->event_end)
            ->setAuthor($event->actor)
            ->setColor('34495e')
            ->setTimestamp(Carbon::now());
    }
}
