// ACCESS BTN
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", function () {
        console.log(btn);
        const controls = document.querySelectorAll(".fa");
        controls.forEach((control) => {
            console.log(control.id);
        })
        // console.log(next.id)
        let productData = [];
        const productFeatures = document.querySelectorAll(".info-text");
        productFeatures.forEach((feature) => {
            const featureText = feature.innerHTML;
            // console.log(typeof(featureText))
            productData.push(featureText)
        })
        console.log(productData)

        // check type of btn
        // console.log(btn.class)

        const viewText = document.querySelector(".view-text");
        // console.log(viewText.innerHTML)

        // viewText.innerHTML = "Updated Feature"


    })
})


