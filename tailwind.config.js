/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        beVietnamPro: "Be Vietnam Pro",
        plairFairDisplay: "Playfair Display",
      },
      /*
      colors:
.starter-templates-preview-palette {
    --e-global-color-astglobalcolor0: #3fd5e0;
    --ast-global-color-0: #3fd5e0;
    --e-global-color-astglobalcolor1: #8153fd;
    --ast-global-color-1: #8153fd;
    --e-global-color-astglobalcolor2: #1d262b;
    --ast-global-color-2: #1d262b;
    --e-global-color-astglobalcolor3: #363c45;
    --ast-global-color-3: #363c45;
    --e-global-color-astglobalcolor4: #fcfcf8;
    --ast-global-color-4: #fcfcf8;
    --e-global-color-astglobalcolor5: #FFFFFF;
    --ast-global-color-5: #FFFFFF;
    --e-global-color-astglobalcolor6: #e7ecee;
    --ast-global-color-6: #e7ecee;
    --e-global-color-astglobalcolor7: #9ca7ab;
    --ast-global-color-7: #9ca7ab;
    --e-global-color-astglobalcolor8: #000000;
    --ast-global-color-8: #1d262b;
}
      */
    },
  },
  plugins: [],
};
