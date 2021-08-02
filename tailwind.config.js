module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        //???
        'ashley': "url('../images/ashley.jpg')",
        'brooklyn': "url('/images/bg/brooklyn.jpg')",
        'reading': "url('/images/bg/reading.jpg')",
      }),
      colors: {
        black: {
          light: '#333333',
          DEFAULT: '#1d1d1d',
          dark: '#000000',
        },
        blue: {
          light: '#586d82',
          DEFAULT: '#314459',
          dark: '#1f2b43',
        },
        dezudiorange: '#f45d48',
        grey: {
          DEFAULT: '#f1f1f1',
          dark: '#e7e7e7',
        },
        seafoam: '#c6dddf',
        white: {
          DEFAULT: '#ffffff',
        },
      },
      gridRowStart: {
        '12': '12',
      },
      gridTemplateColumns: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      lineHeight: {
        'normal': '1.2',
      },
      minWidth: {
        'sm': '320px',
        'md': '1024px',
        'lg': '1920px',
        'xl': '2280px',
      },
      spacing: {
        '15': '60px',
        '22': '92px',
        '26': '98px',

        'sm': '280px',
        'md': '960px',
        'lg': '1840px',
        'xl': '2200px',

        'bg-2xs': '217px',
        'bg-xs': '280px',
        'bg-sm': '305px',

        'headshot-sm': '130px',
        'headshot-lg': '240px',

        'logo-sm': '140px',
        'logo-md': '180px',
        'logo-lg': '340px',
      },
    },
    fontFamily: {
      'body': ['Benton Sans Bk','Helvetica','Arial','sans-serif'],
      'sans-reg': ['Benton Sans Reg','Helvetica','Arial','sans-serif'],
      'sans-bold': ['Benton Sans Bd','Helvetica','Arial','sans-serif'],
      'sans-black': ['Benton Sans Bla','Helvetica','Arial','sans-serif'],
      'serif-reg': ['Benton Mod Text Rom','Georgia','serif'],
      'serif-bold': ['Benton Mod Disp Bd','Georgia','serif'],
      'condensed-lt': ['Benton Sans Cond Lt','Helvetica','Arial','sans-serif'],
      'condensed': ['Benton Sans Cond Reg','Helvetica','Arial','sans-serif'],
      'condensed-bold': ['Benton Sans Cond Bd','Helvetica','Arial','sans-serif'],
    },
    fontSize: {

      /* Standard Text Sizes */
      '5xs-tight': ['16px', {
        lineHeight: '20px',
      }],
      '5xs': ['16px', {
        lineHeight: '22px',
      }],
      '4xs-tight': ['17px', {
        lineHeight: '22px',
      }],
      '4xs': ['17px', {
        lineHeight: '24px',
      }],
      '3xs': ['18px', {
        lineHeight: '24px',
      }],
      '2xs': ['20px', {
        lineHeight: '26px',
      }],
      'xs-tight': ['26px', {
        lineHeight: '32px',
      }],
      'xs': ['26px', {
        lineHeight: '35px',
      }],
      'sm-tight': ['28px', {
        lineHeight: '36px',
      }],
      'sm': ['28px', {
        lineHeight: '38px',
      }],
      'base-tight': ['31px', {
        lineHeight: '41px',
      }],
      'base': ['31px', {
        lineHeight: '45px',
      }],
      'lg': ['42px', {
        lineHeight: '52px',
      }],
      'xl': ['58px', {
        lineHeight: '72px',
      }],

      /* Footer Text Sizes */
      'footer-sm': ['14px', {
        lineHeight: '18px',
      }],
      'footer-base': '16px',
      'footer-lg': ['18px', {
        lineHeight: '28px',
      }],
      'footer-xl': ['31px', {
        lineHeight: '45px',
      }],

      /* Heading Text Sizes */
      'heading-sm-tighter': ['14px', {
        lineHeight: '16px',
      }],
      'heading-sm-tight': ['14px', {
        lineHeight: '22px',
      }],
      'heading-sm': ['14px', {
        lineHeight: '24px',
      }],
      'heading-md': ['16px', {
        lineHeight: '24px',
      }],
      'heading-lg': ['20px', {
        lineHeight: '24px',
      }],
      'heading-xl': ['22px', {
        lineHeight: '28px',
      }],
      'heading-2xl-tighter': ['24px', {
        lineHeight: '22px',
      }],
      'heading-2xl': ['24px', {
        lineHeight: '25px',
      }],
      'heading-3xl': ['28px', {
        letterSpacing: '1.2px',
        lineHeight: '29px',
      }],
      'heading-4xl': ['31px', {
        lineHeight: '62px',
      }],
      'heading-5xl': ['32px', {
        lineHeight: '32px',
      }],
      'heading-6xl': ['45px', {
        lineHeight: '74px',
      }],

      /* Normal Link Text Sizes */
      'link-sm': ['17px', {
        lineHeight: '24px',
      }],
      'link-sm-loose': ['17px', {
        lineHeight: '58px',
      }],
      'link-base': ['24px', {
        lineHeight: '82px',
      }],
      'link-lg': ['28px', {
        lineHeight: '62px',
      }],

      /* Navigation Link Text Sizes */
      'nav-sm': ['14px', {
        lineHeight: '24px',
      }],
      'nav-lg': ['18px', {
        lineHeight: '24px',
      }],
      'nav-xl': ['25px', {
        lineHeight: '26px',
      }],

      /* Profile Sizes */
      'profile-title-sm': ['23px', {
        lineHeight: '32px',
      }],

      /* Tagline Text Sizes */
      'tagline-2xs-tight': ['26px', {
        lineHeight: '30px',
      }],
      'tagline-2xs': ['26px', {
        lineHeight: '32px',
      }],
      'tagline-xs': ['28px', {
        lineHeight: '32px',
      }],
      'tagline-sm': ['32px', {
        lineHeight: '36px',
      }],
      'tagline-base': ['36px', {
        letterSpacing: '-.45px',
        lineHeight: '38px',
      }],
      'tagline-lg': ['38px', {
        lineHeight: '44px',
      }],
      'tagline-xl': ['49px', {
        lineHeight: '53px',
      }],
      'tagline-2xl': ['54px', {
        lineHeight: '64px',
      }],
      'tagline-3xl': ['75px', {
        lineHeight: '85px',
      }],
      'tagline-4xl': ['79px', {
        lineHeight: '85px',
      }],
      'tagline-5xl': ['152px', {
        lineHeight: '156px',
      }],
      'tagline-6xl': ['180px', {
        lineHeight: '184px',
      }],
    },
    letterSpacing: {
      tight: '-2px',
      normal: '0',
      loose: '1.2px',
      looser: '0.5px',
    },
    screens: {
      'sm': '320px',
      'md': '1024px',
      'lg': '1920px',
      'xl': '2280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
