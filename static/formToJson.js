function getFormData($form){
      var form = $form.serializeArray();
      var dataForm = {};
      $.each(form,
          function(i, v) {
              dataForm[v.name] = v.value;
          });
      return dataForm;
  }

  function getFormJson($form){
      dataJson = JSON.stringify(getFormData($form));
      return dataJson;
  }

  document.getElementById('button').onclick = function() {
        var $form = $("#form");
        url = "http://127.0.0.1:5000/predict";
        console.log(getFormJson($form))

//        const userAction = async () => {
//            const response = await fetch(url, {
//                method: 'POST',
//                body: getFormJson($form),
//                headers: {
//                    'Content-Type': 'application/json;charset=utf-8'
//                }
//            });
//            const result = await response.json();
//            console.log(result);
//            $('#result').val(result['Predicted_price']);
//        }
//
//        userAction();
   }