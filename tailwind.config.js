/** @type {import('tailwindcss').Config} */

export default {
    important: true,
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "bgtheme": "url(https://development-flow.com/asset-master/sim-asset/bg.png)",
            },
            colors: {
                "primary-light": "var(--primary-light)",
                "primary-light-hov": "var(--primary-light-hov)",
                "primary-light-act": "var(--primary-light-act)",
                "primary-normal": "var(--primary-normal)",
                "primary-normal-hov": "var(--primary-normal-hov)",
                "primary-normal-act": "var(--primary-normal-act)",
                "primary-dark": "var(--primary-dark)",
                "primary-dark-hov": "var(--primary-dark-hov)",
                "primary-dark-act": "var(--primary-dark-act)",
                "primary-darker": "var(--primary-darker)",
                "secondary-light": "var(--secondary-light)",
                "secondary-light-hov": "var(--secondary-light-hov)",
                "secondary-light-act": "var(--secondary-light-act)",
                "secondary-normal": "var(--secondary-normal)",
                "secondary-normal-hov": "var(--secondary-normal-hov)",
                "secondary-normal-act": "var(--secondary-normal-act)",
                "secondary-dark": "var(--secondary-dark)",
                "secondary-dark-hov": "var(--secondary-dark-hov)",
                "secondary-dark-act": "var(--secondary-dark-act)",

                "base-from": "var(--base-from)",
                "base-to": "var(--base-to)",

                "danger-clr": "var(--danger-clr)",
                "warning-clr": "var(--warning-clr)",
                "success-clr": "var(--success-clr)",

                'login-bg-from': 'var(--login-bg-from)',
                'login-bg-to': 'var(--login-bg-to)',

                'panel-from': 'var(--panel-from)',
                'panel-via': 'var(--panel-via)',
                'panel-to': 'var(--panel-to)',
            },
            fontFamily: {
                montserrat: "var(--montserrat)",
            },
            fontSize: {
                'display1': 'var(--display1-size)',
                'display2': 'var(--display2-size)',

                'headline1': 'var(--headline1-size)',
                'headline2': 'var(--headline2-size)',
                'headline3': 'var(--headline3-size)',
                'headline4': 'var(--headline4-size)',
                'headline5': 'var(--headline5-size)',
                'headline6': 'var(--headline6-size)',

                'button1': 'var(--button1-size)',
                'button2': 'var(--button2-size)',
                'body': 'var(--body-size)',
                'paragraph': 'var(--paragraph-size)',
            },
            dropShadow: {
                'form': '1px 1px 5px rgba(0, 0, 0, 0.25)',
                'button-hov': '4px 4px 4px rgba(49, 49, 49, 0.5)',
                'card': '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
            bgGradientDeg: {
                109: '109deg',
            }
        },
    },
};
  
  