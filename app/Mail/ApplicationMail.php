<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ApplicationMail extends Mailable
{
  use Queueable, SerializesModels;

  public $data;

  public function __construct($data)
  {
    return $this->data = $data;
  }

  public function envelope(): Envelope
  {
    return new Envelope(
      subject: 'Запись на консультацию',
    );
  }

  public function content(): Content
  {
    return new Content(
      view: 'emails.application',
    );
  }

  /**
   * Get the attachments for the message.
   *
   * @return array<int, \Illuminate\Mail\Mailables\Attachment>
   */
  public function attachments(): array
  {
    return [];
  }
}
