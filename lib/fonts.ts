import localFont from "next/font/local"
import { Geist_Mono } from "next/font/google"

export const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--geist-mono",
})

// export const customFont = localFont({
//     src: [
//         {
//             path: "./fonts/sofia-pro/ultralight.otf",
//             weight: "100",
//             style: "normal",
//         },
//         {
//             path: "./fonts/sofia-pro/ultralight-italic.otf",
//             weight: "100",
//             style: "italic",
//         },
//         {
//             path: "./fonts/sofia-pro/extralight.otf",
//             weight: "200",
//             style: "normal",
//         },
//         {
//             path: "./fonts/sofia-pro/extralight-italic.otf",
//             weight: "200",
//             style: "italic",
//         },
//         { path: "./fonts/sofia-pro/light.otf", weight: "300", style: "normal" },
//         {
//             path: "./fonts/sofia-pro/light-italic.otf",
//             weight: "300",
//             style: "italic",
//         },
//         {
//             path: "./fonts/sofia-pro/regular.otf",
//             weight: "400",
//             style: "normal",
//         },
//         {
//             path: "./fonts/sofia-pro/regular-italic.otf",
//             weight: "400",
//             style: "italic",
//         },
//         {
//             path: "./fonts/sofia-pro/medium.otf",
//             weight: "500",
//             style: "normal",
//         },
//         {
//             path: "./fonts/sofia-pro/medium-italic.otf",
//             weight: "500",
//             style: "italic",
//         },
//         {
//             path: "./fonts/sofia-pro/semibold.otf",
//             weight: "600",
//             style: "normal",
//         },
//         {
//             path: "./fonts/sofia-pro/semibold-italic.otf",
//             weight: "600",
//             style: "italic",
//         },
//         { path: "./fonts/sofia-pro/bold.otf", weight: "700", style: "normal" },
//         {
//             path: "./fonts/sofia-pro/bold-italic.otf",
//             weight: "700",
//             style: "italic",
//         },
//         { path: "./fonts/sofia-pro/black.otf", weight: "900", style: "normal" },
//         {
//             path: "./fonts/sofia-pro/black-italic.otf",
//             weight: "900",
//             style: "italic",
//         },
//     ],
//     variable: "--custom-font",
//     display: "swap",
// })

export const satoshi = localFont({
    src: [
        {
            path: "./fonts/satoshi/Satoshi-Black.woff2",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/satoshi/Satoshi-BlackItalic.woff2",
            weight: "900",
            style: "italic",
        },
        {
            path: "./fonts/satoshi/Satoshi-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/satoshi/Satoshi-BoldItalic.woff2",
            weight: "700",
            style: "italic",
        },
        {
            path: "./fonts/satoshi/Satoshi-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/satoshi/Satoshi-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "./fonts/satoshi/Satoshi-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/satoshi/Satoshi-Italic.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "./fonts/satoshi/Satoshi-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/satoshi/Satoshi-LightItalic.woff2",
            weight: "300",
            style: "italic",
        },
    ],
    variable: "--custom-font",
})

export const robson = localFont({
    src: [
        {
            path: "./fonts/robson/robson-thin.otf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/robson/robson-extralight.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/robson/robson-light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/robson/robson-regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/robson/robson-medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/robson/robson-semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/robson/robson-bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/robson/robson-extrabold.otf",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-robson",
    display: "swap",
});
