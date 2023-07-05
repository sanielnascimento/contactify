import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
--color-brand: #FF3131;
--color-brand-o: #F44E3F;
--color-primary: #880015;
--color-red-008: rgba(20, 1, 1, 0.5);
--color-red-000: rgb(20, 1, 1);
--color-red-100: #963131;
--color-red-200: #F4796B;
--color-red-300: #CD7676;
--color-red-350: #F4998D;
--color-red-400: #F9BABA;
--color-red-500: #FFD7D7;
--color-red-600: #FFE9E9;

--color-gray-000: #000000;
--color-gray-100: #212529;
--color-gray-200: #333333;
--color-gray-300: #828282;
--color-gray-400: #e0e0e0;
--color-gray-500: #f2f2f2;

--color-white-fixed: #ffffff;

--color-error: #e60000;
--color-sucess: #168821;
--color-warning: #ffcd07;

--font-size-1: 4rem;
--font-size-2: 3.6rem;
--font-size-3: 3.2rem;
--font-size-4: 2.8rem;
--font-size-5: 2.4rem;
--font-size-6: 2rem;
--font-size-7: 1.6rem;
--font-size-8: 1.4rem;

--font-weight-bold: 700;
--font-weight-semibold: 600;
--font-weight-medium: 500;
--font-weight-regular: 400;

--radius-1: 8px;
--radius-2: 4px;

font-size: 60%;
}

@media (min-width: 700px) {
    :root{
        font-size: 62.5%;
        position: relative;
    }
}



* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body, html {
    width: 100%;
    height: 100%;
    position: relative;
}

body {
    background-color: var(--color-red-600);
    color: var(--color-primary);
    font-family: "Inter", sans-serif;
}

#root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
}


button, a {
    cursor: pointer;
}
`;
