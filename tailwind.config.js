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
          light: '#f7f7f7',
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
      minHeight: {
        'tb': '450px',
        'md': '500px',
        'lg': '650px',
        'xl': '700px',
      },
      spacing: {
        'ex': '-32px',
        '4.5': '18px',
        '5.5': '22px',
        '6.4': '25px',
        '6.5': '26px',
        '7.5': '30px',
        '8.4': '34px',
        '8.5': '35px',
        '10.5': '42px',
        '11.5': '50px',
        '13': '55px',
        '15': '60px',
        '17': '70px',
        '18': '72px',
        '21': '86px',
        '21.5': '90px',
        '22': '92px',
        '26': '98px',
        '27': '100px',
        '28.1': '7.1875rem',

        '30': '125px',
        '37': '150px',
        '40.5': '170px',
        '49': '200px',
        '60.6': '250px',

        '37p': '37%',
        '60p': '60%',
        '96p': '96%',

        'sm': '280px',
        'tb': '90%',
        'md': '960px',
        'lg': '1840px',
        'xl': '2200px',

        'bg-2xs': '217px',
        'bg-xs': '280px',
        'bg-sm': '305px',

        'headshot-sm': '130px',
        'headshot-md': '215px',
        'headshot-lg': '372px',
        'headshot-xl': '460px',

        'bio-headshot-sm': '130px',
        'bio-headshot-tb': '86px',
        'bio-headshot-md': '138px',
        'bio-headshot-lg': '268px',
        'bio-headshot-xl': '320px',

        'logo-sm': '140px',
        'logo-md': '180px',
        'logo-lg': '340px',
        
        /* footer logo */
        //height
        'logo-ft-tbh': '32px',
        'logo-ft-mdh': '38px',
        'logo-ft-lgh': '63px',
        'logo-ft-xlh': '74px',

        //width
        'logo-ft-tbw': '153px',
        'logo-ft-mdw': '182px',
        'logo-ft-lgw': '301px',
        'logo-ft-xlw': '348px',

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
      'condensed-bk': ['Benton Sans Cond Bk','Helvetica','Arial','sans-serif'],
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
      '4xs-tight': ['14px', {
        lineHeight: '18px',
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
      'xs-callout': ['24px', {
        lineHeight: '32px',
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
      'base-tight': ['30px', {
        lineHeight: '42px',
      }],
      'base': ['31px', {
        lineHeight: '45px',
      }],
      'base2': ['31px', {
        lineHeight: '41px',
      }],
      'lg': ['42px', {
        lineHeight: '52px',
      }],
      'xl': ['58px', {
        lineHeight: '72px',
      }],

      /* Profile Text Sizes */
      'profile-md': ['24px', {
        lineHeight: '30px',
      }],
      'profile-lg': ['38px', {
        lineHeight: '46px',
      }],
      'profile-xl': ['40px', {
        lineHeight: '55px',
      }],
      'biolink-sm': ['14px', {
        lineHeight: '18px',
      }],
      'biolink-md': ['18px', {
        lineHeight: '22px',
      }],
      'biolink-lg': ['20px', {
        lineHeight: '24px',
      }],
      'biolink-xl': ['24px', {
        lineHeight: '28px',
      }],


      /* Footer Text Sizes */
      'footer-sm': ['14px', {
        lineHeight: '18px',
      }],
      'footer-base': '16px',
      'footer-lg': ['18px', {
        lineHeight: '28px',
      }],
      'footer-lg2': ['28px', {
        lineHeight: '38px',
      }],
      'footer-xl': ['31px', {
        lineHeight: '45px',
      }],

      /* Heading Text Sizes */
      'heading-sm-tighter': ['14px', {
        lineHeight: '18px',
      }],
      'heading-sm-tight': ['12px', {
        lineHeight: '16px',
      }],
      'heading-sm': ['14px', {
        letterSpacing: '0.5px',
        lineHeight: '18px',
      }],
      'heading-md': ['16px', {
        letterSpacing: '0.5px',
        lineHeight: '20px',
      }],
      'heading-lg': ['20px', {
        lineHeight: '24px',
      }],
      'heading-caption-lg': ['20px', {
        lineHeight: '26px',
      }],
      'heading-xl': ['22px', {
        lineHeight: '28px',
      }],
      'heading-2xl-tighter': ['24px', {
        lineHeight: '28px',
      }],
      'heading-2xl': ['24px', {
        lineHeight: '28px',
      }],
      'heading-3xl': ['28px', {
        letterSpacing: '1.2px',
        lineHeight: '29px',
      }],
      'heading-3bxl': ['28px', {
        lineHeight: '32px',
      }],
      'heading-4xl': ['31px', {
        lineHeight: '62px',
      }],
      'heading-5xl': ['32px', {
        lineHeight: '32px',
      }],
      'heading-6xl': ['45px', {
        lineHeight: '50px',
      }],

      /* Normal Link Text Sizes */
      'link-sm': ['16px', {
        lineHeight: '20px',
      }],
      'link-sm-loose': ['17px', {
        lineHeight: '58px',
      }],
      'link-base': ['24px', {
        lineHeight: '82px',
      }],
      'link-md': ['18px', {
        lineHeight: '22px',
      }],
      'link-lg': ['28px', {
        lineHeight: '62px',
      }],
      'link-xl': ['24px', {
        lineHeight: '28px',
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
      'profile-title-sm': ['22px', {
        lineHeight: '28px',
      }],
      'profile-title-md': ['28px', {
        lineHeight: '32px',
      }],
      'profile-title-lg': ['40px', {
        lineHeight: '46px',
      }],
      'profile-title-xl': ['45px', {
        lineHeight: '55px',
      }],

      'profile-body-tb': ['18px', {
        lineHeight: '26px',
      }],

      'bio-head-sm':['16px', {
        lineHeight: '20px',
      }],
      'bio-head-tb':['16px', {
        lineHeight: '24px',
      }],
      'bio-head-lg':['20px', {
        lineHeight: '28px',
      }],
      'bio-head-xl':['24px', {
        lineHeight: '35px',
      }],

      
      'bio-side-sm':['15px', {
        lineHeight: '21px',
      }],
      'bio-side-lg':['18px', {
        lineHeight: '24px',
      }],
      'bio-side-xl':['22px', {
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
      'tagline-tb2': ['34px', {
        lineHeight: '38px',
      }],
      'tagline-tb': ['53px', {
        lineHeight: '58px',
      }],
      'tagline-lg': ['38px', {
        lineHeight: '44px',
      }],
      'tagline-lg2': ['42px', {
        lineHeight: '48px',
      }],
      'tagline-xl': ['48px', {
        letterSpacing: '1px',
        lineHeight: '52px',
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
    },
    letterSpacing: {
      tight: '-2px',
      normal: '0',
      loose: '1px',
      looser: '0.5px',
    },
    screens: {
      'sm': '320px',
      'tb': '640px',
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
