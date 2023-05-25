
function desktop() {
  let main = document.getElementsByClassName("main")[0];
  let size_button = document.getElementById("size-button");
  let children_amount = 5;
  size_button.addEventListener("click", validate_size);
  let counter = 0;
  let border_child = main.childNodes;

  /*PLAYGROUNG CREATOR*/

  default_sixteen();

  function default_sixteen() {
    if (children_amount === 5) {
      validate_size_default();
    }
  }

  function validate_size_default() {
    counter = counter + 1;
    add_children();
  }
  function validate_size() {
    children_amount = document.getElementById("size").value;
    if (children_amount >= 151) {
      alert("Choose a smaller amount");
    } else if (children_amount < 0) {
      alert("Choose a bigger amount");
    } else {
      counter = counter + 1;

      add_children();
    }
  }

  function add_children() {
    if (counter === 1) {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      counter = 0;
    }

    main.style.setProperty("--rowNum", children_amount);
    main.style.setProperty("--colNum", children_amount);

    for (let i = 0; i < Math.pow(children_amount, 2); i++) {
      let main_child = document.createElement("div");
      main_child.classList.add("main-children");
      main.appendChild(main_child);
    }

    curve_fix();
  }

  /*CHANGE COLOURS*/

  let clicked = false;

  let indicator_pink = false;
  let indicator_eraser = false;
  let indicator_rainbow = false;
  let indicator_choice = false;

  let pink = document.getElementById("pink");
  let eraser = document.getElementById("eraser");
  let rainbow = document.getElementById("rainbow");
  let choice = document.getElementById("random");
  let color_choice = document.getElementById("color-choice")

  pink.addEventListener("click", draw_pink);
  eraser.addEventListener("click", eraser_function);
  rainbow.addEventListener("click", draw_rainbow);
  choice.addEventListener("click", draw_choice)

  function draw_pink() {
    if (indicator_eraser) {
      main.removeEventListener("mouseover", erase);
    }
    if (indicator_rainbow) {
      main.removeEventListener("mouseover", change_color_rainbow);
    }
    if (indicator_choice) {
      main.removeEventListener("mouseover", change_color_choice);
    }
    main.addEventListener("mouseover", change_color_pink);
    indicator_pink = true;
  }

  function eraser_function() {
    if (indicator_pink) {
      main.removeEventListener("mouseover", change_color_pink);
    }
    if (indicator_rainbow) {
      main.removeEventListener("mouseover", change_color_rainbow);
    }
    if (indicator_choice) {
      main.removeEventListener("mouseover", change_color_choice);
    }
    main.addEventListener("mouseover", erase);
    indicator_eraser = true;
  }

  function draw_rainbow() {
    if (indicator_eraser) {
      main.removeEventListener("mouseover", erase);
    }
    if (indicator_pink) {
      main.removeEventListener("mouseover", change_color_pink);
    }
    if (indicator_choice) {
      main.removeEventListener("mouseover", change_color_choice);
    }
    main.addEventListener("mouseover", change_color_rainbow);
    indicator_rainbow = true;
  }

  function draw_choice() {
    if (indicator_eraser) {
      main.removeEventListener("mouseover", erase);
    }
    if (indicator_pink) {
      main.removeEventListener("mouseover", change_color_pink);
    }
    if (indicator_rainbow) {
      main.removeEventListener("mouseover", change_color_rainbow)
    }
    main.addEventListener("mouseover", change_color_choice);
    indicator_choice = true;
  }

  /*CLICK CONTROLER*/

  main.addEventListener("mousedown", down);

  function down() {
    let status_span = document.getElementById("status-span");
    let hint = document.getElementById("hint");
    clicked = !clicked;
    if (clicked) {
      status_span.innerText = "CAN";
      status_span.style.color = "pink";
      hint.innerText = "";
    } else {
      status_span.innerText = "CAN'T";
      status_span.style.color = "pink";
      hint.innerText = "*Select size, color and click to draw";
    }
  }

  /*CHANGE COLOR*/

  function change_color_pink(e) {
    if (clicked) {
      e.target.style.backgroundColor = "pink";
    }
  }

  function erase(e) {
    if (clicked) {
      e.target.style.backgroundColor = "white";
    }
  }

  function change_color_rainbow(e) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (clicked) {
      e.target.style.backgroundColor = "#" + randomColor;
    }
  }

  function change_color_choice(e) {
    if (clicked) {
      let user_color = color_choice.value;
      e.target.style.backgroundColor = user_color;
    }
  }







  /*CLEAR BUTTON*/

  let clear = document.getElementById("clear");
  clear.addEventListener("click", clear_function);

  function clear_function() {
    let children = main.childNodes;
    for (let i = 0; i < children.length; i++) {
      children[i].style.backgroundColor = "white";
    }
  }


  /*BORDER CHANGER*/

  let border = document.getElementById("border");
  border.addEventListener("click", border_changer);
  let border_children = main.childNodes;

  function border_changer() {
    if (border.innerText === "Hide border") {
      hide_border();
    } else {
      show_border();
    }
  }

  function show_border() {
    for (let i = 0; i < border_children.length; i++) {
      border_children[i].style.border = "solid pink 1px";
    }
    border.innerText = "Hide border";
  }

  function hide_border() {
    for (let i = 0; i < border_children.length; i++) {
      border_children[i].style.border = "hidden";
    }
    border.innerText = "Show border";
  }

  /*CURVE FIX*/

  function curve_fix() {
    border_child[0].style.borderRadius = "10px 0px 0px 0px";
    border_child[children_amount - 1].style.borderRadius = "0px 10px 0px 0px";
    border_child[children_amount * (children_amount - 1)].style.borderRadius =
      "0px 0px 0px 10px";
    border_child[children_amount * children_amount - 1].style.borderRadius =
      "0px 0px 10px 0px";
  }
}





export { desktop };
