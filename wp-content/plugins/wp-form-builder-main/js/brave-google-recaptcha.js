grecaptcha.ready(() => {
    const e = Array.from(document.getElementsByClassName("g-recaptcha-token"));
    e.length &&
        e.forEach((e) => {
            grecaptcha.execute(braveFormBlockAtts.recaptchaSiteKey, { action: "braveForm" }).then((c) => {
                e.value = c;
            });
        });
});