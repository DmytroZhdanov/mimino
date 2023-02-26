jQuery('.product-select').on('change', function () {
  var el = $(this);
  var quantity = parseInt(el.val());
  var price = parseInt(
    el.closest('.label-nam).find('[name="price"]').val()
  );
  el.closest('.label-name')
    .find('.total-price')
    .text(quantity * price);
});
