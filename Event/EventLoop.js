// `eventLoop` is an array that acts as a queue (first-in, first-out)
var eventLoop = [];
var eventItem;

// keep going "forever"
while (true) {
  // perform a "tick"
  if (eventLoop.length > 0) {
    // get the next eventItem in the queue
    eventItem = eventLoop.shift();

    // now, execute the next eventItem
    try {
      eventItem();
    } catch (err) {
      reportError(err);
    }
  }
}
