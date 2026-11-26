// Menu, copy-email, and the trial form. The site is static: the form opens the
// visitor's mail client with the request filled in (no backend, nothing stored).
(function () {
  var EMAIL = "contact@hxskdigi.tech";
  var lang = document.documentElement.lang.indexOf("zh") === 0 ? "zh" : "en";
  var t = {
    zh: { copied: "已複製", subject: "申請試用", name: "姓名", email: "電郵", org: "機構", products: "感興趣的產品", msg: "需求說明", none: "未填寫" },
    en: { copied: "Copied", subject: "Trial request", name: "Name", email: "Email", org: "Organisation", products: "Products", msg: "Notes", none: "—" }
  }[lang];

  var header = document.querySelector(".site-header");
  var menu = document.querySelector(".menu-btn");
  if (menu) {
    menu.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var label = btn.textContent;
      navigator.clipboard.writeText(EMAIL).then(function () {
        btn.textContent = t.copied;
        setTimeout(function () { btn.textContent = label; }, 1600);
      });
    });
  });

  // "Apply for a trial" on a product card preselects that product in the form.
  document.querySelectorAll("[data-product]").forEach(function (a) {
    a.addEventListener("click", function () {
      var box = document.querySelector('.form input[value="' + a.dataset.product + '"]');
      if (box) box.checked = true;
    });
  });

  var form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var products = f.getAll("product");
      var lines = [
        t.name + ": " + (f.get("name") || t.none),
        t.email + ": " + (f.get("email") || t.none),
        t.org + ": " + (f.get("org") || t.none),
        t.products + ": " + (products.length ? products.join(", ") : t.none),
        "",
        t.msg + ":",
        f.get("message") || t.none
      ];
      var subject = t.subject + (products.length ? " · " + products.join(" / ") : "");
      window.location.href = "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
    });
  }
})();
