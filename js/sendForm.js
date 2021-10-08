$(".form-test-drive").submit(function (e) {
  e.preventDefault();
  let newData = $(this).serialize();
  const form = $(this).get(0);
  console.log(newData);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: newData,
  })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        alert("Данные отправлены");
        console.log(response);
        form.reset();
      } else {
        throw new Error(response.status);
      }
    })
    .catch((error) => {
      alert(error);
    });
});


$(".modal__form").submit(function (e) {
  e.preventDefault();
  let newData = $(this).serialize();
  const form = $(this).get(0);
  console.log(newData);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: newData,
  })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        alert("Данные отправлены");
        console.log(response);
        form.reset();
      } else {
        throw new Error(response.status);
      }
    })
    .catch((error) => {
      alert(error);
    });
});
