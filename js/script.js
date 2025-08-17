const image = document.getElementById('dice');

        function Dice() {
            const min = 1;
            const max = 7;
            const Number = Math.floor(Math.random() * (max - min) + min);

            if (Number == 1) {
                image.src = "../icons/dice (3).png";
            }
            if (Number == 2) {
                image.src = "../icons/dice (6).png";
            }
            if (Number == 3) {
                image.src = "../icons/dice (5).png";
            }
            if (Number == 4) {
                image.src = "../icons/dice (5).png";
            }
            if (Number == 5) {
                image.src = "../icons/dice (7).png";
            }
            if (Number == 6) {
                image.src = "../icons/dice (2).png";
            }
        }