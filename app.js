const moreBtn = document.querySelectorAll(".field-head");

moreBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget.parentElement;

    const wrapper = target.querySelector(".wrapper-div");
    const inputField = wrapper.querySelector(".all-input-fields");

    if (wrapper.getBoundingClientRect().height > 0) {
      wrapper.style.height = "0px";
    } else {
      const newHeight = inputField.getBoundingClientRect().height;

      wrapper.style.height = `${newHeight}px`;

      console.log(newHeight);
    }
  });
});

const onSubmit = (e) => {
  e.preventDefault();

  const monthlyIncome =
    parseInt(document.getElementById("monthlyIncome").value) * 1.1;
  const years = parseInt(document.getElementById("years").value);
  const AddCoverDeath =
    parseInt(document.getElementById("Add-cover-death").value) * 1.3;
  const AddCoverDisab =
    parseInt(document.getElementById("Add-cover-disab").value) * 1.2;
  const lumpCovDeath =
    parseInt(document.getElementById("lump-cov-death").value) * 2;
  const lumpCovDisab =
    parseInt(document.getElementById("lump-cov-disab").value) * 1.5;
  const replDeath = parseInt(document.getElementById("repl-death").value) * 1.5;
  const replDisab = parseInt(document.getElementById("repl-disab").value) * 1.9;
  const funeCover = parseInt(document.getElementById("fune-cover").value) * 1.6;
  const funeYears = parseInt(document.getElementById("fune-years").value * 1.4);

  const fDeathValue =
    funeCover + replDeath / 2 + monthlyIncome + lumpCovDeath * 2;
  const fDisabValue =
    funeCover * 1.3 + replDisab + AddCoverDisab + lumpCovDisab * 3;

  const deathPay = document.getElementById("deathPay");
  const disabPay = document.getElementById("disabPay");

  deathPay.textContent = `R ${fDeathValue}`;
  disabPay.textContent = `R ${fDisabValue}`;
  console.log(deathPay, disabPay);
};

const showDetails = (e) => {
  const events =
    e.currentTarget.nextElementSibling.firstElementChild.nextElementSibling;
  const calcContent = e.currentTarget.nextElementSibling;
  const calcHead = calcContent.querySelector(".calc-head");
  const eventDesc = calcContent.querySelector(".event-desc");
  const greenBtn = calcContent.querySelector(".btn-green");
  const transBtn = calcContent.querySelector(".btn-trans");

  events.classList.toggle("show-details");

  const singleEvents = events.querySelectorAll(".single-event");

  singleEvents.forEach((sEvent) => {
    sEvent.classList.toggle("flex-col");
  });

  if (events.classList.contains("show-details")) {
    calcHead.style.display = "none";
    eventDesc.style.display = "none";
    transBtn.style.display = "none";

    greenBtn.textContent = "SEE SUMARY";
  } else {
    calcHead.style.display = "block";
    eventDesc.style.display = "block";
    transBtn.style.display = "block";

    greenBtn.textContent = "GET A LIFE INSURANCE QUOTE";
  }

  console.log(calcContent);
};

const lineBtn = document.querySelector(".line-icon");
console.log(lineBtn);

lineBtn.addEventListener("click", showDetails);

const form = document.querySelector("form");

form.addEventListener("submit", onSubmit);
