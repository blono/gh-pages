self.addEventListener('push', function(event) {
  console.log('Received a push message', event);
  if (event.data != null) {
    console.log('Received a push message data', event.data);
  }

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
