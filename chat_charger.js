(function() {
  var styleElement = document.createElement('style');
  document.head.appendChild(styleElement);
  var styleSheet = styleElement.sheet;
  // Remove the game recommendation sections.
  styleSheet.insertRule(
    '._3ss {display: none;}'
  );
  // Make the Live Chat window taller.
  styleSheet.insertRule(
    '.uiScrollableAreaWrap { max-height: 540px !important; }'
  );
  console.log('Chat Charger version 2.0 loaded. More at ChatCharger.org');
})();
