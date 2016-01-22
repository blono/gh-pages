self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  var title = 'リマインダー';
  var body = 'リマインダーです。';
  var icon = 'images/icon-192x192.png';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon
    })
  );
});
