new TeleportAutocomplete({ el: '.my-input', maxItems: 5 });
TeleportAutocomplete.init('.my-input').on('change', function (value) { console.log(value); });