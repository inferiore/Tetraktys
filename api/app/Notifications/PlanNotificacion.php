<?php

namespace Notificaciones;

use Mail\PlanMail;
use Modelos\Comercial\Plan;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class PlanNotificacion extends Notification
{
    use Queueable;

    public $plan;

    public function __construct(Plan $plan)
    {
        $this->plan = $plan;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $url = url('planes/'.$this->plan->id);
         return (new MailMessage)
                ->subject('Notificacion Plan Comercial')
                ->markdown('emails.plan', [
                                            'plan' => $this->plan,
                                            'url' => $url
                                        ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'nombre' => $this->plan->nombre
        ];
    }
}
