module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"ashiksimon-portfolio","short_name":"portfolio","start_url":"/","background_color":"#c7d8ed","theme_color":"#c7d8ed","icon":"src/images/android-chrome-512x512.png","crossOrigin":"use-credentials","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"4e8c63cbf5993c4b829368cc1a9ec538"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-145326769-2","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"pageTransitionDelay":0,"optimizeId":"YOUR_GOOGLE_OPTIMIZE_TRACKING_ID","experimentId":"YOUR_GOOGLE_EXPERIMENT_ID","variationId":"YOUR_GOOGLE_OPTIMIZE_VARIATION_ID","defer":false,"sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"ashiksimon.me"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
