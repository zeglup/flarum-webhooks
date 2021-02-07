<?php

/*
 * This file is part of fof/webhooks.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * https://friendsofflarum.org
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Webhooks\Actions\Discussion;

use FoF\Webhooks\Helpers\Post;
use FoF\Webhooks\Models\Webhook;
use FoF\Webhooks\Response;

class Started extends Action
{
    const EVENT = \Flarum\Discussion\Event\Started::class;

    /**
     * @param Webhook $webhook
     * @param \Flarum\Discussion\Event\Started $event
     *
     * @return Response
     */
    public function handle(Webhook $webhook, $event): Response
    {
        return Response::build($event)
            ->setTitle(
                $this->translate('discussion.started', $event->discussion->title)
            )
            ->setURL('discussion', [
                'id' => $event->discussion->id,
            ])
            ->setDescription(Post::getContent($event->discussion->firstPost, $webhook))
            ->setAuthor($event->actor)
            ->setColor('fed330')
            ->setTimestamp($event->discussion->created_at);
    }
}
