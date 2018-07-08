---
layout: post
title: Emacs as an Email Client
categories: emacs
image: assets/img/emacs_email.jpg
---

Emacs is a very powerful editor, therefore there are many benefits from using it
as an email client, such as direct integration with org-mode for todo and task
management or the amazing editing capabilities of Emacs to write emails.

However, Emacs cannot do this natively, but there is great integration with a
tool called `mu`. This tool is an indexer for your emails, and keeps track of
them so that they are easily and quickly searchable. The author of this tool
also wrote an emacs-lisp file that queries `mu` and provides a user interface in
emacs to better interact with it and use it to read emails.

`mu` requires the emails to already be on the computer though, so the first step
is to download them using IMAP.

## Downloading Emails

IMAP is a protocol that can be used to download a copy of your emails from the
server. A great tool to use to download them using IMAP is `mbsync`. In arch
linux, this tool can be downloaded from the official repository using

```shell
sudo pacman -S isync
```

This command line utility has to first be set up using a config file, which is
usually located in `~/.mbsyncrc`, so that it knows where to download the emails
from and how to authenticate properly.

The most important parts to set up in the config file are

```
IMAPAccount gmail
Host imap.gmail.com
User user@gmail.com
Pass password
SSLType IMAPS
CertificateFile /etc/ssl/certs/ca-certificates.crt
```

to setup the account, and then the following to setup the directories where it
should download emails to

```
IMAPStore gmail-remote
Account gmail

MaildirStore gmail-local
Subfolders Verbatim
Path ~/.mail/gmail/
Inbox ~/.mail/gmail/Inbox

Channel gmail
Master :gmail-remote:
Slave :gmail-local:
Patterns *
Create Both
SyncState *
```

It should then be mostly ready to download all the emails. If using two factor
authentication, one can generate an app password which can be used instead of
the user password.

Once `mbsync` is configured, the emails can be downloaded using

```shell
mbsync -a
```

## Indexing the Emails

Once they are downloaded (in this case in the `~/.mail` directory), they have to
be indexed so that they can quickly be searched using Emacs. This is done by
using the following shell command.

```shell
mu index --maildir=~/.mail
```

However, as `mu` also has an emacs-lisp plugin, the following will also work
after it has been configured correctly in emacs.

```shell
emacsclient -e '(mu4e-update-index)'
```

### Emacs Configuration

To use `mu` in emacs as well, one first has to load the emacs lisp file using

```emacs-lisp
(require 'mu4e)
```

After that, `mu4e` can be configured with different things like the home
directory, and shortcuts that should be used in emacs. The full configuration
can be seen in my Emacs configuration, which is [hosted on
Github](https://github.com/ymherklotz/dotfiles/blob/master/emacs/loader.org)

## Sending Emails

Sending emails from Emacs requires a different protocol which is SMTP, however, that is
already included in Emacs. The most basic setup can be seen below.

```emacs-lisp
(smtpmail-smt-user            . "email@gmail.com")
(smtpmail-local-domain        . "gmail.com")
(smtpmail-default-smtp-server . "smtp.gmail.com")
(smtpmail-smtp-server         . "smtp.gmail.com")
(smtpmail-smtp-service        . 587)
```

## Conclusion

Emacs is now ready to be used as a full featured email client.
