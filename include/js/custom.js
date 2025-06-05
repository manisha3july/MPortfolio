jQuery(document).ready(function ($) {
  $("ul.nav li a").click(function () {
    var curTab = $(this).attr("href");
    $("body").addClass("showing");
    $(curTab).addClass("show");
    return false;
  });

  $(".page-close").click(function () {
    $(this).closest(".content-box").removeClass("show");

    $("body").removeClass("showing");
  });

  /*==========================*/
  /* Back to Top */
  /*==========================*/
  if ($(".go-top").length) {
    $(".go-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }
});

$(".Change_mode").click(function () {
  $("body").toggleClass("dark-mode");
  $(this).toggleClass("active");

  // Toggle icon
  const icon = $(this).find("i");
  icon.toggleClass("fa-moon fa-sun");
});

//form

const form = document.getElementById("contact-form");
const responseEl = document.getElementById("form-response");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const res = await fetch("https://formspree.io/f/mkgbnkgn", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      form.reset();
      responseEl.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          Thank you for reaching out! <br/>You can reach me anytime at 7521940837.
           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`;
      responseEl.style.display = "block";
    } else {
      responseEl.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          Oops! Something went wrong. Please try again later. </br>
             or contact me directly at 7521940837
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`;
      responseEl.style.display = "block";
    }
  } catch (error) {
    responseEl.innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        An error occurred. Please try again. </br> or contact me directly at 7521940837
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>`;
    responseEl.style.display = "block";
  }
});
