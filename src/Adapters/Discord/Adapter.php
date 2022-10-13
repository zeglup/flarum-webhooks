<?php

/*
 * This file is part of fof/webhooks.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Webhooks\Adapters\Discord;

use Carbon\Carbon;
use Carbon\CarbonTimeZone;
use FoF\Webhooks\Response;

class Adapter extends \FoF\Webhooks\Adapters\Adapter
{
    /**
     * {@inheritdoc}
     */
    const NAME = 'discord';

    /**
     * {@inheritdoc}
     */
    protected $exception = DiscordException::class;

    /**
     * Sends a message through the webhook.
     *
     * @param string   $url
     * @param Response $response
     *
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function send(string $url, Response $response)
    {
        if (!isset($response)) {
            return;
        }

        $title = $this->settings->get('forum_title');

        if (strlen($title) > 32) {
            $title = substr($title, 0, 29).'...';
        }
        $payload = [
            'username'   => $title,
            'avatar_url' => 'http://www.wolfa.fr/static/logo.png',
            'content'    => $response->getExtraText(),
            'embeds'     => [
                $this->toArray($response),
            ],
        ];
        $this->request($url, $payload);
    }
    public function components(): array
    {
        return [
                    [
                        'type' => 1,
                        'components' => [
                            [
                                'type'=> 2,
                                'label'=> 'Yes',
                                'style'=> 1,
                                'custom_id'=> 'click_yes'
                            ],
                            [
                                'type'=> 2,
                                'label'=> 'No',
                                'style'=> 1,
                                'custom_id'=> 'click_no'
                            ],
                        ]
                    ]
        ];
    }
    /**
     * @param Response $response
     *
     * @return array
     */
    public function toArray(Response $response): array
    {
        $event_start = Carbon::instance($response->event_start);
        $event_start->setTimezone(new CarbonTimeZone('Europe/Paris'));
        $event_start::setLocale('fr');

        $event_end = Carbon::instance($response->event_start);
        $event_end->setTimezone(new CarbonTimeZone('Europe/Paris'));
        $event_end::setLocale('fr');
        return [
            'title'       => substr($response->title, 0, 256),
            'url'         => $response->url,
            'description' => $response->description ? substr($response->description, 0, 2048) : null,
            'color'     => $response->getColor(),
            'type'      => 'rich',
            'thumbnail'     => [
                'url' => 'http://www.wolfa.fr/static/logo.png',
            ],
            'fields' => [
                [
                    'name' => 'Début',
                    'value' => $event_start->translatedFormat('l jS F H:i'),
                    'inline' => true
                ],
                [
                    'name' => 'Fin',
                    'value' => $event_end->translatedFormat('l jS F H:i'),
                    'inline' => true
                ],
            ],
        ];
    }

    /**
     * @param string $url
     *
     * @return bool
     */
    public static function isValidURL(string $url): bool
    {
        return preg_match('/^https?:\/\/(?:\w+\.)?discord(?:app)?\.com\/api\/webhooks\/\d+?\/.+$/', $url);
    }
}
