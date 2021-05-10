// TODO: Apply `lead` ONLY to the first paragraph in each section.

// TODO: Use `addEventListener` to add the class `bg-info` to all paragraphs on `mouseover` and `mouseout`

document.querySelectorAll("section").forEach(section => {
  section.querySelector("p").classList.add("lead")
})

document.querySelectorAll("p").forEach(p=>
  {
    p.addEventListener("mouseover", function(event) {
      p.classList.add("bg-info");
    }
    )
    p.addEventListener("mouseout", function(event) {
      p.classList.remove("bg-info");
    }
    )
  }
)
