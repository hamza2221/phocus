Hello {{$user->getEmailForPasswordReset()}}!
<br><br>

Someone has requested a link to change your password. You can do this through the link below.
<br><br>


<a href="{{ $link = url('' ).'/resetpassword/'.$token }}"> change my password </a>
<br><br>

If you didn't request this, please ignore this email.
<br><br>

Your password won't change until you access the link above and create a new one.
