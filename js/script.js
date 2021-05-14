{
    const onFormSubmit = (event) => {
        event.preventDefault();

            const plnElement = document.querySelector(".js-pln");
            const currencyElement = document.querySelector(".js-currency");
            
            const amount = +plnElement.value;
            const currency = currencyElement.value;


        const caclculateResult = (amount, currency) => {
            const rateEUR = 4.56;
            const rateUSD = 3.79;

            switch (currency) {
                case "eur":
                    return amount / rateEUR;
                case "usd":
                    return amount / rateUSD;
                }
        };

        const result = caclculateResult(amount, currency);


        const updateResultText = (result) => {
                const score = document.querySelector(".js-score");
                score.value = `${result.toFixed(2)}`;
            }

        updateResultText(result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };  

    init();
}