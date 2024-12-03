// Interactive cart notification
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем отправку формы

    const emailInput = document.getElementById('EmailInput');
    const errorMessage = document.getElementById('emailErrorMessage');

    if (!emailInput.value.includes('@')) {
        errorMessage.style.display = 'block'; // Показываем сообщение об ошибке
    } else {
        errorMessage.style.display = 'none'; // Скрываем сообщение об ошибке
        alert('Форма успешно отправлена!');
        // Здесь можно добавить логику для отправки данных на сервер
    }
});

$("button").on("click", function(ev) {
  var currentQty = $('input[name="quantity"]').val();
  var qtyDirection = $(this).data("direction");
  var newQty = 0;
  
  if (qtyDirection == "1") {
    newQty = parseInt(currentQty) + 1;
  }
  else if (qtyDirection == "-1") {
    newQty = parseInt(currentQty) - 1;
  }

  // make decrement disabled at 1
  if (newQty == 1) {
    $(".decrement-quantity").attr("disabled", "disabled");
  }
  
  // remove disabled attribute on subtract
  if (newQty > 1) {
    $(".decrement-quantity").removeAttr("disabled");
  }
  
  if (newQty > 0) {
    newQty = newQty.toString();
    $('input[name="quantity"]').val(newQty);
  }
  else {
    $('input[name="quantity"]').val("1");
  }
});