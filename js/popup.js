window.addEventListener('DOMContentLoaded', function() {
  // popup
  const buttonCreate = document.querySelector(".button__create");
  const popup = document.querySelector(".popup__list");
  const closeBtn = this.document.querySelector(".button__cancel");

  buttonCreate.addEventListener("click", function () {
    popup.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  const createList = document.querySelector(".button__continue");
  createList.addEventListener('click', function(event) {
      event.preventDefault();

      const listNameInput = document.querySelector("#ilist");
      const listName = listNameInput.value.trim();
      if (listName === "") {
        window.alert("Por favor coloque o nome para sua lista!");
        return;
      }

      const emptyMessage = document.querySelector("#emptyMessage");
      emptyMessage.remove();

      const myContentList = document.querySelector(".itemList");

      const inputValuList = listNameInput.value
      myContentList.textContent = inputValuList
      myContentList.style.display = 'block';
      myContentList.style.margin = 'auto';

      const buttonCreateList = document.querySelector(".container_create-list");

      // const shoppingListsContainer = document.querySelector(".shoppingListsContainer");

      // // const newList = document.createElement("ul");
      // // newList.innerHTML = "<li>Item 1</li>";
      // // shoppingListsContainer.appendChild(newList);
      popup.style.display = "none";
      buttonCreateList.style.visibility = "visible";

  })
})