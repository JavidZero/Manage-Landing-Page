const btn = document.querySelector(".container .nav .wrapper .flex .nav-hamburger");
const list = document.querySelector(".container .nav .wrapper .flex .nav-navigation");
const nav = document.querySelector(".container .nav");

btn.addEventListener("click", ()=>{
    btn.classList.toggle('open');
    list.classList.toggle('open');
    nav.classList.toggle('open');
    document.querySelector(".container").classList.toggle('open');
});


const form = document.querySelector(".container .footer .footer-item .form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var val = form.querySelector("label input");

    if (validateEmail(val.value)) {
        form.classList.remove("err");
    }
    else {
        form.classList.add("err");
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const feedbackSpans = document.querySelectorAll(".container .feedback .flex .feedback-buttons span");
const feedbackItems = document.querySelectorAll(".container .feedback .flex .feedback-item");

feedbackSpans.forEach((span)=>{
    span.addEventListener('click', ()=>{
        feedbackSpans.forEach((span)=>{
            span.classList.remove('show');
        });

        span.classList.add('show');
        if(span.classList.contains("1")){
            feedbackItems.forEach((item)=>{
                item.classList.remove('show');
            })
            feedbackItems[0].classList.add('show');
        }
        else if (span.classList.contains("2")) {
            feedbackItems.forEach((item) => {
                item.classList.remove('show');
            })
            feedbackItems[1].classList.add('show');
        }
        else if(span.classList.contains("3")){
            feedbackItems.forEach((item) => {
                item.classList.remove('show');
            })
            feedbackItems[2].classList.add('show');
        }
        else if (span.classList.contains("4")) {
            feedbackItems.forEach((item) => {
                item.classList.remove('show');
            })
            feedbackItems[3].classList.add('show');
        }
    })
})